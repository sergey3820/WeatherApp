import React from 'react';
import "./Weather.css";

function Weather({ cloud, icon, temp, iconText, hum, press, wind, country }) {
    return (
        <div className={`weather_wrapper ${temp < 0 && temp > -20 ? 'back1' :
                                           temp > 0 && temp < 10 ? 'back2' :
                                           temp > 10 && temp < 20 ? 'back3' :
                                           temp > 20 && temp < 40 ? 'back4' :
                                           'back5' }`}>
            <div className="weather">
                   <p className="weather_title">{ country }</p>
                <div className="tempBlock">
                  <p className="temp">+{ temp }&deg;</p>
                <img
                width1="100px"
                height="100px"
                 src={ icon } alt="cloudIcon"/>
                 <p style={{color: 'white'}}>{ iconText }</p>
                </div>
                <div className="tempParams">
                    <div className="param_1">
                        <p className="press" style={{fontSize: '18px'}}>Довление { press } %</p>
                        <p className="vlajnost" style={{fontSize: '19px'}}>Влажность { hum } %</p>
                    </div>
                    <div className="param_2">
                      <p className={`cloudly ${cloud < 0 ? 'n' : ''}`} style={{fontSize: '19px'}}>обл․ - { cloud } %</p>
                      <p style={{fontSize: '19px'}}>ветер { wind } кпх</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;
