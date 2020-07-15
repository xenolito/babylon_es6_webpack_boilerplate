import { Car } from "./js/modules/car.js";

(function() {
    console.log("hola que ase");

    var Micoche = new Car("Toyota", "RAV4");
    Micoche.ponMarcha("D");
    console.log(
        "Marcha: " +
            Micoche.userGear +
            " \nMarca: " +
            Micoche.marca +
            " \nModelo: " +
            Micoche.modelo
    );
})();
