import React from 'react';

import './Loader.scss';

function Loader() {
  return (
    <div className="Loader">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
