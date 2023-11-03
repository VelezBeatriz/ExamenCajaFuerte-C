//Creación del Objeto Menu
const menu = {
    "lunes": {
      "Primer Plato": [
        "Sopa de lentejas",
        "Ensalada César",
        "Risotto de champiñones"
      ],
      "Segundo Plato": [
        "Lomo de cerdo a la parrilla con salsa de mostaza",
        "Salmón a la plancha con puré de patatas",
        "Espaguetis a la bolognesa"
      ],
      "Postre": [
        "Tarta de chocolate con helado de vainilla",
        "Fruta fresca de temporada",
        "Tiramisú"
      ]
    },
    "martes": {
      "Primer Plato": [
        "Sopa de tomate",
        "Ensalada griega",
        "Paella de mariscos"
      ],
      "Segundo Plato": [
        "Pollo al curry con arroz basmati",
        "Bacalao a la vizcaína",
        "Ratatouille"
      ],
      "Postre": [
        "Flan de caramelo",
        "Manzana asada",
        "Helado de fresa"
      ]
    },
    "miércoles": {
      "Primer Plato": [
        "Gazpacho",
        "Tabulé",
        "Crema de espárragos"
      ],
      "Segundo Plato": [
        "Entrecot a la pimienta con patatas gratinadas",
        "Merluza en salsa verde",
        "Pasta primavera"
      ],
      "Postre": [
        "Pastel de queso con frutos rojos",
        "Pera en almíbar",
        "Mousse de limón"
      ]
    },
    "jueves": {
      "Primer Plato": [
        "Sopa de calabaza",
        "Ensalada de aguacate",
        "Arroz con setas"
      ],
      "Segundo Plato": [
        "Costillas de cerdo a la barbacoa con maíz asado",
        "Trucha a la plancha con puré de calabacín",
        "Canelones de espinacas y ricotta"
      ],
      "Postre": [
        "Tarta de manzana",
        "Kiwi fresco",
        "Helado de vainilla"
      ]
    },
    "viernes": {
      "Primer Plato": [
        "Sopa de cebolla",
        "Ensalada de quinoa",
        "Tortilla española"
      ],
      "Segundo Plato": [
        "Pechuga de pollo a la naranja con arroz salvaje",
        "Bacalao al pil-pil",
        "Lasaña de carne"
      ],
      "Postre": [
        "Tiramisú",
        "Mango maduro",
        "Flan de vainilla"
      ]
    }
  }

// console.log(menu)

//Esta función recibe un día e imprime el menú
function insertarMenu(dia){
    if(dia == "domingo" || dia == "sábado"){
        menuInsertar = `<p>Hoy es ${dia}, por tanto estamos cerrados...</p>`
        document.getElementById("menu").innerHTML = menuInsertar
    } else {
            menuInsertar = 
            `<div class="card">
                <div class="card-header">
                    <h3>Menú del día: ${ dia.charAt(0).toUpperCase() + dia.slice(1) }</h3>
                </div>
                <div class="card-body">
                    <h4 class="fw-bold">Primer Plato:</h4>
                        <ul>
                        <li class="primerplato palabra0">${menu[dia]["Primer Plato"][0]}</li>
                        <li class="primerplato palabra1">${menu[dia]["Primer Plato"][1]}</li>
                        <li class="primerplato palabra2">${menu[dia]["Primer Plato"][2]}</li>
                        </ul>
                    <h4 class="fw-bold">Segundo Plato:</h4>
                        <ul>
                        <li class="segundoplato palabra0">${menu[dia]["Segundo Plato"][0]}</li>
                        <li class="segundoplato palabra1">${menu[dia]["Segundo Plato"][1]}</li>
                        <li class="segundoplato palabra2">${menu[dia]["Segundo Plato"][2]}</li>
                        </ul>
                    <h4 class="fw-bold">Postre:</h4>
                        <ul>
                        <li  class="postre palabra0">${menu[dia]["Postre"][0]}</li>
                        <li  class="postre palabra1">${menu[dia]["Postre"][1]}</li>
                        <li  class="postre palabra2">${menu[dia]["Postre"][2]}</li>
                        </ul>
                </div>
            </div>` 
        document.getElementById("menu").innerHTML = menuInsertar
    }  
}
//Esta funció busca que día que es hoy e imprime el menú del día o si el restaurante está cerrado
function currentDay(){
    const diasSemana = ['domingo','lunes', 'martes', 'miércoles','jueves','viernes', 'sábado']
    const fechaActual = new Date()
    let diaActual = diasSemana[fechaActual.getDay()] 
    //Llamar a la función que inserta el día
    insertarMenu(diaActual);  
}
//Imprimir el menú del día actual
currentDay()

