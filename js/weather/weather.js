import { getWeatherInfo } from './getWeatherInfo.js';

let urlMeteo = 'https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.82&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo'

fetch(urlMeteo)
    .then(response => response.json())
    .then(data => tenkiMeteo(data))

function tenkiMeteo(data) {

    function betweenMax(e) {
        for(var i = 0; i < e; i++) {
            var between = Math.round(data.daily.temperature_2m_max[i+1] - data.daily.temperature_2m_max[i]);
            if(between > 1){
                between = "[+" + between + "]";
            } else {
                between = "[" + between + "]";
            }
        }
        return between;
    }

    function betweenMin(e) {
        for(var i = 0; i < e; i++) {
            var between = Math.round(data.daily.temperature_2m_min[i+1] - data.daily.temperature_2m_min[i]);
            if(between > 1){
                between = "[+" + between + "]";
            } else {
                between = "[" + between + "]";
            }
        }
        return between;
    }
    
    for(var i = 1; i < 8; i++) {
        document.querySelector(".js_forecast_condition_day" + i).innerText = getWeatherInfo(data.daily.weathercode[i]).label;
        document.querySelector(".js_forecast_img_day" + i).src = getWeatherInfo(data.daily.weathercode[i]).icon;
        document.querySelector(".js_temp_celsius_max_day" + i).innerText = data.daily.temperature_2m_max[i] + "℃";
        document.querySelector(".js_temp_celsius_min_day" + i).innerText = data.daily.temperature_2m_min[i] + "℃";
        document.querySelector(".js_temp_between_max_day" + i).innerText = betweenMax(i);
        document.querySelector(".js_temp_between_min_day" + i).innerText = betweenMin(i);
    }

    for(var i = 3; i < 8; i++) {
        var dateMeteo =  data.daily.time[i];
        var newDate = new Date(dateMeteo);
        var month = newDate.getMonth() + 1 ;
        var day = newDate.getDate() ;
        var dayOfWeek = newDate.getDay() ;
        var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;
    
        document.querySelector(".js_forecast_head_day" + i).innerText = month + "月" + day + "日 (" + dayOfWeekStr  + "）";
    }
    
}

let urlLive = 'https://weather.tsukumijima.net/api/forecast/city/130010'

fetch(urlLive)
    .then(response => response.json())
    .then(data => tenkiLive(data))

function tenkiLive(data) {

    for(var i = 1; i < 3; i++) {
        document.querySelector(".js_precip_volume_0-6_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T00_06;
        document.querySelector(".js_precip_volume_6-12_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T06_12;
        document.querySelector(".js_precip_volume_12-18_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T12_18;
        document.querySelector(".js_precip_volume_18-24_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T18_24;
    }

}