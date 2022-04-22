
const listaRegistros = [];
let nombre = document.getElementById("nombre");
let mail = document.getElementById("mail");

class Usuario {
  constructor(nombre, mail) {
    this.nombre = nombre;
    this.mail = mail;
  }
}


document.getElementById("btnRegistrar").addEventListener('click', () =>{
      
       listaRegistros.push(new Usuario(nombre.value, mail.value));

       localStorage.setItem('listaUsuarios', JSON.stringify(listaRegistros))
  
       localStorage.getItem('listaUsuarios',JSON.parse(listaRegistros));

       alert("Datos fueron cargados al Local Storage Correctamente");

})
