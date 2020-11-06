var ctx = document.getElementById("idcanvas").getContext("2d");

function MostrarDatos() {

    // Definir la url que vamos a consumir
    const url = "https://www.balldontlie.io/api/v1/games";

    const getData = (api) => {
        return fetch(api)
            .then((response) => response.json())
            .then((json) => {
                TraerDatos(json);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    getData(url);


    // Funcion para pintar los datos de la API en una tabla
    function TraerDatos(DataAPI) {

        let AUX = []
        prueba.innerHTML = ''
        DataAPI.data.forEach(DatosJuego => {

            AUX+= `

            ${DatosJuego.visitor_team.full_name}

            `
        }

        )

      AUX;

        // Codigo canvas para la grafica
            var idcanvas = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [AUX,AUX],
                    // labels: ['Col1','Col2','Col3'],
                    datasets: [{
                        label: 'Datos temporada 2018',
                        data: [10, 9,21,21,21,21,21,21],
                        backgroundColor: [
                            'rgb(66, 134, 244,0.5)',
                            'rgb(74, 135, 72,0.5)',
                            'rgb(229, 89, 50,0.5)'
                        ]
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

        }
    };



