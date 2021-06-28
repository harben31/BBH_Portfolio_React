import React from 'react';
import './style.css';

const Search = (props) => {
    return (
        <div id='searchWrap'>
            <h3>search by technology</h3>
            <input type='text' name='searchBar' id='searchBar' onChange={props.handleFilter}/>
        </div>
    );
};

export default Search;