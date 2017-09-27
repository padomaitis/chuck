import fetchData from './services/fetchData';

const getCategories = () => {
    fetchData('https://api.chucknorris.io/jokes/categories')
    .then(data => {
      this.setState({categories: data});
    })
  }

export default getCategories;