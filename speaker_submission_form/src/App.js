import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Style.css';

import Banner from './components/banner';
import FormContent from './components/form-content';

function App() {
  return (
    <>
    <div className="main-content">
      <Banner />
      <FormContent />
    </div>
    </>
  );
}

export default App;
