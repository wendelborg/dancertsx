import * as fluentui from '@fluentui/react';
import * as vega from 'vega';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { Explorer, use } from '@msrvida/sanddance-explorer';
import reportWebVitals from './reportWebVitals';

//quickstart: use the included stylesheet
import "@msrvida/sanddance-explorer/dist/css/sanddance-explorer.css"
import "./index.css"

fluentui.initializeIcons();

use(fluentui, React, ReactDOM, vega as any);

const data = [
  { a: 1, b: "c1" },
  { a: 1, b: "c2" },
  { a: 2, b: "c3" },
  { a: 3, b: "c4" }
];

const explorerProps = {
  logoClickUrl: "https://microsoft.github.io/SandDance/",
  mounted: (explorer: any) => {
    explorer.load(data);
  }
};

ReactDOM.render(React.createElement(Explorer, explorerProps), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
