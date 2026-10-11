import { CATEGORIAS } from "../config.js";
import { crearImagen } from "./images.js";

const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const lista = a => `<ul class="lst">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;

// Un paso puede ser un texto simple o un objeto: { t: título, d: detalle, m: minutos, ok: señal de que está listo }
function paso(p) {
  if (typeof p === "string") return `<li><div class="st">${esc(p)}</div></li>`;
  return `<li><div class="st"><b>${esc(p.t)}</b>${p.m ? `<span class="mt">⏱ ${p.m} min</span>` : ""}
    <span class="dt">${esc(p.d)}</span>${p.ok ? `<span class="ok">✔ Está listo cuando: ${esc(p.ok)}</span>` : ""}</div></li>`;
}

export function crearTarjeta(r) {
  const cat = CATEGORIAS.find(c => c.id === r.categoria);
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <div class="ph"><span class="badge">${esc(cat.nombre)}</span>📷 Aquí va la foto<br><small>${esc(r.id)}</small></div>
    <div class="in"><h2>${esc(r.nombre)}</h2><p class="tag">${esc(r.frase)}</p>
      <div class="chips"><span>⏱ ${esc(r.tiempo)}</span><span>🍽 1 persona</span><span>🔥 ${esc(r.nivel)}</span></div></div>
    <details><summary>Ver receta ▾</summary><div class="b">
      <h3>Ingredientes</h3><div class="ing">${r.ingredientes.map(x => `<span>${esc(x)}</span>`).join("")}</div>
      ${r.utensilios ? `<h3>Necesitas</h3><div class="ing">${r.utensilios.map(x => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
      ${r.antes ? `<div class="box"><b>Antes de empezar</b>${lista(r.antes)}</div>` : ""}
      <h3>Paso a paso</h3><ol>${r.pasos.map(paso).join("")}</ol>
      ${r.errores ? `<div class="warn"><b>Si algo sale mal</b>${lista(r.errores)}</div>` : ""}
      ${r.guardar ? `<p class="gd">🧊 ${esc(r.guardar)}</p>` : ""}
      <div class="tip">💡 ${esc(r.tip)}</div></div></details>`;
  el.querySelector(".ph").append(crearImagen(r.id, r.nombre));
  return el;
}

export function mostrarLista(contenedor, recetas) {
  contenedor.replaceChildren(...recetas.map(crearTarjeta));
}