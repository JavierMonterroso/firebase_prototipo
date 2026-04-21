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

## Ejecución

Para iniciar el servidor de desarrollo en modo móvil-first:

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:9002](http://localhost:9002)

## Notas de Desarrollo

- **Diseño Mobile-First:** La aplicación está optimizada para vistas móviles. En tu navegador, usa las herramientas de desarrollador (F12) y activa la vista de dispositivo móvil para la mejor experiencia.
- **Tecnologías:** Next.js 15, React 19, Tailwind CSS, Lucide Icons y ShadCN UI.
- **Simulación:** Los flujos de Login, Registro y Monedero son funcionales a nivel de prototipo (estado local) y no requieren una base de datos externa para esta demo.

---
© 2024 IRTRA Explorer Prototyper.
