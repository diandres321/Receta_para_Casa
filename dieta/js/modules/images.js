import { FOTOS } from "../config.js";

export function crearImagen(id, nombre) {
  const img = new Image();
  img.alt = nombre;
  img.loading = "lazy";
  let i = 0;
  const probar = () => {
    if (i >= FOTOS.extensiones.length) { img.remove(); return; }
    img.src = `${FOTOS.carpeta}${id}.${FOTOS.extensiones[i++]}`;
  };
  img.onerror = probar;
  probar();
  return img;
}
