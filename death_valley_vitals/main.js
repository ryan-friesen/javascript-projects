/*jslint browser:true */
'use strict';

var weatherConditionsFurnaceCreek = new XMLHttpRequest();
var weatherForecastFurnaceCreek = new XMLHttpRequest();
var weatherForecastLonePine = new XMLHttpRequest();
var weatherConditionsShoshone = new XMLHttpRequest();
var weatherConditionsLonePine = new XMLHttpRequest();
var weatherForecastShoshone = new XMLHttpRequest();
var stargazerStatsDeathValley = new XMLHttpRequest();
var sungazerStatsDeathValley = new XMLHttpRequest();
var sungazerObj;
var shoshoneForecastObj;
var furnaceConditionsObj;
var shoshoneObj;
var furnaceForecastObj;
var lonePineForecastObj;
var lonePineObj;
var stargazerObj;

weatherConditionsFurnaceCreek.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92328.json', true);
weatherConditionsFurnaceCreek.responseType = 'text';
weatherConditionsFurnaceCreek.send(null);

weatherConditionsFurnaceCreek.onload = function() {
  
  if(weatherConditionsFurnaceCreek.status === 200) {
    
    furnaceConditionsObj = JSON.parse(weatherConditionsFurnaceCreek.responseText);
    console.log(furnaceConditionsObj);
    document.getElementById('furnace-creek-conditions').innerHTML = furnaceConditionsObj.current_observation.temp_f + "°F";
    document.getElementById('furnace-creek-weather').innerHTML = furnaceConditionsObj.current_observation.weather;
  }

};

weatherConditionsLonePine.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/93545.json', true);
weatherConditionsLonePine.responseType = 'text';
weatherConditionsLonePine.send(null);

weatherConditionsLonePine.onload = function() {
  
  if(weatherConditionsLonePine.status === 200) {
    
    lonePineObj = JSON.parse(weatherConditionsLonePine.responseText);
    console.log(lonePineObj);
    document.getElementById('lone-pine-conditions').innerHTML = lonePineObj.current_observation.temp_f + "°F";
    document.getElementById('lone-pine-weather').innerHTML = lonePineObj.current_observation.weather;
  }
  
};

weatherConditionsShoshone.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/92384.json', true);
weatherConditionsShoshone.responseType = 'text';
weatherConditionsShoshone.send(null);

weatherConditionsShoshone.onload = function() {
  
  if(weatherConditionsShoshone.status === 200) {
    
    shoshoneObj = JSON.parse(weatherConditionsShoshone.responseText);
    console.log(shoshoneObj);
    document.getElementById('shoshone-conditions').innerHTML = shoshoneObj.current_observation.temp_f + "°F";
    document.getElementById('shoshone-weather').innerHTML = shoshoneObj.current_observation.weather;
  }
  
};

weatherForecastFurnaceCreek.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/forecast/q/CA/92328.json', true);
weatherForecastFurnaceCreek.responseType = 'text';
weatherForecastFurnaceCreek.send(null);

weatherForecastFurnaceCreek.onload = function() {
  
  if(weatherForecastFurnaceCreek.status === 200) {
    
    furnaceForecastObj = JSON.parse(weatherForecastFurnaceCreek.responseText);
    console.log(furnaceForecastObj);
    document.getElementById('furnace-creek-forecast').innerHTML = "<h5><b><u>" + furnaceForecastObj.forecast.txt_forecast.forecastday[1].title + ":</b></u></h5><h5>" + furnaceForecastObj.forecast.txt_forecast.forecastday[1].fcttext + "</h5><h5><b><u>" + furnaceForecastObj.forecast.txt_forecast.forecastday[3].title + ":</b></u></h5><h5>" + furnaceForecastObj.forecast.txt_forecast.forecastday[3].fcttext + "</h5>";
    
  }

};

weatherForecastLonePine.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/forecast/q/CA/93545.json', true);
weatherForecastLonePine.responseType = 'text';
weatherForecastLonePine.send(null);

weatherForecastLonePine.onload = function() {
  
  if(weatherForecastLonePine.status === 200) {
    
    lonePineForecastObj = JSON.parse(weatherForecastLonePine.responseText);
    console.log(lonePineForecastObj);
    document.getElementById('lone-pine-forecast').innerHTML = "<h5><b><u>" + lonePineForecastObj.forecast.txt_forecast.forecastday[1].title + ":</b></u></h5><h5>" + lonePineForecastObj.forecast.txt_forecast.forecastday[1].fcttext + "</h5><h5><b><u>" + lonePineForecastObj.forecast.txt_forecast.forecastday[3].title + ":</b></u></h5><h5>" + lonePineForecastObj.forecast.txt_forecast.forecastday[3].fcttext + "</h5>";
    
  }

};

weatherForecastShoshone.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/forecast/q/CA/92384.json', true);
weatherForecastShoshone.responseType = 'text';
weatherForecastShoshone.send(null);

