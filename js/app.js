var zipCode = prompt("Which zip code do you want to see the weather for?")
var cityName = $("#city-name");
var weatherDescription = $("#weather-description");
var temperture = $("#temp")
var tempHigh = $("#temp-high");
var tempLow = $("#temp-low");
var snoop = $("#snoop-image");

$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=052f26926ae9784c2d677ca7bc5dec98",
	success: function(response) {
		var weather = response;
		cityName.text(weather.name);
		$("body").append("<br />")
		weatherDescription.text(weather.weather[0].description);
		console.log(weatherDescription.text(weather.weather[0].description))
		snoop.attr("src", "http://openweathermap.org/img/w/" + (weather.weather[0].icon) + ".png");
		console.log("http://openweathermap.org/img/w/" + (weather.weather[0].icon) + ".png")
		console.log(weather.weather)
		$("body").append("<br />")
		temperture.text(Math.round(weather.main.temp * (9/5) - 459.67) + "℉");
		$("body").append("<br />")
		tempHigh.text(Math.round(weather.main.temp_max * (9/5) - 459.67) + "℉");
		tempLow.text(Math.round(weather.main.temp_min * (9/5) - 459.67) + "℉");

		}
	})