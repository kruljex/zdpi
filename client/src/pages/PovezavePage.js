import React from 'react';
import '../sass/pages/povezave_page.scss';
import { Link } from 'react-router-dom';

export default function PovezavePage() {
  return (
    <div className="povezave">
      <h1>Pomebne informacije o digitalizaciji podjetja</h1>
      <div className="povezave__container">
        <Link to="/povezave/2">
          <div className="povezave__post">
            <h2>Ne zatiskajmo si oči – digitalizacija poslovanja je nujna</h2>
            <p>
              Razmere, ki jih je povzročil covid in posledično karantena, so
              jasno pokazale potrebo po digitalizaciji celotnega poslovanja.
            </p>
            <img src="/images/clanek.jpg" alt="clanek img" />
          </div>
        </Link>
        <Link to="/povezave/3">
          <div className="povezave__post">
            <h2>Ne zatiskajmo si oči – digitalizacija poslovanja je nujna</h2>
            <p>
              Razmere, ki jih je povzročil covid in posledično karantena, so
              jasno pokazale potrebo po digitalizaciji celotnega poslovanja.
            </p>
            <img src="/images/clanek.jpg" alt="clanek img" />
          </div>
        </Link>
        <Link to="/povezave/5">
          <div className="povezave__post">
            <h2>Ne zatiskajmo si oči – digitalizacija poslovanja je nujna</h2>
            <p>
              Razmere, ki jih je povzročil covid in posledično karantena, so
              jasno pokazale potrebo po digitalizaciji celotnega poslovanja.
            </p>
            <img src="/images/clanek.jpg" alt="clanek img" />
          </div>
        </Link>
        <Link to="/povezave/5">
          <div className="povezave__post">
            <h2>Ne zatiskajmo si oči – digitalizacija poslovanja je nujna</h2>
            <p>
              Razmere, ki jih je povzročil covid in posledično karantena, so
              jasno pokazale potrebo po digitalizaciji celotnega poslovanja.
            </p>
            <img src="/images/clanek.jpg" alt="clanek img" />
          </div>
        </Link>
        <Link to="/povezave/5">
          <div className="povezave__post">
            <h2>Ne zatiskajmo si oči – digitalizacija poslovanja je nujna</h2>
            <p>
              Razmere, ki jih je povzročil covid in posledično karantena, so
              jasno pokazale potrebo po digitalizaciji celotnega poslovanja.
            </p>
            <img src="/images/clanek.jpg" alt="clanek img" />
          </div>
        </Link>
      </div>
    </div>
  );
}
