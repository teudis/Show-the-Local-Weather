
app = angular.module('todoApp', []);
app.controller('WeatherController',function ($scope, $http) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){

            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var url = "https://api.darksky.net/forecast/df486ca05c0483463a08a1b4b445d9af/"+lat+","+long;
            $http.get(url).then(function (res) {

                console.log(res.data);
                var temp = res.data.currently.apparentTemperature;
                var resumen = res.data.currently.summary;
                var icon = res.data.currently.icon;
                //t (ºC)= t (ºF) – 32 / 1,8
                var celcius = (temp - 32)/1.8;
                $scope.resumen = resumen;
                $scope.temperatura = temp;
                $scope.celcius =  Math.round(celcius);
                var skycons = new Skycons({"color": "black"});
                skycons.add("icon1", icon);
                skycons.play();

            });
        });

    } else {
        alert( "Geolocation is not supported by this browser.");
    }

});
