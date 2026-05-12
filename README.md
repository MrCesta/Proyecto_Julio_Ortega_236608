# Portafolio Proyecto Julio Cesar Ortega Alba 236608

Este es un proyecto de **WebStack** moderno y minimalista, diseñado para presentar mi trayectoria como Ingeniero en Sistemas Electrónicos Inteligentes (SEI). El sitio se centra en la experiencia de usuario (UX) y el rendimiento, utilizando tecnologías web nativas sin frameworks externos.
---
## Características Principales

* **Modo Oscuro/Claro:** Implementado con variables CSS y persistencia mediante `localStorage`, recordando la preferencia del usuario entre sesiones.
* **Diseño Responsivo Completo:** Adaptado para móviles, tablets y escritorio mediante Media Queries y un menú hamburguesa animado para pantallas pequeñas.
* **Interactividad Avanzada:**
* **Cursor personalizado** con punto y anillo que se expande al pasar sobre elementos interactivos.
* **Partículas de click** que explotan visualmente en el punto de interacción.
* **Barra de progreso de scroll** en la parte superior de la página.
* **Efecto Parallax** sutil en la sección hero al mover el mouse.
* **Efecto Shimmer** animado en el botón de acción principal.
* **Glow dinámico** en tarjetas de habilidades que sigue al cursor.
* **Animaciones fade-in** al hacer scroll mediante `Intersection Observer API`.
* **Sección de Educación con Tarjetas:** Historial educativo con badges de estado (EN CURSO / COMPLETADO) y etiquetas de materias.
* **Pestañas Interactivas:** Sección "Sobre mí" con pestañas de Ubicación, Edad y Universidad.
* **Formulario de Contacto Validado:** Validación en tiempo real sin recarga de página, con mensajes de error en el DOM.
---
## Stack Tecnológico

* **HTML5:** Estructura semántica con uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>` para accesibilidad y jerarquía de contenido.
* **CSS3:** Uso extensivo de:
    * Variables CSS (Custom Properties con `:root`) para paleta de colores y tipografía.
    * **Flexbox** para la barra de navegación y layouts lineales.
    * **CSS Grid** para la galería de habilidades (3 → 2 → 1 columna según dispositivo).
    * Animaciones `@keyframes` (fade-in, badge-pop, shimmer, partículas).
    * Media Queries para diseño responsivo.
* **Vanilla JavaScript (ES6+):**
    * `Intersection Observer API` para efectos de aparición al hacer scroll.
    * `localStorage` para persistencia de tema (oscuro/claro) e idioma (ES/EN).
    * Manipulación del DOM para validación de formulario y cambio de idioma.
    * `addEventListener` para cursor, partículas, hamburguesa y pestañas.
* **Google Fonts:** Tipografías `Syne` (títulos) y `Space Mono` (cuerpo) importadas desde CDN.
---
## Estructura del Proyecto
```
portafolio/
│
├── index.html       # Estructura base, contenido semántico y scripts
├── Imagen.jpeg      # Foto de perfil del desarrollador
└── README.md        # Documentación del proyecto
```
---
## Secciones del Sitio

 Sección | Descripción 
---|---|
 **Inicio** | Presentación con foto, badges de info rápida y botones de acción 
 **Sobre mí** | Descripción personal, tecnologías dominadas y pestañas de información 
 **Educación** | Historial educativo con tarjetas, badges de estado y etiquetas de materias 
 **Habilidades** | Galería de tarjetas con proyectos y competencias técnicas 
 **Contacto** | Información de contacto y formulario validado con JavaScript 
---
## Características de Accesibilidad
* Atributos `aria-label` y `aria-expanded` en elementos interactivos.
* Etiquetas `<label>` asociadas a cada `<input>` del formulario.
* Atributo `alt` descriptivo en la foto de perfil.
* Jerarquía semántica correcta con `role="navigation"` y `role="alert"`.
---
> Producido por **Julio Ortega | Matricula: 236608**  
> Proyecto Final: **Programación Full Web Stack, Universidad Autónoma de Ciudad Juárez**
