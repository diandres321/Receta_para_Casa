export function crearTabs(contenedor, categorias, alElegir) {
  contenedor.innerHTML = categorias.map((c, i) =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="${i === 0}">${c.icono} ${c.nombre}</button>`).join("");
  contenedor.onclick = e => {
    const b = e.target.closest(".tab");
    if (!b) return;
    contenedor.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t === b));
    alElegir(+b.dataset.id);
  };
}
