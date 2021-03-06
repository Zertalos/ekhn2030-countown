import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
    urlBase: 'https://matomo.zockfreunde.de',
    siteId: 1,
    // trackerUrl: 'https://ekhn2030.de/tracking.php', // optional, default value: `${urlBase}matomo.php`
    // srcUrl: 'https://www.ekhn2030.de/tracking.js', // optional, default value: `${urlBase}matomo.js`
    disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
    heartBeat: { // optional, enabled by default
        active: true, // optional, default value: true
        seconds: 10 // optional, default value: `15
    },
    linkTracking: true, // optional, default value: true
    configurations: { // optional, default value: {}
        // any valid matomo configuration, all below are optional
        disableCookies: true,
        setSecureCookie: true,
        setRequestMethod: 'POST'
    }
})
ReactDOM.render(
  <React.StrictMode>
      <MatomoProvider value={instance}>
      <App />
      </MatomoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
