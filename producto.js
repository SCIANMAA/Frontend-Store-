// Lista de productos
const productos = [
  { id: 1, nombre: "VueJS", descripcion: "Remera inspirada en Vue.js, el framework progresivo de JavaScript que facilita la construcción de interfaces dinámicas y de alto rendimiento. Ideal para desarrolladores que valoran la simplicidad y la flexibilidad.", precio: 25, imagen: "img/IMG/1.jpg" },
  { id: 2, nombre: "AngularJS", descripcion: "Remera en honor a AngularJS, el framework que revolucionó la forma de crear aplicaciones web dinámicas con un enfoque estructurado basado en MVC. Un clásico que marcó el inicio de la era de los SPA (Single Page Applications).", precio: 25, imagen: "img/IMG/2.jpg" },
  { id: 3, nombre: "ReactJS", descripcion: "Perfecta para los fans de React, con el clásico átomo en celeste sobre fondo oscuro.  Prenda liviana, transpirable y diseñada para largas horas de código sin perder comodidad.", precio: 25, imagen: "img/IMG/3.jpg" },
  { id: 4, nombre: "Redux", descripcion: "Remera dedicada a Redux, la librería de gestión de estados más reconocida en el ecosistema de React y más allá. Perfecta para quienes disfrutan mantener el control absoluto sobre los datos de sus aplicaciones.", precio: 25, imagen: "img/IMG/4.jpg" },
  { id: 5, nombre: "Node.js", descripcion: "Remera que celebra Node.js, la tecnología que llevó JavaScript al lado del servidor, permitiendo construir aplicaciones escalables y rápidas. Representa el espíritu del desarrollo backend moderno.", precio: 25, imagen: "img/IMG/5.jpg" },
  { id: 6, nombre: "SASS", descripcion: "Remera con diseño en honor a SASS, el preprocesador de CSS que permite escribir estilos más limpios, reutilizables y organizados. Para desarrolladores que valoran la elegancia en el frontend.", precio: 25, imagen: "img/IMG/6.jpg" },
  { id: 7, nombre: "HTML5", descripcion: "Diseño minimalista con el logo de HTML5, ideal para quienes dan sus primeros pasos en el mundo del desarrollo web  Fabricada en algodón suave. Perfecta para mostrar con orgullo tu base en la programación.", precio: 25, imagen: "img/IMG/7.jpg" },
  { id: 8, nombre: "Github", descripcion: "Remera que rinde homenaje a GitHub, la plataforma de colaboración más grande del mundo para proyectos de software. Un símbolo de código abierto, trabajo en equipo y comunidad.", precio: 25, imagen: "img/IMG/8.jpg" },
  { id: 9, nombre: "BulmaCSS", descripcion: "Remera inspirada en Bulma, el moderno framework CSS basado en Flexbox, que facilita crear diseños responsivos con un estilo minimalista y elegante. Ideal para amantes del diseño rápido y limpio.", precio: 25, imagen: "img/IMG/9.jpg" },
  { id: 10, nombre: "TypeScript", descripcion: "Remera en honor a TypeScript, el superset tipado de JavaScript que brinda mayor seguridad, productividad y escalabilidad al desarrollo. Perfecta para quienes buscan llevar su código a otro nivel.", precio: 25, imagen: "img/IMG/10.jpg" },
  { id: 11, nombre: "Drupal", descripcion: "Remera dedicada a Drupal, uno de los CMS más potentes y flexibles del mercado, utilizado por gobiernos, universidades y grandes organizaciones para gestionar contenido a escala.", precio: 25, imagen: "img/IMG/11.jpg" },
  { id: 12, nombre: "JavaScript", descripcion: "Pensada para los que hacen que el código cobre vida.  El logo JavaScript en negro resalta sobre un fondo amarillo elegante.  Hecha con tela premium, ideal para devs que nunca paran de crear.", precio: 25, imagen: "img/IMG/12.jpg" },
  { id: 13, nombre: "GraphQL", descripcion: "Remera con diseño basado en GraphQL, el lenguaje de consultas de datos que revolucionó las APIs al brindar eficiencia y flexibilidad en el consumo de información.", precio: 25, imagen: "img/IMG/13.jpg" },
  { id: 14, nombre: "WordPress", descripcion: "Remera que celebra WordPress, el CMS más popular del mundo, que alimenta desde pequeños blogs hasta grandes sitios web. Símbolo de accesibilidad y libertad en la web.", precio: 25, imagen: "img/IMG/14.jpg" },
];

// Obtener el id desde la URL (?id=3)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Buscar producto correspondiente
const producto = productos.find(p => p.id === id);

// Insertar la info en el HTML
if (producto) {
  document.getElementById("nombre").textContent = producto.nombre;
  document.getElementById("descripcion").textContent = producto.descripcion;
  document.getElementById("imagen").src = producto.imagen;
} else {
  document.querySelector("main").innerHTML = "<h2>Producto no encontrado</h2>";
}
