import React from 'react';
const CategoriesList = (props) => {
    const {categories,fetchByCategory} = props;
    return (
        <div className="btn-group margin-20" role="group" aria-label="Basic example">
            {categories.map((categorie) => {
               return <button onClick={fetchByCategory} key={categorie} type="button" className="btn btn-secondary" value={categorie}>{categorie}</button>
            })}
        </div>
    )
}

export default CategoriesList;