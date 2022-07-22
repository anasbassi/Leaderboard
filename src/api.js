/* eslint-disable*/
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');

const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      name: 'My Game',
    }),
  });
  const result = await response.json();
  return result;
};

const saveUser = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7bassiOTTVg2fUdz/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: inputName.value,
      score: inputScore.value,
    }),
  });
  const data = await response.json();
  return data;
};

const getUser = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7bassiOTTVg2fUdz/scores/');
    const data = await response.json();
    return data;
};

export {
  saveUser, getUser, inputName, inputScore,
};