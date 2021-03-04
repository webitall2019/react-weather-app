import React from 'react'
import classes from './WeatherResult.module.css'
function WeatherResult ( props ) {
  const params = props.results;
  console.log(params)
  let param = [];
  for(let item in params){
    param.push( Math.round( params[item] ) ); 
  }
  return(
    <div className={classes.WeatherResult}>
      <div className={classes.list}>
        <div className={classes.singleParam}>
          <h2>Температура воздуха</h2>
          <span>{param[3]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Ощущается как</h2>
          <span>{param[1]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Влажность</h2>
          <span>{param[5]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Максимальная Температура воздуха</h2>
          <span>{param[2]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Минимальная Температура воздуха</h2>
          <span>{param[1]}</span>
        </div>
        <div className={classes.singleParam}>
          <h2>Давление</h2>
          <span>{param[4]}</span>
        </div>
      </div>  
    </div>
    
  )
}
export default WeatherResult;