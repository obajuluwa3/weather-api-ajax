var zipCode = prompt("What is your zipcode");

$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&units=imperial&appId=be2412821eee683e368bd65f06e7d343",
	success: function(response){
		weather = response
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var output =  (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + d.getFullYear();
		$("#city").text(weather.name);
		$("#description").text(weather.weather[0].description);
		$("#temp").text(Math.round(weather.main.temp))
		$("#day").text(output)
		$("#high").text("High: " + Math.round(weather.main.temp_max))
		$("#low").text("Low: " + Math.round(weather.main.temp_min))
		/* var pokemon = response;
		for(var i = 0; i < pokemon.results.length; i++){
			var ul = $('<ul>');
			ul.append('<li><a href="'+pokemon.results[i].url+'">' + pokemon.results[i].name + '</a></li>')
			$('body').append(ul);
		}*/
	}
})