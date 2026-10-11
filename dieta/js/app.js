import { CATEGORIAS } from "./config.js";
import { cargarRecetas, porCategoria } from "./modules/data.js";
import { crearTabs } from "./modules/tabs.js";
import { mostrarLista } from "./modules/render.js";

const lista = document.querySelector("#lista");

async function iniciar() {
  try {
    const recetas = await cargarRecetas();
    const mostrar = id => mostrarLista(lista, porCategoria(recetas, id));
    crearTabs(document.querySelector("#tabs"), CATEGORIAS, mostrar);
    mostrar(CATEGORIAS[0].id);
  } catch (e) {
    lista.innerHTML = `<p class="note">No se pudieron cargar las recetas. ${e.message}</p>`;
  }
}
iniciar();
