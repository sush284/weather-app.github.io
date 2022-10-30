const API_KEY=`b062de1cb585d45421ff5c8528f9e98a`;
// const API=``
// const IMG_URL=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form=document.querySelector('form');
const search=document.getElementById('search');
const searchBtn=document.getElementById('searchBtn');
const weather=document.getElementById('weather');

const getWeather=async(city)=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response= await fetch(url);
    // console.log(response);
    const data= await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather=(data)=>
{
    weather.innerHTML=`
    <div class="col ml-10 " class="position-relative">
                            <p class="fs-4">Weather in ${data.name}, ${data.sys.country}</p>
                            <p class="fs-2 mb-1">${data.main.temp} &#8451;</p>
                            <div class="d-flex flex-row bd-highlight mb-1">
                                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="weatherImage" style="width:5em;height:5em;" alt="">
                                <p class="font-weight-light mt-4" id="weatherCondition">${data.weather[0].main}</p>
                            </div>
                                <p class="font-weight-lighter mb-0">Humidity: ${data.main.humidity}</p>
                            <p class="font-weight-lighter">Wind Speed:  ${data.wind.speed}</span>
                            </p>
                       
                            
                            </div>
                        
    `
}

form.addEventListener('submit',function(event){
    getWeather(search.value)
    event.preventDefault();
})