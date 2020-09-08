const Mail = require('../utils/mail');
const mail = require('../utils/mail');
const emailVal = require('email-validator');
exports.sendMail = async (req, res) => {
  try {
    const { sender, subject, text, html } = req.body;
    if (!sender || !subject || !text) {
      return res.json({ success: 0, msg: 'Izpolnite vsa polja' });
    }
    if (emailVal.validate(sender) === false) {
      return res.json({ success: 0, msg: 'Vnesite pravilen e-mail' });
    }

    if (text.length > 1000) {
      return res.json({ success: 0, msg: 'Besedilo je predolgo.' });
    }
    if (subject.length > 35) {
      return res.json({ success: 0, msg: 'Ime je predolgo.' });
    }
    let receiver = req.body.receiver;
    if (!receiver) {
      receiver = 'info@instrukcije-klopcic.si';
    }
    await mail(receiver, sender, subject, text, html);
    res.status(200).json({
      success: 1,
      msg: 'Sporočilo uspešno poslano!'
    });
  } catch (err) {
    if (err.responseCode === 550) {
      return res.json({ success: 0, msg: 'Vnesen e-mail ni pravilen' });
    }
    console.log(err);
    res.json({
      success: 0,
      msg: 'Prišlo je do napake, poskusite kasneje.'
    });
  }
};
