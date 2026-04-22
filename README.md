
# IRTRA Explorer - Guía de Inicio Local

Esta es una aplicación móvil-first diseñada para explorar los parques y hostales del IRTRA. Sigue estos pasos para ejecutarla en tu computadora.

## Requisitos

- **Node.js:** Versión 18.x o superior.
- **npm:** Incluido con Node.js.

## Instalación

1. **Descomprimir:** Extrae el contenido del archivo ZIP en una carpeta.
2. **Terminal:** Abre una terminal en la carpeta raíz del proyecto.
3. **Instalar Dependencias:**
   ```bash
   npm install
   ```

## Configuración de Imágenes Reales

Para que las imágenes que subiste funcionen correctamente en tu equipo local:

1. Localiza la carpeta `src/img` en el proyecto.
2. **Mueve** o copia esa carpeta `img` completa a la carpeta `public/`.
3. La ruta final debe ser: `public/img/tu-imagen.jpg`.
4. De esta manera, Next.js servirá las imágenes bajo la ruta `/img/`.

## Ejecución

Para iniciar el servidor de desarrollo en modo móvil-first:

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:9002](http://localhost:9002)

## Notas de Desarrollo

- **Diseño Mobile-First:** La aplicación está optimizada para vistas móviles. En tu navegador, usa las herramientas de desarrollador (F12) y activa la vista de dispositivo móvil.
- **Tecnologías:** Next.js 15, React 19, Tailwind CSS, Lucide Icons y ShadCN UI.
- **Simulación:** Los flujos de Login, Registro y Monedero son funcionales a nivel de prototipo (estado local).

---
© 2024 IRTRA Explorer Prototyper.
