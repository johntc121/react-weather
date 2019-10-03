import React, {Component} from 'react';
import './App.css';
import Head from './components/Head/Head'

import CurrentDay from './components/CurrentDay/CurrentDay'
//import DayList from './components/DayList/DayList'

const API_KEY = '87e2853542fe00445f87dba1e2e72c8b';

class App extends Component {

  state = {
    city: '', // location: input.value
    currentDay: null, //currentDay: [newDay]
    // nextFiveDays: [
    // ] //nextFiveDays: [newDay, newDay, newDay, newDay, newDay]
  }

  

  getWeather = async () => {
    const current_api_call = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=${API_KEY}`);

    const data = await current_api_call.json()
    console.log("Today ", data)

    this.setCurrentDay(data);
  }

  // getForcast = async () => {
  //   const forcast_api_call = await fetch(`
  //     https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=imperial&appid=${API_KEY}`);
  
  //   const forcast_data = await forcast_api_call.json();

  //   console.log("Forcast ", forcast_data)

  //   this.setForcast(forcast_data);
  // }

  setCurrentDay = (data) => {
    const currentDay = {city: data.name, temp: Math.ceil(data.main.temp), 
      weatherType: data.weather[0].main, icon: data.weather[0].icon}

    this.setState({currentDay: currentDay})
  }

  setForcast = (data) => {
    //const currentDay, day1, day2, day3, day4, day5;
    const date = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    const today = daysOfWeek[date.getDay()];

    let index = daysOfWeek.indexOf(today) - 1;

    const bT = daysOfWeek.slice(0, index);
    const aT = daysOfWeek.slice(index);

    const newDaysArr = aT;
    for(let i =0; i < bT.length; i++) {
      newDaysArr.push(bT[i])
      if(newDaysArr.length === 6){
        break;
      }
    }
    
    const dayList = [];

    for(let i = 0; i < data.list.length; i++) {
      let dt = data.list[i].dt_txt
      let contains = dt.includes("15:00:00");
      if(contains) {
        dayList.push(data.list[i])
      }
    };

    console.log(dayList)
    const nextFiveDays = [];

    for(let i = 0; i < dayList.length; i++){
      nextFiveDays.push({id: Math.random(), day: newDaysArr[i+1], temp: Math.ceil(dayList[i].main.temp), weatherType: dayList[i].weather[0].main})
    }

    this.setState({nextFiveDays: nextFiveDays})

  }


  setLocationHandler = (e) => this.setState({
    city: e.target.value
  });

  onSubmit = (e) => {
    this.getWeather();
    //this.getForcast()
  }

  render() {
    // let days = null;

    // if(this.state.nextFiveDays.length !== 0){
    //   days = (
    //     <DayList days={this.state.nextFiveDays}/>
    //   );
    // }

    let currentDay = null;

    if(this.state.currentDay !== null) {
      currentDay = <CurrentDay currentDay={this.state.currentDay}/>
    }

    return (
      <div className="App">
        <Head setLocation={this.setLocationHandler} clicked={this.onSubmit}/>
        {currentDay}
        {/* <div className="Days">
          <DayList days={this.state.nextFiveDays}/>
        </div> */}
      </div>
    );
  }
}

export default App;
