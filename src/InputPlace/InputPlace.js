import React from 'react';
import "./InputPlace.css";
import searchIcon from "./search_1.png";

function InputPlace({ setInputeValue, inputValue, setCountry }) {

    const takeValue = (e) => {
        e.preventDefault();
        setInputeValue(e.target.value);
        console.log(e.target.value);
    }

    const getValue = (e) => {
        e.preventDefault();
        setCountry(inputValue);
    }

    return (
        <form className="inputPlace_wrapper">
            <input type="text" placeholder="Город или район" className="inputPlace_input" value={inputValue} onChange={takeValue}/>
             <button type="submit" onClick={getValue}><img src={searchIcon} alt="searchIcon"/></button>
        </form>
    )
}

export default InputPlace;
