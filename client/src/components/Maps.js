import React from 'react';
import '../sass/components/maps.scss';

export default function initMap() {
  return (
    <div className="maps">
      <iframe
        title="Lokacija"
        src="https://maps.google.com/maps?q=kotnikova%20ulica%205&t=&z=13&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
      ></iframe>
    </div>
  );
}
