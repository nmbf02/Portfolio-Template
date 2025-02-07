# Portfolio Next.js 13

Este proyecto es un portfolio personal desarrollado con Next.js 13 usando el nuevo directorio `app`, Tailwind CSS, Framer Motion y Next Themes para el manejo del modo oscuro. La aplicación incluye secciones para About, Projects, Tech Stack y Contact, además de componentes interactivos y animaciones.

## Características

- **Next.js 13 (app directory):** Uso de la última versión de Next.js con componentes del lado del servidor y del cliente.
- **Tailwind CSS:** Configuración personalizada para centrar contenedores y manejo de variables para modos claro/oscuro.
- **Modo Oscuro Manual:** Alternancia de tema mediante un botón, utilizando `next-themes`.
- **Animaciones:** Implementación de animaciones con Framer Motion en textos y secciones.
- **Componentes UI Básicos:** Componentes reutilizables (Button, Card, Input, Textarea) creados para la aplicación.
- **Contacto:** Formulario de contacto funcional con acción simulada en el servidor.
- **Optimización:** Uso del componente `next/image` para imágenes y animaciones suaves.

## Instalación

### Prerrequisitos

- **Node.js:** Versión LTS (18.x o superior)
- **npm** (viene con Node.js)
- **Git**

### Pasos para ejecutar el proyecto localmente

1. **Clonar el repositorio:**

    ```bash  
    git clone https://github.com/tu_usuario/tu_repositorio.git   
    cd tu_repositorio
     ```
2. **Instalar dependencias:**

    ```bash  
    npm install  
    ```   

3. **Ejecutar el servidor de desarrollo:**

    ```bash  
    npm run dev  
    ```   

4. **Abrir en el navegador:**

Visita http://localhost:3000

## Estructura del Proyecto

```pgsql  
    my-portfolio/
    ├── app/
    │   ├── components/
    │   │   ├── animated-text.tsx
    │   │   ├── contact-form.tsx
    │   │   ├── parallax.tsx
    │   │   ├── project-card.tsx
    │   │   └── tech-stack.tsx
    │   ├── actions.ts
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── theme-provider.tsx
    │   └── theme-toggle.tsx
    ├── components/ui/
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── input.tsx
    │   └── textarea.tsx
    ├── lib/
    │   └── utils.ts
    ├── app/globals.css
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── package.json
```  

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Fork el repositorio. 
2. Crea una nueva rama: git checkout -b feature/nueva-funcionalidad 
3. Realiza tus cambios y haz commits siguiendo las convenciones. 
4. Envía un Pull Request con tus cambios.

## Licencia

Este proyecto está bajo la [MIT License](LICENSE).