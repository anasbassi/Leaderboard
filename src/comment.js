const commentPopup = async () => {
  const movies = await fetch('https://yts.mx/api/v2/list_movies.json');
  const data = await movies.json();

};