import _ from 'lodash';
import './style.css';
import { addScore, inputName, submitBtn } from './leaderboard.js';

addScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (isNaN(inputName.value)) {   //  eslint-disable-line
    addScore();
  } else {
    alert('please use letters for name');
  }
});