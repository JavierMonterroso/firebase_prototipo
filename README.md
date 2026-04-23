
# IRTRA Explorer - Guía de Inicio Local

Esta es una aplicación móvil-first diseñada para explorar los parques y hostales del IRTRA. Sigue estos pasos para ejecutarla en tu computadora.

## Requisitos

- **Node.js:** Versión 18.x o superior.
- **npm:** Incluido con Node.js.

## Instalación y Configuración de Imágenes

Para que la aplicación funcione y muestre tus fotos reales, sigue estos pasos exactamente:

1. **Extraer:** Descomprime el archivo ZIP en una carpeta.
2. **Crear Carpeta Public:** En la raíz del proyecto (donde ves el archivo `package.json`), crea una carpeta nueva llamada `public`.
3. **Mover Imágenes:** Localiza la carpeta `src/img` y **muévela** completa dentro de la carpeta `public` que acabas de crear.
   - La ruta correcta debe ser: `public/img/tus-fotos.jpg`.
4. **Instalar Dependencias:** Abre una terminal en la carpeta raíz y ejecuta:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:9002](http://localhost:9002)

## Notas Importantes
- **Vista Móvil:** Usa las herramientas de desarrollador (F12) en tu navegador y activa la "Vista de dispositivo móvil" para la mejor experiencia.
- **Imágenes:** Si las imágenes no cargan, verifica que estén en `public/img/` y que el nombre del archivo coincida exactamente con el que está escrito en `src/lib/data.ts`.

---
© 2024 IRTRA Explorer Prototyper.
