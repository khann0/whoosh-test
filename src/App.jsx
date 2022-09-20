import React from 'react';

import { Header, Main, Info, Partners, Intro, Payment, More, Footer, Separator } from './components';

import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Main />
        <Info />
        <Separator />
        <Partners />
        <Intro />
        <Payment />
        <Separator />
        <More />
      </main>
      <Footer />
    </div>
  );
}

export default App;
