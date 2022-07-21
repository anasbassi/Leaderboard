/* eslint-disable*/
import _ from 'lodash';
import './style.css';
import { addScore, inputName, submitBtn } from './leaderboard';

addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  clearInputField();
});