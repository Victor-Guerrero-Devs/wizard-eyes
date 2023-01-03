import React from 'react';

const ImageLinkForm = ({ logEvent, onBtnSubmit }) => {
  return (
    <div className="tc">
      <p className="f3">
        Detect any face within any picture with Wizard Eyes today!
      </p>
      <div className="pl2 pr2">
        <input
          type="text"
          className="f4 pa2"
          placeholder="Image URL"
          onChange={logEvent}
        />
        <button
          className="f4 link ph3 pv2 dib white bg-light-purple pointer"
          onClick={onBtnSubmit}
        >
          Detect Face
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
