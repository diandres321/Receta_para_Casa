# Sabores de Casa

Recetario web. Sin instalaciones: HTML + CSS + JavaScript (módulos).

## Estructura
- `index.html`: página base.
- `css/styles.css`: estilos y colores (variables arriba del archivo).
- `data/recetas.json`: TODAS las recetas. Para agregar o editar, solo toca este archivo.
- `fotos/`: una imagen por receta, con el mismo nombre que su `id` (ej. `lomo-saltado.jpg`).
- `js/config.js`: categorías, ruta de datos y extensiones de fotos.
- `js/modules/`: `data.js` (carga), `tabs.js` (pestañas), `render.js` (tarjetas), `images.js` (fotos).
- `js/app.js`: punto de entrada que une los módulos.

## Subir a GitHub Pages
1. Crea un repositorio nuevo y sube todo el contenido de esta carpeta.
2. Settings > Pages > Source: "Deploy from a branch" > rama `main`, carpeta `/ (root)`.
3. En 1 o 2 minutos tendrás el enlace `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

## Probar en tu computadora
Los módulos JS no funcionan abriendo el archivo con doble clic. Usa:
`python -m http.server 8000` dentro de la carpeta y abre `http://localhost:8000`.

## Fotos
Formato horizontal, JPG o WebP, unos 800 px de ancho. Si una foto no existe, se ve el cuadro rosado.
