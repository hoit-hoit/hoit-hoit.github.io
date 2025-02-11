/**
 * KEY = 86922f1f78dd2e8631b2c6deeab4d5fe
 * 동기식
 * 비동기식
 */
const locationElem = document.querySelector(".weather>span:nth-child(2)");
const tempElem = document.querySelector(".weather>span:nth-child(3)");
const success = (position)=>{
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = `86922f1f78dd2e8631b2c6deeab4d5fe`;
  let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  // console.log(URL);
  fetch(URL).then( (response)=>{
    return response.json();
  }).then((data)=>{
    // console.log(data);
    // console.log(data.name);
    // console.log(Math.floor(data.main.temp-273.15));
    let sunrise = new Date(data.sys.sunrise*1000);
    // console.log(sunrise);  
    locationElem.textContent = `${data.name}`;
    tempElem.textContent = `${Math.floor(data.main.temp-273.15)}℃`;     
  });
}



const error =()=>{
  console.log("error");
}
const weather_init =()=>{
  if(!navigator.geolocation){    
    console.log("현재 위치를 가져올 수 없습니다.");
  }else{
    console.log("위치 파악 중....");
    navigator.geolocation.getCurrentPosition(success,error);
  }
}
weather_init();