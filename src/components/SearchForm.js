import React  from 'react';

const SearchForm = (props) => {
 return (
    <form className="form-inline my-2 my-lg-0 search-form">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={props.handleInputChange} value={props.searchParam}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleSearch}>Search</button>
    </form>
 );
};

export default SearchForm;
