import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './wizard-logo.png';

const Logo = () => {
  return (
    <div className="pl5 mt0">
      <Tilt>
        <div>
          <img src={logo} alt="logo" className="w3" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
