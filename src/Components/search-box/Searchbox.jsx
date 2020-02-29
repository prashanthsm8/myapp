import React from 'react'
import './Searchbox.css'

export const Searchbox = ({placeholder,handleevent}) => (
    <input placeholder={placeholder} type="search"  className='search'
            onChange={handleevent}
          ></input>
);