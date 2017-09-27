import fetchData from './services/fetchData';

 const getJokesByQuery = (query='wa') => {
    fetchData('https://api.chucknorris.io/jokes/search?query='+query)
    .then(data => {
      let jokes = [];
      if(data.result){
        jokes = data.result;
      }
      return jokes;
    })
}

export default getJokesByQuery;