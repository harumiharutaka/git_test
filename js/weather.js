let urlOpenmeteo = 'https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.82&daily=weathercode,temperature_2m_max,temperature_2m_min&past_days=1&timezone=Asia%2FTokyo'

fetch(urlOpenmeteo)
    .then(response => response.json())
    .then(data => tenki(data))

function tenki(data) {
    console.log(data);
}

let urlLive = 'https://weather.tsukumijima.net/api/forecast/city/130010'

fetch(urlLive)
    .then(response => response.json())
    .then(data => tenki(data))

function tenki(data) {
    console.log(data);
}