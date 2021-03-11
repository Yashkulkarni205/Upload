import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Upload from './Upload'
import View from './View'
import reportWebVitals from './reportWebVitals';

const clickview = () =>
{
  document.getElementById("upload").style.display = "none";
  document.getElementById("view").style.display = "block";
}

const clickupload = () =>
{
  document.getElementById("view").style.display = "none";
  document.getElementById("upload").style.display = "block";
}

ReactDOM.render(
  <div id="container">
    <div id="upload">
    <Upload />
    <button onClick = {clickview}>View Files</button>
    </div>
    <div id="view">
    <View />
    <button onClick = {clickupload}>Upload Files</button>
    </div>
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
