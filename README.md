# Catálogo de Videojuegos (Angular Frontend)

Este proyecto es una aplicación web SPA (Single Page Application) desarrollada en **Angular** que permite a los usuarios explorar, buscar y filtrar un catálogo dinámico de videojuegos. La aplicación consume un servicio/API para renderizar la información en tiempo real, ofreciendo una interfaz fluida, responsiva y de alto rendimiento.

---

## Arquitectura y Características Frontend

La aplicación fue construida siguiendo las mejores prácticas del ecosistema moderno de Angular:

* **Arquitectura Basada en Componentes:** Separación clara de responsabilidades (Componentes para la barra de búsqueda, tarjetas de videojuegos, vistas de detalle y contenedores de listas).
* **Consumo de APIs (Servicios):** Implementación de servicios inyectables utilizando `HttpClient` para gestionar las peticiones asíncronas hacia el backend o API de videojuegos.
* **Reactividad con RxJS:** Uso de observables para manejar los flujos de datos, eventos de búsqueda y el ciclo de vida de las peticiones de manera eficiente.
* **Estilos Flexibles y Responsivos:** Uso de CSS moderno (Flexbox/Grid) o frameworks de diseño para garantizar que la interfaz se adapte perfectamente a dispositivos móviles, tablets y pantallas de escritorio.
* **Módulo de Renderizado Eficiente:** Configurado sobre **Vite** como motor de desarrollo para asegurar recargas instantáneas y un bundle final optimizado para producción.

---

## Tecnologías Utilizadas

**Angular 17+**
**TypeScript** (Tipado estricto para modelos de videojuegos)
**RxJS** (Manejo de eventos asíncronos)
**Vite / Angular CLI** (Entorno de desarrollo y construcción)

---

## Instalación y Ejecución Local

### Prerrequisitos
*Tener instalado **Node.js** (versión LTS recomendada).
*Tener instalado el **Angular CLI** de forma global (`npm install -g @angular/cli`).

### Pasos para iniciar el entorno de desarrollo
1. Abre una terminal en la raíz del proyecto.
2. Instala todas las dependencias de Node de tu archivo `package.json`:
   ```bash
   npm install
3. Enciende el servidor de desarrollo local:

npm start o ng serve

4. Abre tu navegador e ingresa a la ruta predeterminada: http://localhost:4200

##Estructura del Código Fuente (src/app)
**components: Componentes reutilizables de la interfaz (Cards, Navbar, Spinners).

**pages o /views: Vistas principales de la aplicación (Home, Detalle del Juego, Favoritos).

**services: Lógica de conexión HTTP para traer los datos de los videojuegos.

**models o /interfaces: Plantillas TypeScript que definen la estructura exacta de un objeto "Videojuego" (id, nombre, imagen, plataformas, calificacion).