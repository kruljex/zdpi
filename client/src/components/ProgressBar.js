import React, { useRef, useEffect } from 'react';
import '../sass/components/progress_bar.scss';
import { Izdelava, Dizajn, Marketing, Seo, Logo, Vprasaj } from './svgs';

function ProgressBar({ current, maxPage }) {
  const bar = useRef();

  useEffect(() => {
    if (current <= maxPage) {
      const spans = bar.current.getElementsByTagName('span');
      const divs = bar.current.getElementsByTagName('DIV');
      divs[current].classList.add('progress_bar__div--current');
      if (current >= 1 && current <= 5) {
        spans[current - 1].classList.add('spancurrent');
      }
      for (var i = 0; i < divs.length; i++) {
        if (i !== current) {
          divs[i].classList.remove('progress_bar__div--current');
          if (current > i) {
            setTimeout(function () {
              divs[current].classList.add('bgBlue');
            }, 1200);
          }
        }
      }
    }
  });

  return (
    <div className="progress_bar" ref={bar}>
      <div className="progress_bar__div bgBlue">
        <Vprasaj />
      </div>
      <span></span>
      <div className="progress_bar__div">
        <Dizajn />
      </div>
      <span></span>
      <div className="progress_bar__div">
        <Seo />
      </div>
      <span></span>
      <div className="progress_bar__div">
        <Logo />
      </div>
      <span></span>
      <div className="progress_bar__div">
        <Marketing />
      </div>
      <span></span>
      <div className="progress_bar__div">
        <Izdelava />
      </div>
      <div></div>
    </div>
  );
}

export default ProgressBar;
