import React from 'react';
const CategoriesList = (props) => {
    const {categories,fetchByCategorie} = props;
    return (
        <div className="btn-group margin-20" role="group" aria-label="Basic example">
            {categories.map((categorie,index) => {
               return <button onClick={props.fetchByCategory} key={index} type="button" className="btn btn-secondary" value={categorie}>{categorie}</button>
            })}
        </div>
    )
}

export default CategoriesList;