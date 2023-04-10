const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data);
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flags.svg}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name.common}</h3>
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
                    <a href="pais.html?name=${item.name.common}">Más info</a>
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}