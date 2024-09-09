document.getElementById('input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search()
    }
})
const search = () => {
    let city = input.value
    if (city) {
        console.log(city)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).then(res => {
            if (!res.ok) {
                alert('No City Found')
            }
            res.json().then(res1 => {
                details(res1)

            })
        }).catch(err => {
            alert(err)
        })
        const details = (res1) => {

            let weather = res1
            console.log(weather)
            // countryname
            let countryname = weather.sys.country
            console.log(countryname)
            // max temp
            let tempmax = weather.main.temp_max
            let degree = eval(tempmax - 273.15)
            let maxdgfix = Math.floor(degree)
            console.log(maxdgfix)
            //min temp
            let tempmin = Math.floor(eval(weather.main.temp_min - 273.15))
            console.log(tempmin)
            // pressure
            let pressure = weather.main.pressure
            console.log(pressure)
            // wind
            let wind = weather.wind.speed
            console.log(wind)
            //humidity
            let humidity = weather.main.humidity
            console.log(humidity)
            // feels like
            let feellike = Math.floor(eval(weather.main.feels_like - 273.15))
            console.log(feellike)
            //description
            let description = weather.weather[0].description
            console.log(description)
            //temperature
            let temp = Math.floor(eval(weather.main.temp - 273.15))

            console.log(temp)
            // date
            let date = Date();
            console.log(date)
            let detail = document.getElementById('details')
            detail.innerHTML = `
            <div class="box">
                        <h6>Weather Details...</h6>
                        <h5 class="mt-5">${description}</h5>
                        <div class="d-flex justify-content-between mt-4">
                            <h6>Country</h6>
                            <h6>${countryname}</h6>
                        </div>
                        <div class="tempmax d-flex mt-4">
                            <div class=" flex-grow-1">
                                <h6>Temp max</h6>
                            </div>
                            <div class="px-4">
                                <h6>${maxdgfix}°</h6>
                            </div>
                            <div><i class="fa-solid fa-temperature-three-quarters fa-lg" style="color: #f50000;"></i>
                            </div>
                        </div>
                        <div class="tempmax d-flex mt-4">
                            <div class=" flex-grow-1">
                                <h6>Temp min</h6>
                            </div>
                            <div class="px-4">
                                <h6>${tempmin}°</h6>
                            </div>
                            <div><i class="fa-solid fa-temperature-three-quarters fa-lg" style="color: #0087f5;"></i>
                            </div>
                        </div>
                        <div class="tempmax d-flex mt-4">
                            <div class=" flex-grow-1">
                                <h6>Humidity</h6>
                            </div>
                            <div class="px-4">
                                <h6>${humidity}%</h6>
                            </div>
                            <div><i class="fa-solid fa-droplet fa-lg" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="tempmax d-flex mt-4">
                            <div class=" flex-grow-1">
                                <h6>Wind</h6>
                            </div>
                            <div class="px-4">
                                <h6>${wind} km/h</h6>
                            </div>
                            <div><i class="fa-solid fa-wind fa-lg" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="tempmax d-flex mt-4">
                            <div class=" flex-grow-1">
                                <h6>Pressure</h6>
                            </div>
                            <div class="px-4">
                                <h6>${pressure} hPa</h6>
                            </div>
                            <div><i class="fa-solid fa-gauge fa-lg" style="color: #ffffff;"></i>

                            </div>
                        </div>
                        <hr>
                        <div>
            `
            let temperature = document.getElementById('degreedetails')
            temperature.innerHTML = `
                    <div class="mt-auto degree p-0 p-md-5 d-flex">
                    <h1 class="text-white degreeh1">${temp}°</h1>
                    <div>
                    <h1 class="text-white p-4">${input.value}<span>
                        <i class="fa-solid fa-cloud fa-fade fa-2x" style="color: #ffffff;"></span></i>
                    </h1>
                        <p class="text-white">feels like ${feellike}°</p>
                        <p class="text-white">${date}
                        </p>
                    </div>
                </div>
`
            let images = document.getElementById('image')

            if (temp > 35) {

                images.style.backgroundImage = "url(./images/sun.jpg)"
            } else if (temp > 30) {
                images.style.backgroundImage = "url(./images/sun1.jpg)"

            } else if (temp > 20) {
                images.style.backgroundImage = "url(./images/tree.jpg)"
            } else if (temp > 10) {
                images.style.backgroundImage = "url(./images/ocean.jpg)"
            } else if (temp > 0) {
                images.style.backgroundImage = "url(./images/cover1.jpg)"
            } else {
                images.style.backgroundImage = "url(./images/snow.jpg)"
            }
        }
    } else {
        alert('Please enter the city')
    }
}