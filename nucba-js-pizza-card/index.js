let pizzas = [
  {
    id: "1",
    nombre: "Pizza de Muzzarella",
    ingredientes : ["Salsa Roja", "Muzzarella"],
    precio: "500",
    imagen :'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
    {
    id: "2",
    nombre: "Pizza de pepperoni",
    ingredientes : ["Salsa Roja", "Salame", "Muzzarella"],
    precio: "600",
    imagen :'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    id: "3",
    nombre: "Pizza de cebolla",
    ingredientes : ["Cebolla", "Muzzarella"],
    precio: "750",
    imagen :'https://images.unsplash.com/photo-1602658015456-0e837aedd538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: "4",
    nombre: "Pizza especial",
    ingredientes : ["Jamón", "Muzzarella", "Morrón", "Huevo", "Salsa roja"],
    precio: "710",
    imagen :'https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: "5",
    nombre: "Pizza Napolitana",
    ingredientes : ["Tomate en rodajas", "Muzzarella", "Salsa roja" ],
    precio: "630",
    imagen :'https://images.unsplash.com/photo-1565364909914-052f0e2a4976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: "6",
    nombre: "Pizza con palmitos",
    ingredientes : ["Palmitos", "Muzzarella","Salsa roja"],
    precio: "700",
    imagen :'https://images.unsplash.com/photo-1588170737136-c5f83da1321a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
  
  
]

const cards = document.getElementById('cards');

const renderCard = pizza => {
  const {nombre, ingredientes,precio, imagen} = pizza
  return `
    <div class="card">
    <img src="${imagen}" alt="${nombre}" class="card-img">
    <div class="card-body">
      <h3> ${nombre} </h3>  
      <p> ${ingredientes} </p>
      <p style="font-weight:bold"> $${precio} </p>
    </div>
    </div>
  `
}

const renderCards = pizzas => {
  cards.innerHTML = pizzas.map(renderCard).join('');
}

window.addEventListener('DOMContentloaded', renderCards(pizzas));

//creo la variable boton para hacer el listener
var boton = document.getElementById("boton");

//desarrollo el listener que tome el valor del input
boton.addEventListener("click", () => {
  var valor = document.getElementById("in").value
  const arrayPizzas = pizzas.forEach ( (pizza) => {  //busco en el array la piza que coincida con el valor del input
    var listaPizza1
    pizza.id === valor ? (renderCards(pizzas)): //en el desafio anterior aca renderizaba precios y nombre pero no se que ponerahora
                         (null);
  });
});