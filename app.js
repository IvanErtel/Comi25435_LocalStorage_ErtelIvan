
// declaramos el Array de las hamburguesas 
const hamburguesas = [];
// declaramos el contructor de las hamburguesas
class Hamburguesa {
    constructor(nombre, verduras, salsas, queso, precio, imagen) {
      this.nombre = (nombre)?nombre:'';
      this.verduras = (verduras)?verduras:'';
      this.salsas = (salsas)?salsas:'';
      this.queso = (queso)?queso:'';
      this.precio = (precio)?precio:0;
      this.imagen = (imagen)?imagen:null;
    }
  }
  

  //creamos las diferentes variantes de hamburguesas
  const dobleCarne = hamburguesas.push(new Hamburguesa("1 Doble Carne","pepino y tomate","Mostaza", true, 450,"./Productos/Hamburguesas/hamburguesaDoble.jpg"));
  const tripleCarne = hamburguesas.push(new Hamburguesa("2 Triple Carne","lechuga y tomate","ketchup", false, 550,"./Productos/Hamburguesas/hamburguesaTriple.png"));
  const simpleCarne = hamburguesas.push(new Hamburguesa("3 Simple Carne","cebolla y tomate","mayonesa", true, 300,"./Productos/Hamburguesas/hamburguesaSimple.jpg"));
  const simplePollo = hamburguesas.push(new Hamburguesa("4 Simple Pollo","cebolla, tomate y pepino","barbacoa", false, 320,"./Productos/Hamburguesas/hamburguesaPollo.jpg"));

// declaramos el Array de las ensaladas 
const ensaladas = [];
// declaramos el contructor de las hamburguesas
class Ensalada{
  constructor(nombre,lechuga, tomate, pepino, repollo, choclo, rucula,cebolla, huevo, precio,imagen){
    this.nombre = (nombre)?nombre:'';
    this.lechuga = (lechuga)?lechuga:"";
    this.tomate = (tomate)?lechuga:"";
    this.pepino = (pepino)?lechuga:"";
    this.repollo = (repollo)?lechuga:"";
    this.choclo = (choclo)?lechuga:"";
    this.rucula = (rucula)?lechuga:"";
    this.cebolla = (cebolla)?lechuga:"";
    this.huevo = (huevo)?lechuga:"";
    this.precio = precio;
    this.imagen = (imagen)?imagen:null;
  }
}

//caesar , mediterranea , primavera
ensaladas.push(new Ensalada("caesar ", "si", "si", "no","no","si","si", "no","si", 150,"./Productos/ensaladas/caesar.jpg"));
ensaladas.push(new Ensalada("primavera ", "si", "si", "si","no","si","no", "no","si", 175,"./Productos/ensaladas/primavera.jpg"));
ensaladas.push(new Ensalada("mediterranea ", "si", "no", "si","si","no","no", "si","no",139,"./Productos/ensaladas/mediterranea.jpg"));


let texto = "<h2>Hamburguesas del dia</h2>";

let titulo = document.createElement("h2");

titulo.innerHTML = `${texto}`;
let texto2 = "<h2>Ensalada de la casa</h2>";

let titulo2 = document.createElement("h2");

titulo.innerHTML = `${texto2}`;

// document.body.appendChild(titulo);


let divHamburguesas = document.getElementById("divHamburguesas")
divHamburguesas.innerHTML =  `${texto}`
hamburguesas.forEach(hamburguesas => {
   divHamburguesas.innerHTML += `<img src='${hamburguesas.imagen}' alt='' width="350"  height="250"></img> ${hamburguesas.nombre} con ${hamburguesas.verduras} </br> $${hamburguesas.precio} 
   </br> <button type="button"  class="btn btn-primary" onclick="mostrarPrecio(${hamburguesas.precio})"
   class="btn">Comprar</button> </br></br>`
});                                                                                                                                                                                                                      

let divEnsaladas = document.getElementById("divEnsaladas");
divEnsaladas.innerHTML = `${texto2}`
ensaladas.forEach(ensaladas => {
  divEnsaladas.innerHTML += `<img src='${ensaladas.imagen}' alt='' width="350"  height="250"></img> ${ensaladas.nombre}  $${ensaladas.precio}
  </br> <button type="button"  class="btn btn-primary" onclick="mostrarPrecio(${ensaladas.precio})" 
  class="btn">Comprar</button> </br></br>`
})
console.log(hamburguesas)
let boton = document.querySelectorAll(".btn");

function mostrarPrecio(mensaje){

  Swal.fire({
    title: "Su pedido fue procesado con exito, monto a abonar: $" + mensaje,
    width: 500,
    padding: '3em',
    color: '#fff',
    background: '#fff url(./Productos/Hamburguesas/hamburguesaDoble.jpg)',
    timer: 3000,
    // backdrop: `
    //   rgba(0,0,123,0.4)
    //   url("https://c.tenor.com/8m4sSqF0nGIAAAAi/hamburger-joypixels.gif")
    //   left top
    //   no-repeat
    // `
  })

  }

