const loc = document.getElementById('location');
const weatherBox = document.querySelector('.weather');
const wIcon = document.querySelector('.icon');
const wTempDesc = document.querySelector('.temp_desc');

//displaying weather icon and temp along with location
function displayWeather(w) {
	// console.log(w.current.weather[0].icon);
	var imgUrl = `http://openweathermap.org/img/wn/${w.current.weather[0].icon}@2x.png`;
	// var temp_desc =
	wIcon.innerHTML = ` <img src = ${imgUrl}
    alt = "Weather-Icon"> `;
	wTempDesc.innerHTML = `${w.current.temp}<span><sup>o</sup>C</span><br> ${w.current.weather[0].description}`;
}

//getting lat and longitude
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		loc.innerHTML = 'The Browser Does not Support Geolocation';
	}
}

//success function
function showPosition(position) {
	//fetch weather api data

	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;

	function fetchApiData() {
		const key = 'ad9ec9565784ee70e0cdfd30fa06971a';
		fetch(`
    https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				console.log(data.timezone.split('/')[1]);
				if (data.message === 'city not found') {
					alert('Invalid location');
				} else {
					displayWeather(data);
				}
			})
			.catch((err) => console.log(err));
	}

	fetchApiData();
}

//error function
function showError(error) {
	if (error.PERMISSION_DENIED) {
		loc.innerHTML = 'The User have denied the request for Geolocation.';
	}
}

getLocation();
//daily data
window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
	id: 21,
	cityid: '1259229',
	appid: 'ad9ec9565784ee70e0cdfd30fa06971a',
	units: 'metric',
	containerid: 'openweathermap-widget-21',
});
(function () {
	var script = document.createElement('script');
	script.async = true;
	script.charset = 'utf-8';
	script.src =
		'//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(script, s);
})();
// console.log(navigator.geolocation.getCurrentPosition());
