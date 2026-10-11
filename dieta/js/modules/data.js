import { DATOS } from "../config.js";

export async function cargarRecetas() {
  const r = await fetch(DATOS);
  if (!r.ok) throw new Error("No se pudo cargar " + DATOS);
  return r.json();
}

export const porCategoria = (recetas, id) => recetas.filter(r => r.categoria === id);
