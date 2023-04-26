//getWeatherInfo.jsを読み込み
import { getWeatherInfo } from './getWeatherInfo.js';

//Open-MeteoからAPIを取得
let urlMeteo = 'https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.82&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo'

fetch(urlMeteo)
    .then(response => response.json())
    .then(data => tenkiMeteo(data))

//Open-Meteoの処理を実行
function tenkiMeteo(data) {

    //先日との最高気温の差を計算
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

    //先日との最低気温の差を計算
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

    //取得データを表示
    for(var i = 1; i < 8; i++) {
        document.querySelector(".js_forecast_condition_day" + i).innerText = getWeatherInfo(data.daily.weathercode[i]).label;
        document.querySelector(".js_forecast_img_day" + i).src = getWeatherInfo(data.daily.weathercode[i]).icon;
        document.querySelector(".js_temp_celsius_max_day" + i).innerText = data.daily.temperature_2m_max[i] + "℃";
        document.querySelector(".js_temp_celsius_min_day" + i).innerText = data.daily.temperature_2m_min[i] + "℃";
        document.querySelector(".js_temp_between_max_day" + i).innerText = betweenMax(i);
        document.querySelector(".js_temp_between_min_day" + i).innerText = betweenMin(i);
    }

    //今週の天気の月,日,曜日を表示
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

//天気予報 API（livedoor 天気互換）からAPIを取得
let urlLive = 'https://weather.tsukumijima.net/api/forecast/city/130010'

fetch(urlLive)
    .then(response => response.json())
    .then(data => tenkiLive(data))

//天気予報 API（livedoor 天気互換）の処理を実行
function tenkiLive(data) {

    //取得データを表示
    for(var i = 1; i < 3; i++) {
        document.querySelector(".js_precip_volume_0-6_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T00_06;
        document.querySelector(".js_precip_volume_6-12_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T06_12;
        document.querySelector(".js_precip_volume_12-18_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T12_18;
        document.querySelector(".js_precip_volume_18-24_day" + i).innerText = data.forecasts[i - 1].chanceOfRain.T18_24;
    }

}