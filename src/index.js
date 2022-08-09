/* eslint-disable*/
import _ from 'lodash';
import './style.css';
import { addScore, submitBtn, scoreBoard } from './leaderboard';
import { inputName, inputScore } from './api';

const refreshBtn = document.querySelector('.refresh');

addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  inputName.value ="";
  inputScore.value ="";
});

refreshBtn.addEventListener('click', scoreBoard);

document.addEventListener('DOMContentLoaded', scoreBoard);