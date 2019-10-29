var menu = false;
var menuClientes = false;
var menuHabitaciones = false;
var menuReservas = false;

$(document).ready(function() {

    //OPTION NAV CLIENTES
    $(".clientesNav").on("click", function() {
        if (menuClientes === false) {

            menuHabitaciones = false;
            menuReservas = false;

            $("#navBar").css("height", "220px");
            $("#navBar").css("margin-top", "-230px");
            $("#logo").css("margin-top", "320px");


            $(".optionRes").css("display", "none");
            $(".optionHab").css("display", "none");
            $(".optionCliente").css("display", "flex");

            menuClientes = true;
        } else if (menuClientes === true) {
            $("#navBar").css("height", "110px");
            $("#navBar").css("margin-top", "-230px");
            $("#logo").css("margin-top", "200px");

            $(".optionCliente").css("display", "none");

            menuClientes = false;
        }
    });

    //OPTION NAV HABITACIONES
    $(".clientesNav2").on("click", function() {
        if (menuHabitaciones === false) {

            menuClientes = false;
            menuReservas = false;

            $("#navBar").css("height", "220px");
            $("#navBar").css("margin-top", "-300px");
            $("#logo").css("margin-top", "290px");
            $(".option1").css("margin-top", "-240px");

            $(".optionRes").css("display", "none");
            $(".optionCliente").css("display", "none");
            $(".optionHab").css("display", "flex");

            menuHabitaciones = true;
        } else if (menuHabitaciones === true) {
            $("#navBar").css("height", "110px");
            $("#navBar").css("margin-top", "-200px");
            $("#logo").css("margin-top", "200px");
            $(".option1").css("margin-top", "-150px");

            $(".optionHab").css("display", "none");

            menuHabitaciones = false;
        }
    });

    //OPTION NAV RESERVAS
    $(".clientesNav3").on("click", function() {
        if (menuReservas === false) {

            menuClientes = false;
            menuHabitaciones = false;

            $("#navBar").css("height", "220px");
            $("#navBar").css("margin-top", "-300px");
            $("#logo").css("margin-top", "290px");
            $(".option1").css("margin-top", "-240px");

            $(".optionHab").css("display", "none");
            $(".optionCliente").css("display", "none");
            $(".optionRes").css("display", "flex");

            menuReservas = true;
        } else if (menuReservas === true) {
            $("#navBar").css("height", "110px");
            $("#navBar").css("margin-top", "-200px");
            $("#logo").css("margin-top", "200px");
            $(".option1").css("margin-top", "-150px");

            $(".optionRes").css("display", "none");

            menuReservas = false;
        }
    });
});


function nada() {

}