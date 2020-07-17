/*import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    Color,
    AxesHelper,
    PlaneGeometry,
    MeshBasicMaterial,
    Mesh,
    Clock,
    SphereGeometry
} from "./modules/three.module.js";
*/
import $ from "jquery";
import * as THREE from "three";
import { Car } from "./js/modules/car.js";

(function () {
    let camera, scene, renderer;
    let geometry, material, mesh;

    $(document).ready(function () {
        init();
    });

    function init() {
        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        camera.position.z = 1;

        scene = new THREE.Scene();

        geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        material = new THREE.MeshNormalMaterial();

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        animate();

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
    }

    function animate() {
        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render(scene, camera);
    }
})();
