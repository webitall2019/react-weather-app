import React from 'react'

import classes from '../WeatherResult/WeatherResult.module.css'
function StorageResult (props) {

  let weatherData = props.storageResult;
  let data = [];
  for(var item in weatherData){
    data.push( Math.round( weatherData[item] ) ); 
  } 
  return (
    <div >
      <h2 style={{margin: 'auto'}}>Последний выбраный город</h2>
      <h1>{props.cityName}</h1>
      <div className={classes.WeatherResult}>
      <div className={classes.list}>
        <div className={classes.singleParam}>
          <h2>Температура воздуха</h2>
          <span>{data[3]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Ощущается как</h2>
          <span>{data[1]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Влажность</h2>
          <span>{data[5]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Максимальная Температура воздуха</h2>
          <span>{data[2]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Минимальная Температура воздуха</h2>
          <span>{data[1]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Давление</h2>
          <span>{data[4]}</span>
        </div>
      </div>  
    </div>
    </div>
  )
}
export default StorageResult;