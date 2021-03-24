/* Здравствуйте, прошу не пугайтесь моему творению, я прекрасно понимаю что в коде куча костылей и т.д, прошу только не судить строго, я старался, просто нужен совет более опытных людей */
import classes from './App.module.css';
import React from 'react';
import WeatherResult from './components/WeatherResult/WeatherResult';
import StorageResult from './components/StorageResult/StorageResult';
const API_KEY = "a7ea5ac5cca07837dfd1a5769b585730"

class App extends React.Component {
  state = {
    userCity: '',
    error: false,
    errorMessage: '',
    requestApi: Boolean,
    main: [],
    fromStorage: false,
    storageArr: null,
  }
  
  getWeather = async (event, city) => {
    console.log(this.state.userCity)
    event.preventDefault();
    if(this.state.userCity === ''){
      return
    }
    city = this.state.userCity;
    /* ==== попытка получить данные от API ==== */
    try {
      let apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dnepr,ua&units=metric&appid=${API_KEY}`);
      
        let answer = await apiRequest.json();
        if (answer.main){
          Array( answer.main ).map( (item) => {
            this.setState({
              requestApi: true,
              answerCod: answer.cod,
              main: [item],
            })
          })
        } /* ====== в  случае ошибки ответа ===== */
        else {
          this.setState({
            requestApi: false,
            error: true,
            errorMessage: 'Ошибка при вводе',
            fromStorage: true
          })
          console.log(this.state.errorMessage)
        }
        /* ==== очистка и установка значений в локалсторедж ==== */
        localStorage.clear();
        localStorage.setItem('info', JSON.stringify(this.state.main))
        localStorage.setItem('city', this.state.userCity)
    }
    catch(error) {
      console.log(error);
    }
  }
  
  /* ==== скромный обработчик ошибок ===== */
  errorHandler() {
    if( this.state.error ){
      return (this.state.errorMessage)
    }
    else if (!this.state.requestApi) {
      return this.state.errorMessage
    }
  }
  /* ===== проверка на длину и получение города из инпута ===== */
  getCity(value) {
    console.log(typeof value)
    if( value.length < 3 ){
      this.setState({
        error: true,
        errorMessage: 'недостаточно символов или ошибка при вводе'
      })
    }
    else {
      this.setState({
        error: false,
        userCity: String(value)
      })
    } 
  }   
  
  render() { 
    let sityNameFromStorage = localStorage.getItem('city')
    let  dataFromStorage  = JSON.parse(localStorage.getItem('info') );
    let storage;
    if( dataFromStorage != undefined ){
      //console.log(typeof storage);
      storage = dataFromStorage.map( (elem, index) => {
        return (
          <StorageResult storageResult={elem} key={index} cityName={sityNameFromStorage}/>
        )
      })
      localStorage.removeItem('info')
    }
      
    let result = null;
    if(this.state.requestApi){
      result = this.state.main.map( (elem, index) => {
        return <WeatherResult results={elem} key={index} city={this.state.userCity}/>
      }) 
    }
    return (
      <div className={classes.App}>
        <h1>Выберите один из Украинских городов</h1>
        <form>
          <input type="text" name="search" onChange={ (event) => this.getCity(event.target.value) }/>
          <span>
            { this.errorHandler() }
          </span>
          <button type="submit" onClick={ (event)=> this.getWeather(event) }>
            Узнать
          </button>
        </form>
        <div className={classes.fromStorage}>
          <h1>{this.state.userCity}</h1>
        </div>
        { result }
        { storage }
      </div>
    ) 
  }  
}

export default App;