weatherForecastShoshone.onload = function() {
  
  if(weatherForecastShoshone.status === 200) {
    
    shoshoneForecastObj = JSON.parse(weatherForecastShoshone.responseText);
    console.log(shoshoneForecastObj);
    document.getElementById('shoshone-forecast').innerHTML = "<h5><b><u>" + shoshoneForecastObj.forecast.txt_forecast.forecastday[1].title + ":</b></u></h5><h5>" + shoshoneForecastObj.forecast.txt_forecast.forecastday[1].fcttext + "</h5><h5><b><u>" + shoshoneForecastObj.forecast.txt_forecast.forecastday[3].title + ":</b></u></h5><h5>" + shoshoneForecastObj.forecast.txt_forecast.forecastday[3].fcttext + "</h5>";
    
  }

};

stargazerStatsDeathValley.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/astronomy/q/CA/Death_Valley.json', true);
stargazerStatsDeathValley.responseType = 'text';
stargazerStatsDeathValley.send(null);

stargazerStatsDeathValley.onload = function() {
  
  if(stargazerStatsDeathValley.status === 200) {
    
    stargazerObj = JSON.parse(stargazerStatsDeathValley.responseText);
    console.log(stargazerObj);
	document.getElementById('moonphase-forecast').innerHTML = "<h5><b><u>Lunar cycle age:</b></u></h5><h5>" + stargazerObj.moon_phase.ageOfMoon + "</h5><h5><b><u>Current illumination:</b></u></h5><h5>" + stargazerObj.moon_phase.percentIlluminated + "%</h5>";
	document.getElementById('sunphase-forecast').innerHTML = "<h5><b><u>Sunrise:</b></u></h5><h5>" + stargazerObj.sun_phase.sunrise.hour + ":" + stargazerObj.sun_phase.sunrise.minute + "</h5><h5><b><u>Sunset:</b></u></h5><h5>" + stargazerObj.sun_phase.sunset.hour + ":" + stargazerObj.sun_phase.sunset.minute + "</h5>";   
  }

};

sungazerStatsDeathValley.open('GET', 'http://api.wunderground.com/api/5f68e56b0fdef733/conditions/q/CA/Death_Valley.json', true);
sungazerStatsDeathValley.responseType = 'text';
sungazerStatsDeathValley.send(null);

sungazerStatsDeathValley.onload = function() {
  
  if(sungazerStatsDeathValley.status === 200) {
    
    sungazerObj = JSON.parse(sungazerStatsDeathValley.responseText);
    console.log(sungazerObj);
	document.getElementById('sun-forecast').innerHTML = "<h5><b><u>Visibility:</b></u></h5><h5>" + sungazerObj.current_observation.visibility_mi + " miles</h5>";
    
  }

};

var astronomyDeathValley = new XMLHttpRequest();
var astronomyObj;

astronomyDeathValley.open('GET', 'http://dataservice.accuweather.com/indices/v1/daily/5day/38639_PC/12?apikey=u14FiTxPOvMoshzsmIq9uLGA08zxorHf', true);
astronomyDeathValley.responseType = 'text';
astronomyDeathValley.send(null);

astronomyDeathValley.onload = function() {
	
	if(astronomyDeathValley.status === 200) {
		document.getElementById('astronomy-index').innerHTML = "";
		astronomyObj = JSON.parse(astronomyDeathValley.responseText);
		console.log(astronomyObj);
		document.getElementById('astronomy-index').innerHTML = "<h5><b><u>AccuWeather Stargaz-r Index:</b></u></h5><h5>" + astronomyObj["0"].LocalDateTime.slice(6, 10).replace("-", "/").replace("/0", "/") + " - " + astronomyObj["0"].Category + " (" + astronomyObj["0"].Value + ")</h5>";
		document.getElementById('astronomy-index').innerHTML += "<h5>" + astronomyObj[1].LocalDateTime.slice(6, 10).replace("-", "/").replace("/0", "/") + " - " + astronomyObj[1].Category + " (" + astronomyObj[1].Value + ")</h5>";		
		document.getElementById('astronomy-index').innerHTML += "<h5>" + astronomyObj[2].LocalDateTime.slice(6, 10).replace("-", "/").replace("/0", "/") + " - " + astronomyObj[2].Category + " (" + astronomyObj[2].Value + ")</h5>";
		document.getElementById('astronomy-index').innerHTML += "<h5>" + astronomyObj[3].LocalDateTime.slice(6, 10).replace("-", "/").replace("/0", "/") + " - " + astronomyObj[3].Category + " (" + astronomyObj[3].Value + ")</h5>";
		document.getElementById('astronomy-index').innerHTML += "<h5>" + astronomyObj[4].LocalDateTime.slice(6, 10).replace("-", "/").replace("/0", "/") + " - " + astronomyObj[4].Category + " (" + astronomyObj[4].Value + ")</h5>";
	}
	
};