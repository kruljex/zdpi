import React from 'react';

export default function Label({
  ime,
  name = '',
  state,
  setstate,
  span,
  type = 'checkbox',
  primer = false,
  pokaziprimerState = null,
  url = '',
  logofuncion = null,
}) {

  return ( 
  <label htmlFor = {ime}> {
      state !== undefined ? ( <input type = {
          type
        }
        name = {
          name === '' ? ime : name
        }
        id = {
          ime
        }
        checked = {
          state
        }
        onChange = {
          () => setstate(!ime)
        }
        />
      ) : ( <input type = {
          type
        }
        name = {
          name === '' ? ime : name
        }
        id = {
          ime
        }
        onChange = {
          () => setstate(!ime)
        }
        />
      )
    } <span></span> {
    span
  } {
    primer && ( <p className = "konfigurator__container__pokaziprimer"
      onClick = {
        () => pokaziprimerState(url)
      } >
      Pokaži primer </p>
    )
  } {
    logofuncion
  } </label>
);
}