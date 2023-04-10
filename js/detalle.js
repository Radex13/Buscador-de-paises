const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
const api = "b6182fb066a0b8ab4bd1252f92b634ef"
const kelvin = 273.15
console.log(params);

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        
        const filtroData = data.filter(item => item.name.common === params)
        
        banderillas(filtroData)
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        const latitud = item.latlng[0];
        const longitud = item.latlng[1];
        const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${item.latlng[0]}&lon=${item.latlng[1]}&lang=es&appid=${api}`;        fetch(urlApi)
        .then((response) => {
            console.log("RESPUESTA JSON");
            return response.json();
        })
        .then((clima) => {

            console.log("ESTA ES LA DATA");
            console.log(clima);
            const temperatura = clima.main.temp;
            const climaActual = clima.weather[0].description;
            const iconoUrl = `https://openweathermap.org/img/w/${clima.weather[0].icon}.png`;


            elementos += `
        <article class="card">
            <img src="${item.flags.svg}" alt="" class="img-fluid">
            <h3>${item.name.common}</h3>
            <div class="card-content">
                
                <p>
                    <b>Poblacion:</b>
                    ${item.population.toLocaleString()}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región:</b>
                    ${item.region}
                </p>
                <p>
                    <b>Latitud:</b>
                    ${item.latlng[0].toFixed(2)}
                </p>
                <p>
                    <b>Longitud:</b>
                    ${item.latlng[1].toFixed(2)}
                </p>
                <p>
                    <b>Temperatura:</b>
                    ${(temperatura - kelvin).toFixed(2)} Celsius
                </p>
                <p id="clima-actual">
                    <b>Clima actual:</b>
                    ${climaActual}
                    <img class="icon-weather" src="${iconoUrl}" alt="${climaActual}">
                </p>
            </div>
        </article>
        `
        banderas.innerHTML = elementos
        });
    });
};


//         elementos += `
//         <article class="card">
//             <img src="${item.flags.svg}" alt="" class="img-fluid">
//             <div class="card-content">
//                 <h3>${item.name.common}</h3>
//                 <p>
//                     <b>Poblacion:</b>
//                     ${item.population}
//                 </p>
//                 <p>
//                     <b>Capital:</b>
//                     ${item.capital}
//                 </p>
//                 <p>
//                     <b>Región:</b>
//                     ${item.region}
//                 </p>
//                 <p>
//                     <b>Latitud:</b>
//                     ${item.latlng[0]}
//                 </p>
//                 <p>
//                     <b>Longitud:</b>
//                     ${item.latlng[1]}
//                 </p>
//                 <p>
//                     <b>Temperatura:</b>
//                     ${item.latlng[1]}
//                 </p>
//             </div>
//         </article>
//         `
        
//     });
//     banderas.innerHTML = elementos
// }