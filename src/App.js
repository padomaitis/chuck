import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from './chuck.jpg';
import SearchForm from './components/SearchForm';
import CategoriesList from './components/CategoriesList';
import JokesList from './components/JokesList';
import fetchData from './services/fetchData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      categories: [],
      searchParam: '',
      size: 25,
      filters: [],
      searchError: undefined,
      likedJokes: []
    }
  }
  componentDidMount() {
    this._getJokesByQuery();
  }

  _getJokesByQuery = (query) => {
    query = query || 'wa'
    fetchData('https://api.chucknorris.io/jokes/search?query='+query)
    .then(data => {
      let jokes = [];
      if(data.result){
        jokes = data.result;
      }
      this.setState({jokes: [...jokes]}, () => this._getCategories());
    })
  }
  _getCategories = () => {
    const categories = new Set();
    this.state.jokes.map(joke => {
      if (joke.category) {
              categories.add(joke.category[0])
      }
    })
    this.setState({categories: [...categories]}) 
  }

  _fetchByCategory = (e) => {
    const category = e.target.value;
    fetchData('https://api.chucknorris.io/jokes/random?category='+category)
    .then(data => {
      this.setState({jokes: [...this.state.jokes,data]});
    })
  }
  _toggleFilterCategory = (e) => {
    const target = e.target;
    const category = target.value;
    let resultFilters = this.state.filters;
    if(resultFilters.indexOf(category)<0){
      this.setState({filters:[...this.state.filters,category]});
      target.classList.add('active');
    }
    else {
      resultFilters = resultFilters.filter((filter)=>{
        return filter!==category;
      });
      this.setState({filters:resultFilters});
      target.classList.remove('active');
    }
  }

  _handleInputChange = (e) => {
    this.setState({searchParam:e.target.value})
  }

  _handleSearch = (e) => {
    e.preventDefault();
    this.setState({searchError:undefined});
    const query = this.state.searchParam;
    if ( query && query.length <3 ) {
      this.setState({searchError:'3 letter minimum'});
      return;
    }
    this._getJokesByQuery(query);
    this.setState({searchParam: ''});
  }
  
  _filterResult = (results) => {
    const filters = this.state.filters;
    let rez = filters.length ? results.filter((result)=> {
        return result.category ? filters.indexOf(result.category[0]) > -1
                               : false ;
    }) : results;
    return rez; 
  }
  
  _getJokes = () => {
    const size = this.state.size;
    const filteredJokes = this._filterResult(this.state.jokes);
    return  filteredJokes.slice(0,size) || [];
  }
  
  _toggleLiked = (id) => (e) => {
    let likedIds = this.state.likedJokes;
    if(likedIds.includes(id)) {
      likedIds = likedIds.filter(likedId => 
        likedId !== id
      )
    }
    else {
      likedIds = [...likedIds, id]
    }
    this.setState({
        likedJokes: likedIds
      })
  }

  render() {
    const jokes = this._getJokes();
    const categories = this.state.categories;
    const likedJokes = this.state.likedJokes;
    return (
        <div>
            <Header/>
            <div className='text-center margin-20'>
              <img className='center-image' src={image} alt='Chuck'/>
              <h1>Chuck Norris facts site</h1>
              <h2>Enter the theme: </h2>
              <SearchForm handleSearch={this._handleSearch}
                          handleInputChange={this._handleInputChange}
                          searchParam={this.state.searchParam}
                          error = {this.state.searchError}
              />
              <CategoriesList categories = {categories} 
                              fetchByCategory = {this._toggleFilterCategory}
              />
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 offset-lg-3'>
                      <JokesList likedJokes = {likedJokes} jokes = {jokes} toggleLiked = {this._toggleLiked}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
