// Seleccionar elementos relevantes
const nav = document.getElementById("myNav");
const toggle = document.querySelector(".nav-toggle"); // Corregido para coincidir con tu clase HTML
const mainContent = document.querySelector('.content');

// Evento para el botón del menú de hamburguesa
toggle.addEventListener("click", function () {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        mainContent.style.marginTop = nav.offsetHeight + 'px';
    } else {
        mainContent.style.marginTop = '0';
    }
});

// Eventos para los botones de los elementos desplegables
const dropdownBtns = nav.getElementsByClassName("dropbtn");

for (let i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function (e) {
        const dropdown = this.parentElement;
        if (dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        } else {
            dropdown.classList.add("open");
        }
        e.stopPropagation(); // Detiene la propagación del evento para evitar que se cierre inmediatamente
    });
}

// Evento para cerrar todos los menús desplegables si se hace clic fuera de ellos
document.addEventListener('click', function () {
    const dropdowns = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('open');
    }
});

/////////////////////////////////////////////////////////////////////////////////////
// Función que calcula la cantidad de comida para mascotas
function calculateFood() {
    const petType = document.getElementById("petType").value;
    const petSize = document.getElementById("petSize").value;
    const petActivity = document.getElementById("petActivity").value;

    let foodAmount = 0;

    // Algoritmo condicional para determinar la base de la cantidad de comida
    if (petType === "dog") {
        if (petSize === "small") {
            foodAmount = 200; // gramos
        } else if (petSize === "medium") {
            foodAmount = 400; // gramos
        } else {
            foodAmount = 600; // gramos
        }
    } else {
        if (petSize === "small") {
            foodAmount = 50; // gramos
        } else if (petSize === "medium") {
            foodAmount = 75; // gramos
        } else {
            foodAmount = 100; // gramos
        }
    }

    // Algoritmo con ciclo para ajustar la cantidad de comida según el nivel de actividad
    const activityLevels = ["low", "moderate", "high"];
    let activityMultiplier = 1;

    for (const level of activityLevels) {
        if (petActivity === level) {
            break;
        }
        activityMultiplier += 0.1;
    }

    foodAmount *= activityMultiplier;

    // Mostrar el resultado en el HTML
    document.getElementById("calculation-result").innerText = `Tu mascota necesita ${foodAmount.toFixed(2)} gramos de comida al día.`;
}

// Escuchar el evento click del botón para ejecutar la función
document.getElementById("calculate-button").addEventListener("click", calculateFood);