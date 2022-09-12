//Constantes 

const listagastos=[];
var datogasto= {
    item: "",
    descripcion: "",
    fecha: "",
    monto: "",
}

// ejecucion de funcion boton agregar gasto

let buttonAgregar= document.getElementById('agregargasto');
buttonAgregar.addEventListener('click', (e) => agregargasto(e));


function agregargasto (e)

{
    e.preventDefault();
    let datosgasto=obtener();
    insertardatos(datosgasto);
    listagastos.push(datosgasto);
    
}

// obtener valores en variable objeto

function obtener() { 
    var datogasto= {
        id:"",
        item: document.getElementById('item').value,
        descripcion: document.getElementById('descripcion').value,
        fecha: document.getElementById('fecha').value,
        monto: document.getElementById('monto').value,
}
if( datogasto.item=="" || datogasto.descripcion==""||datogasto.fecha==""||datogasto.monto==""){
    alert("no pueden existir campos vacios");
}

else{
    return datogasto;
}

}

//obtengo el dato, y agrego el gasto en la tabla


//datos = obtener
//validación
/*let arrayobj=Object.values(gasto)
if (arrayobj.lengh< 4){
console.log ("hola")
}*/
    
function   insertardatos (gasto){
    
    let selecciontabla=document.getElementById("tabladegasto");
    let nuevafila= selecciontabla.insertRow(-1);
    let nuevacelda1=nuevafila.insertCell(0);
    nuevacelda1.innerHTML = gasto.item;
    let nuevacelda2= nuevafila.insertCell(1);
    nuevacelda2.innerHTML= gasto.descripcion;
    let nuevacelda3=nuevafila.insertCell(2);
    nuevacelda3.innerHTML= gasto.fecha;
    let nuevacelda4=nuevafila.insertCell(3);
    nuevacelda4.innerHTML= gasto.monto;

}

function editargasto(){

}

function eliminargasto (boton){
    boton.parentElement.parentElement.remove();
    tareas.filter(tarea=>)

}

function actualizargasto (){

}

function limpiarform1(){
    document.getElementById("presviv").value = 0;
    document.getElementById("prestra").value = 0;
    document.getElementById("presali").value = 0;
    document.getElementById("presser").value = 0;
    document.getElementById("presotr").value = 0;
    document.getElementById("presedu").value = 0;

}

function limpiarform2(){
    document.getElementById("item").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("fecha").value = "";


}

function leertareas(){
    window.localStorage.getItem('gastos')
}