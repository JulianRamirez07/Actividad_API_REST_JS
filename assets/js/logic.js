let contenido = document.getElementById("contenido");

function ObtenerDatos() {

    // Definir la url que vamos a consumir
    const url = "https://www.balldontlie.io/api/v1/players";

    const getData = (api) => {
        return fetch(api)
            .then((response) => response.json())
            .then((json) => {
                tabla(json);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    getData(url);

    // Funcion para pintar los datos de la API en una tabla
    function tabla(DataAPI) {
        contenido.innerHTML = ''
        DataAPI.data.forEach(dato => {

            contenido.innerHTML += `
        <tr>
        <td>${dato.id}</td>
        <td>${dato.first_name}</td>
        <td>${dato.last_name}</td>
        <td>${dato.team.full_name}</td>
        <td>${dato.team.city}</td
        </tr>
    
        `
        }
        )
    };
}