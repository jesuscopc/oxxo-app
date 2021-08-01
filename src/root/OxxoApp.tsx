import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const MlApp = (): React.ReactElement => {
  return (
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  );
};

export default MlApp;
