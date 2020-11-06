const url = "https://www.balldontlie.io/api/v1/teams";

function ObtenerDatos() {

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

    function tabla(DataAPI) {
        contenido.innerHTML = ''
        DataAPI.data.forEach(dato => {

            contenido.innerHTML += `
        <tr>
        <td>${dato.id}</td>
        <td>${dato.abbreviation}</td>
        <td>${dato.full_name}</td>
        <td>${dato.city}</td>
        <td>${dato.division}</td>
        </tr>
    
        `
        }
        )
    };
}