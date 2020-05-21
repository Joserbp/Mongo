var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://joserbp:Ohd9REl6RJ2SZGPm@cluster1-ytuib.gcp.mongodb.net/Libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
	var libro = Libro ({
		Isbn: "978-987-612-778-3",
 		Titulo: "Asylum",
 	 	Autor: "Madeleine Roux",
  		Editorial: "V&R Editorial",
  		Año: "2014"
	});

	libro.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function nuevoLibros(){

	var libros =[
	{Isbn:"978-987-612-886-5",Titulo:"Scarlets",Autor:"Madeleine Roux",Editorial:"V&R Editorial",Año:"2015"},
	{Isbn:"978-987-612-906-0",Titulo:"Sanctum",Autor:"Madeleine Roux",Editorial:"V&R Editorial",Año:"2015"},
	{Isbn:"978-607-311-920-7",Titulo:"Memorias de un amigo imaginario",Autor:"Matthew Dicks",Editorial:"Nube de tinta",Año:"2015"},
	{Isbn:"978-607-720-002-4",Titulo:"Mujercitas",Autor:"Louisa May Alcott",Editorial:"Ediciones MAAN",Año:"2011"},
	{Isbn:"84-7720-405-05",Titulo:"El caballero de la armadura oxidada",Autor:"Robert Fisher",Editorial:"Ediciones Obelisco",Año:"2001"},
	{Isbn:"978-968-15-2121-9",Titulo:"Leyendas de fantasmas de México",Autor:"Héctor López",Editorial:"EMU",Año:"2007"},
	{Isbn:"978-006-236-406-7",Titulo:"Catacomb",Autor:"Madeleine Roux",Editorial:"V&R Editorial",Año:" 2016"},
	{Isbn:"978-987-747-014-7",Titulo:"Los artistas de hueso",Autor:"Madeleine Roux",Editorial:"V&R Editorial",Año:" 2017"},
	{Isbn:"978-987-747-253-0",Titulo:"Escape de Asylum",Autor:"Madeleine Roux",Editorial:"V&R Editorial",Año:" 2017"}
	];

	Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function FindByIbsn(isbn){
	Libro.find({Isbn: isbn},function(err,data){
    console.log(data);
  });
}

function UpdateTituloByIsbn(isbn,nuevoTitulo){
	Libro.findOneAndUpdate({Isbn: isbn} , {'Titulo':nuevoTitulo},function(err,data){
	if (err) {
    console.log(err);
    }
    console.log(data);
    
  });
}


function main() {
  //nuevoLibro();
  //nuevoLibros();
  FindByIbsn("978-987-747-014-7");
  UpdateTituloByIsbn("978-987-747-014-7","Artistas de los huesos");
}
main();    