//Seleccionar menú de un día en concreto
const dayButton = document.getElementById("dayButton").addEventListener('click', mostrarMenu)
//Esta función recoge el valor del día seleccionado e imprime el menú
function mostrarMenu(event){
    event.preventDefault();
    const SelectDay = document.getElementById("SelectDay").value
    //Llamar a la función que inserta el día
    insertarMenu(SelectDay);
}

//Buscar palabras
const SearchButton = document.getElementById("SearchButton").addEventListener('click', buscarPalabra)
//Esta función recoge el valor de la palabra y la busca
function buscarPalabra(event){
    event.preventDefault();
    //Eliminar espacios de delante y de atrás
    let anyWorld = document.getElementById("anyWorld").value.trim(); 

    let TextMenu = document.getElementById("menu")
    let contentTextMenu = TextMenu.textContent //Extraer el contenido 
    // console.log(contentTextMenu)

    if(contentTextMenu.includes(anyWorld)){

      const platos = ["primerplato", "segundoplato", "postre"]

      for (let i = 0; i < platos.length; i++) {
              reemplazar(platos[i], anyWorld)
      }
 
    } else {
      //La palabra no está presente
      TextMenu.innerHTML = `<p>No se ha encontrado la palabra que buscas...</p>`
    }
}

function reemplazar(plato, anyWorld){
  for (let i = 0; i < 3; i++) {
    let textList = document.querySelector(`.${plato}.palabra${i}`)
    let textListContent = textList.textContent
    let markText = textListContent.replaceAll(
      anyWorld,
      "<mark class='bg-success'>" + anyWorld + "</mark>"
      )
      textList.innerHTML = markText;
  }
}


//Comprobación de dias festivos
const timeTable = document.getElementById("timeTable")

const diaActual = new Date() //"2023/11/04 01:00:00" 
// console.log(diaActual.getDay())
if(diaActual.getDay() == 0 || diaActual.getDay() == 6){
    timeTable.classList.add("d-none")
} else {
    if(timeTable.classList.contains("d-none")){
        timeTable.classList.remove("d-none")
    }
    //Hora de apertura y de cierre
    const timeButton = document.getElementById("timeButton").addEventListener('click', horario)
}

//Esta función calcula la diferencia horaria y los muestra en mensaje
function horario(){
    const openTime = document.getElementById("openTime").value
    const closeTime = document.getElementById("closeTime").value
    // console.log("Abre a las", openTime, "Cierra a las", closeTime)

    //Localizar los puntos de insertar
    const howMuchTime = document.getElementById("howMuchTime")
    const openHour = document.getElementById("openHour")
    const closeHour = document.getElementById("closeHour")
    const finalTime = document.getElementById("finalTime")
    
            //Extraer el día de hoy
            let diaActual = new Date()

           //Formatear el día de hoy y pero con las horas establecidas
            const open = new Date(diaActual.toDateString() + ' ' + openTime)
            const close = new Date(diaActual.toDateString() + ' ' + closeTime)
            //console.log("Abre a las", open, "Cierra a las", close)

            let diferencia
            //Si la fecha de ahora es menor que la de apertura, es que estamos por abrir sino es que vamos a cerrar
            if( diaActual < open) {
                diferencia = (open - diaActual ) / 1000 //Convertir de milisegundos a segundos
            } else {
                //La hora he de asumir que ya es la del dia siguiente
                openNextDay = open.setDate(open.getDate() + 1)
                diferencia = ( openNextDay - diaActual ) / 1000 //Convertir de milisegundos a segundos
            }

            const horas = Math.floor(diferencia/3600) //Convertir los segundos en horas y redondeamos
            diferencia = diferencia % 3600 //Modular para saber los segundos que sobran de las horas
            const minutos = Math.floor(diferencia / 60) //Convertir los segundos que sobre en minutos 
            // const segundos = Math.floor(diferencia % 60) //Modular para saber los segundos que sobran de los minutos

            //Insertar los datos
            if(howMuchTime.classList.contains("d-none")){
                howMuchTime.classList.remove("d-none")
            }
            openHour.innerHTML  = openTime
            closeHour.innerHTML = closeTime
            finalTime.innerHTML = `${horas} horas y ${minutos} minutos paraabrir el restaurante`

}

