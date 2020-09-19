import React, { useState, useEffect } from 'react';
import '../sass/pages/kontakt_page.scss';
import { Email, Phone, Location } from '../components/svgs';
import { sendEmail } from '../actions';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator';
import Maps from '../components/Maps';

function KontaktPage(props) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [sendemail, setsendemail] = useState(false);
  const [msg, setmsg] = useState('');
  const [jsonRes, setjsonRes] = useState(false);

  function sendEmail() {
    if (name === '' || email === '' || message === '') {
      setsendemail(false);
      setmsg('Izpolniti morate vsa polja');
    } else {
      const mail = EmailValidator.validate(email);
      if (mail) {
        props.sendEmail(name, email, message);
      } else {
        setsendemail(false);
        setmsg('Napačen e-mail naslov');
      }
    }
  }

  useEffect(() => {
    if (props.email.email) {
      if (props.email.email.success === 1) {
        setsendemail(false);
        setjsonRes(true);
        setmsg(props.email.email.msg);
        setname('');
        setemail('');
        setmessage('');
      } else if (props.email.email.success === 0) {
        setsendemail(false);
        setjsonRes(false);
        setmsg(props.email.email.msg);
      }
    }
  }, [props.email.email]);

  return (
    <div className="kontakt">
      <div className="kontakt__container">
        <div className="kontakt__container--sendmessage">
          <h1>Pošljite nam sporočilo</h1>
          <label htmlFor="name">
            <span>Ime</span>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Janez"
            />
          </label>
          <label htmlFor="email">
            <span>E-mail</span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="janeznovak@gmail.eu"
            />
          </label>
          <label htmlFor="message">
            <span>Sporočilo</span>
            <textarea
              name="message"
              value={message}
              placeholder="Pozdravljeni, zanima me ..."
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </label>
          <div className="btndiv">
            {msg !== '' && (
              <span className={jsonRes ? 'success' : 'fail'}>{msg}</span>
            )}
            {sendemail === false ? (
              <button
                onClick={() => {
                  setsendemail(true);
                  sendEmail();
                }}
              >
                Pošlji
              </button>
            ) : (
              <p>
                Pošiljanje <span className="dot one">.</span>
                <span className="dot two">.</span>
                <span className="dot three">.</span>
              </p>
            )}
          </div>
        </div>
        <div className="kontakt__container--mapskontakt">
          <Maps />
          <div className="kontaktinfo">
            <span>
              <Email />
              <a href="mailto:info@zdpi.si">info@zdpi.si</a>
            </span>
            <span>
              <Phone />
              <a href="tel: 040 231 211">040-231-211</a>
            </span>
            <span>
              <Location />
              <a href="https://www.google.com/maps/place/Kotnikova+ulica+5,+1000+Ljubljana/@46.0540015,14.5102951,17z/data=!3m1!4b1!4m5!3m4!1s0x47653282b7c89473:0x5f4ab0dadcd611a!8m2!3d46.0540015!4d14.5124838">
                Kotikova ulica 5, 1000 Ljubljana
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ email }) => {
  return {
    email,
  };
};

export default connect(mapStateToProps, { sendEmail })(KontaktPage);
