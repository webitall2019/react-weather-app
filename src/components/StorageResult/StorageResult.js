import React from 'react'
import classes from './StorageResult.module.css'

function StorageResult (props) {

  let weatherData = props.storageResult;
  let data = [];
  for(var item in weatherData){
    data.push( Math.round( weatherData[item] ) ); 
  } 
  return (
    <div>
      <h2 style={{margin: 'auto'}}>Последний выбраный город</h2>
      <h1>{props.cityName}</h1>
      <div className={classes.StorageResultWrap}>
        <div className={classes.StorageResult}>
          <h2>Teмпература воздуха</h2>
          {data[3]}
        </div>
        <div className={classes.StorageResult}>
          <h2>Ощущается как</h2>
          {data[1]}
        </div>
        <div className={classes.StorageResult}>
          <h2>Влажность</h2>
          {data[5]}
        </div>
        <div className={classes.StorageResult}>
          <h2>Максимальная Температура воздуха</h2>
          {data[2]}
        </div>
        <div className={classes.StorageResult}>
          <h2>Минимальная Температура воздуха</h2>
          {data[1]}
        </div>
        <div className={classes.StorageResult}>
          <h2>Давление</h2>
          {data[4]}
        </div>
      </div>
    </div>
  )
}
export default StorageResult;