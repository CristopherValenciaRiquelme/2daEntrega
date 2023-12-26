

alert("Vamos a calcular la cuenta entre todos los invitados");

 
let personasTotales = parseInt(prompt("Cantidad de personas"));

if( personasTotales >= 10 ){
   //COdigo a ejecutar
   console.log("Wow, sois un grupo granded");
}else if( personasTotales < 10 && personasTotales >= 5){
   console.log("Buen grupo de amigos");
}else{
   console.log("Quiza a la proxima puedan sumar mas amigos");
}

let totalCuenta = parseInt(prompt("Valor de la cuenta"));

let respuestaBool= prompt("Todos pagan por igual, Si o No?");
let booleano = respuestaBool.toLocaleLowerCase();

if( booleano == "si" ){
   
   
   pagarTodosIgual();


}else if( booleano == "no"){
   let nombrePaga = prompt("Nombre persona");
   let porCuantos = parseInt(prompt("Cuantas personas va a cubrir?"));

   let pagados= 0;

   pagarDistinto(nombrePaga,porCuantos);
 

}else{
   elseError();
}

alert("Gracias por usar la App-PagaJusto");


function pagarTodosIgual(){
   let paga = totalCuenta/personasTotales;
   console.log( "Cada uno debe pagar: "+ paga);
   alert("Cada uno paga: "+ paga);
}

function pagarDistinto(nombrePaga,porCuantos){
  
   
   while(nombrePaga !== null){
      
     
      
      
    

      let totalPaga = (totalCuenta/personasTotales)*porCuantos;
      let pagados = +porCuantos;
      let faltan = personasTotales - pagados;


      console.log(nombrePaga +" Paga un total de: "+totalPaga +", cubriendo "+ porCuantos+" personas");
      console.log("Faltan por pagar: "+faltan);
      console.log("Han pagado: "+ pagados +" personas");
       
      nombrePaga = prompt("Nombre siguiente persona");
      porCuantos= parseInt(prompt("Cuantas personas va a cubrir?"))
  }
}

function elseError(){
   console.log("Eror: "+ respuestaBool );
}