import React from 'react';
import "./style.scss"

function AboutStory() {
  return (
    <div>
      <div className="about">
        <div className="about_left">
          <h1>About Our Story</h1>
          <p>
            Who are in extremely love with eco friendly system. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button className="red_btn">VIEW FULL MENU</button>
        </div>
        <div className="about_right">
          <img
            src="https://preview.colorlib.com/theme/marco/img/about-img.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
