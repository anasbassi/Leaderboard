/* eslint-disable*/
import _ from 'lodash';
import './style.css';
import { addScore, submitBtn, scoreBoard } from './leaderboard';

const refreshBtn = document.querySelector('.refresh');

addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
});

refreshBtn.addEventListener('click', scoreBoard);

document.addEventListener('DOMContentLoaded', scoreBoard);