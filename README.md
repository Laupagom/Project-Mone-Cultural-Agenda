# project-beta

Prototype Design
https://www.figma.com/file/yfD0F5uHW56cQSwSg6vSfW/Laura-projectalpha?node-id=301%3A93

Concept Idea
https://miro.com/app/board/o9J_llETwC8=/

# **Project-beta**

## **Objetivo**


En este proyecto se quiere crear una página web de venta de entradas e información de eventos culturales en la ciudad de Valencia.

## **Programas utilizados**
El proyecto se ha construido con los siguientes programas:
- Para el diseño: 
  - <a href="https://www.figma.com/">Figma</a>: diseño de wireframes.
  - <a href="https://www.adobe.com/products/illustrator.html">Illustrator</a>: diseño de logotipo e iconos.
- Para el desarrollo: 
  - <a href="https://code.visualstudio.com/">Visual Studio Code</a>: editor de código fuente.
  - <a href="https://prepros.io/">Prepos</a>: compilador de archivos.

## **Nomenclatura**

### **Clases**

La convención de nombre para las clases de los elementos sigue el patrón BEM:

- .bloque{}
- .bloque__elemento{}
- .bloque--modificador{}

'.bloque' representa el primer nivel de una abstracción o componente, es el elemento padre.
'.bloque__elemento' representa un hijo del elemento padre '.bloque'.
'.bloque--modificador' representa un estado diferente de '.bloque'.

<!-- Ejemplo sacado del proyecto -->

### **camelCase en JavaScript**

## **SCSS**

Los archivos scss son los encargados de aportar los estilos necesarios a los elementos html, estos se encuentran organizados en la carpeta scss/.

### **Estructura del repositorio scss/**

- sass/
  - atmosphere/
    - _font-face.scss
    - _typography.scss
  - htmlelements/
    - _buttons.scss
    - _class.scss
    - _form.scss
    - _links.scss
    - _search.scss
  - layout/
    - _app.scss
    - _cards.scss
    - _copyright.scss
    - _footer.scss
    - _header.scss
    - _menu-mobile.scss
    - _news.scss
    - _newsletter.scss
    - _payment.scss
    - _slider.scss
  - site/
    - _site.scss
  - structure/
    - _site.scss
  - utilities/
    - _functions.scss
    - _mixin.scss
  - variables/
    - _color.scss
    - _space.scss
    - _z-index.scss
  - style.scss
