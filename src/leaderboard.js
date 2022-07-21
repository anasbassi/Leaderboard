const scoreList = document.querySelector('.score-list');
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');
const submitBtn = document.querySelector('.btn');

const addScore = () => {
  if (!inputName.value || !inputScore.value) return;
  const score = document.createElement('li');
  score.classList.add('list-item');
  score.innerText = `${inputName.value} : ${inputScore.value}`;
  scoreList.appendChild(score);
};

export {
  addScore, scoreList, inputName, inputScore, submitBtn,
};