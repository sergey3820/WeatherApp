import React, { useEffect, useState } from 'react';
import "./App.css";
import backgroundImage from "./background.png";
import Contact from './Contact/Contact';
import Header from './Header/Header';
import InputPlace from './InputPlace/InputPlace';
import Weather from './weather/Weather';


function App() {

    const [inputValue, setInputeValue] = useState();
    const [country, setCountry] = useState('Armenia');
    const [cloud, setCloud] = useState();
    const [icon, setIcon] = useState();
    const [iconText, setIconText] = useState();
    const [temp, setTemp] = useState();
    const [hum, setHum] = useState();
    const [press, setPress] = useState();
    const [wind, setWind] = useState();

    const KEY = '4caba0d598d44ddd827210317202611';

    useEffect(() => {
        getApi();
        console.log('All is working, be sure!');
    }, [country]);

    const getApi = async() => {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${country}`);
        const data = await res.json();
        console.log(data);
        console.log(data.current.cloud);
        setCloud(data.current.cloud);
        setIcon(data.current.condition.icon);
        setIconText(data.current.condition.text);
        setTemp(data.current.temp_c);
        setHum(data.current.humidity);
        setPress(data.current.pressure_in);
        setWind(data.current.wind_kph);
    }

    return (
        <div className="main_wrapper">
            <Header />
            <InputPlace setCountry={setCountry} inputValue={inputValue} setInputeValue={setInputeValue} />
            <div className="mainBlock">
                <Weather wind={Math.floor(wind)} press={Math.floor(press)} hum={hum} iconText={iconText} temp={Math.floor(temp)} icon={icon} cloud={cloud} country={country} />
                <Contact />
            </div>
        </div>
    )
}

export default App;
