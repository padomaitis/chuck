import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from './chuck.jpg';
import Joke from './components/Joke';
import LikeBadge from './components/LikeBadge';
import SearchForm from './components/SearchForm';
import CategoriesList from './components/CategoriesList';
import fetchData from './services/fetchData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      categories: [],
      searchParam: '',
      size: 25,
      filters: []
    }
  }
  componentDidMount() {
    this._getRandomJoke();
    this._getCategories();
    this._getJokesByQuery();
  }

  _getJokesByQuery(query='wa') {
    fetchData('https://api.chucknorris.io/jokes/search?query='+query)
    .then(data => {
      let jokes = [];
      if(data.result){
        jokes = data.result;
      }
      this.setState({jokes: [...jokes]});
    })
  }
  _getRandomJoke() {
    fetchData('https://api.chucknorris.io/jokes/random')
    .then(data => {
      this.setState({jokes: [...this.state.jokes,data]})
    })
  }

  _getCategories() {
    fetchData('https://api.chucknorris.io/jokes/categories')
    .then(data => {
      this.setState({categories: data});
    })
  }
  _fetchByCategory(e) {
    const category = e.target.value;
    fetchData('https://api.chucknorris.io/jokes/random?category='+category)
    .then(data => {
      this.setState({jokes: [...this.state.jokes,data]});
    })
  }
  _toggleFilterCategory(e) {
    const target = e.target;
    const category = target.value;
    let resultFilters = this.state.filters;
    if(resultFilters.indexOf(category)<0){
      this.setState({filters:[...this.state.filters,category]});
      target.classList.add('active');
    }
    else {
      resultFilters = resultFilters.filter((filter)=>{
        return filter!=category;
      });
      this.setState({filters:resultFilters});
      target.classList.remove('active');
    }
  }

  _handleInputChange(e) {
    this.setState({searchParam:e.target.value})
  }

  _handleSearch(e) {
    e.preventDefault();
    const query = this.state.searchParam;
    if(query.length<3) {
      return;
    }
    this._getJokesByQuery(query);
    this.setState({searchParam:''});
  }
  
  _filterResult(results) {
    const filters = this.state.filters;
    let rez = filters.length ? results.filter((result)=> {
        return result.category ? filters.indexOf(result.category[0]) > -1
                               : false ;
    }) : results;
    return rez; 
  }

  render() {
    let size = this.state.size;
    let filteredJokes = this._filterResult(this.state.jokes);
    let jokes = filteredJokes.slice(0,size) || [];
    let categories = this.state.categories;
    return (
      <div>
        <Header/>
        <div className='text-center margin-20'>
         <img className='center-image' src={image} alt='Chuck'/>
         <h1>Chuck Norris facts site</h1>
         <h2>Enter the theme: </h2>
         <SearchForm handleSearch={this._handleSearch.bind(this)}
                    handleInputChange={this._handleInputChange.bind(this)}
                    searchParam={this.state.searchParam}
         />
         <CategoriesList categories = {categories} fetchByCategory = {this._toggleFilterCategory.bind(this)}/>
         <div className='container'>
           <div className='row'>
              <div className='col-lg-6 offset-lg-3'>
                {
                  jokes.length>0 ?
                  jokes.map((joke)=>{
                  return <Joke key={joke.id}
                                value={joke.value}
                                category={joke.category}/>
                })
                : <h4>Oops, couldn't find anything :)</h4>
                }
              </div>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
