import { initNavbar } from "./modules/navbar.js";
import { Router } from "./modules/router.js";
import "./modules/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  const router = new Router(); // Guardamos la instancia

  // Botón "Get Started" lleva a la sección About
  const btnGetStarted = document.getElementById("btnGetStarted");
  if (btnGetStarted) {
    btnGetStarted.addEventListener("click", () => {
      router.navigate("about"); // <-- Aquí usamos el método correcto
    });
  }

  // Botón para ir a Services desde About
const btnGoServices = document.getElementById("btnGoServices");
if (btnGoServices) {
  btnGoServices.addEventListener("click", () => {
    router.navigate("services");
  });
}

});
