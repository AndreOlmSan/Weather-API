$(document).ready(() => {


    ///// Page Loader /////
    $(".loader-wrapper").fadeOut("slow")


    ///// Check location /////
    let lat = 0
    let lon = 0
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude
            lon = position.coords.longitude
            
            ///// API call /////
            const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://weatherapi-com.p.rapidapi.com/forecast.json?q= ${lat}%2C${lon}&days=3`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": ""
            }
        }
        
        $.ajax(settings).done(function (response) {

            ///// CURRENT WEATHER FORECAST /////
            
            let location = response.location.name
            let temp = Math.round(response.current.temp_f) + '∘ F'
            let description = response.current.condition.text
            let icon = response.current.condition.icon
            let high = response.forecast.forecastday[0].day.maxtemp_f
            let low = response.forecast.forecastday[0].day.mintemp_f
            $("#location").html(location)
            $("#temp").html(temp)
            $(`<img src=${icon}>`).appendTo("#icon")
            $("#description").html(description)
            $("highlow").html('H: '+ high + ' L: '+ low )

            

            ///// GET TIME /////
            let current = new Date()
            const options = { hour: "numeric" }
            let time = parseInt(current.toLocaleTimeString("en-GB", options))
            let ampm = 'AM'
            let index = 0
            let timeplus1 = time + 1
            let timeplus2 = time + 2
            let timeplus3 = time + 3
            let timeplus4 = time + 4
            let timeplus5 = time + 5
            let timeplus6 = time + 6

            ///// HOURLY COMPONENTS /////
            
            if(timeplus1 >= 13){
                index = timeplus1
                timeplus1 = timeplus1 - 12
                ampm = 'PM'
            }else{index = timeplus1}
            let hour1 = timeplus1 + ampm
            let hour1Icon = response.forecast.forecastday[0].hour[index].condition.icon
            let hour1Temp = Math.round(response.forecast.forecastday[0].hour[index].temp_f) + '∘'
            $("#hour1").html(hour1)
            $(`<img src=${hour1Icon}>`).appendTo("#hour1-icon")
            $("#hour1-temp").html(hour1Temp)
            
            if(timeplus2 >= 13){
                index = timeplus2
                timeplus2 = timeplus2 - 12
                ampm = 'PM'
            }
            let hour2 = timeplus2 + ampm
            let hour2Icon = response.forecast.forecastday[0].hour[index].condition.icon
            let hour2Temp = Math.round(response.forecast.forecastday[0].hour[index].temp_f) + '∘'
            $("#hour2").html(hour2)
            $(`<img src=${hour2Icon}>`).appendTo("#hour2-icon")
            $("#hour2-temp").html(hour2Temp)
            
            if(timeplus3 >= 13){
                index = timeplus3
                timeplus3 = timeplus3 - 12
                ampm = 'PM'
            }
            let hour3 = timeplus3 + ampm
            let hour3Icon = response.forecast.forecastday[0].hour[index].condition.icon
            let hour3Temp = Math.round(response.forecast.forecastday[0].hour[index].temp_f) + '∘'
            $("#hour3").html(hour3)
            $(`<img src=${hour3Icon}>`).appendTo("#hour3-icon")
            $("#hour3-temp").html(hour3Temp)
            
            if(timeplus4 >= 13){
                index = timeplus4
                timeplus4 = timeplus4 - 12
                ampm = 'PM'
            }
            let hour4 = timeplus4 + ampm
            let hour4Icon = response.forecast.forecastday[0].hour[index].condition.icon
            let hour4Temp = Math.round(response.forecast.forecastday[0].hour[index].temp_f) + '∘'
            $("#hour4").html(hour4)
            $(`<img src=${hour4Icon}>`).appendTo("#hour4-icon")
            $("#hour4-temp").html(hour4Temp)
            
            if(timeplus5 >= 13){
                index = timeplus5
                timeplus5 = timeplus5 - 12
                ampm = 'PM'
            }
            let hour5 = timeplus5 + ampm
            let hour5Icon = response.forecast.forecastday[0].hour[index].condition.icon
            let hour5Temp = Math.round(response.forecast.forecastday[0].hour[index].temp_f) + '∘'
            $("#hour5").html(hour5)
            $(`<img src=${hour5Icon}>`).appendTo("#hour5-icon")
            $("#hour5-temp").html(hour5Temp)
            
            if(timeplus6 >= 13){
                index = timeplus6
                timeplus6 = timeplus6 - 12
                ampm = 'PM'
            }
            let hour6 = timeplus6 + ampm
            let hour6Icon = response.forecast.forecastday[0].hour[index].condition.icon
            let hour6Temp = Math.round(response.forecast.forecastday[0].hour[index].temp_f) + '∘'
            $("#hour6").html(hour6)
            $(`<img src=${hour6Icon}>`).appendTo("#hour6-icon")
            $("#hour6-temp").html(hour6Temp)
            
            


            ///// DETAILS /////
            let sunrise = response.forecast.forecastday[0].astro.sunrise
            let sunset = response.forecast.forecastday[0].astro.sunset
            let feelsLike = Math.round(response.current.feelslike_f)
            let humidity = response.current.humidity
            let windDir = response.current.wind_dir
            let windSpeed = response.current.wind_mph
            let pressure = response.current.pressure_in
            let precip = response.forecast.forecastday[0].day.daily_chance_of_rain
            let snow = response.forecast.forecastday[0].day.daily_chance_of_snow
            let precipMeasure = response.current.precip_in
            let vis = response.current.vis_miles 
            let uv = response.current.uv
            $('#sunrise').html(sunrise)
            $('#sunset').html(sunset)
            $('#feelslike').html(feelsLike + '∘')
            $('#humidity').html(humidity+ '%')
            $('#wind').html(`${windDir} ${windSpeed} mph`)
            $('#pressure').html(pressure + ' inHg')
            $('#precip').html(precip + '%')
            $('#precip-measure').html(precipMeasure + ' in')
            $('#uv').html(uv)
            $('#vis').html(vis + ' mi')

            if(parseInt(snow) > 0){
                $('#chance').html('Chance of Snow')
                $('#precip').html(snow + '%')  
            }
            
        });
        })	
    } else {console.log('error 😢 content not loaded')
    }




})
