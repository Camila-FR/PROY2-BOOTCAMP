//Constantes 

const listagastos=[];

const presupuestos=[];

//local storage

function leerdatos(datos){
    return JSON.parse(window.localStorage.getItem(datos))||[];
}

function guadardatosls(datos, data){
    window.localStorage.setItem(datos,JSON.stringify(data));

}
// ejecucion de funcion boton agregar gasto en tabla

let buttonAgregar= document.getElementById('agregargasto');
buttonAgregar.addEventListener('click', (e) => agregargasto(e));


function agregargasto (e)
{
    e.preventDefault();
    //let listagastos=leerdatos("listagastos");
    let datogasto=obtener();
    
    if( datogasto.item=="" || datogasto.descripcion==""||datogasto.fecha==""||datogasto.monto==""){
        alert("no pueden existir campos vacios");
    }
    
    else if (datogasto.id==0 || datogasto.id==null) {
        datogasto.id=(listagastos.length +1);

        
        listagastos.push(datogasto);
        guadardatosls("listadegasto", listagastos);

        insertardatos();
       
    }
    else {
        // const student = students[idStudent.id-1];
        let pos = students.findIndex(student => student.id == idStudent.value);
        if (pos >= 0){
            students[pos].name = nombre.value;
            students[pos].lastName = apellido.value;
            students[pos].age = edad.value;
        
    }
    }
        
}

// obtener valores en variable objeto

function obtener() { 
    var datogasto= {
        id:document.getElementById('id').value,
        item: document.getElementById('item').value,
        descripcion: document.getElementById('descripcion').value,
        fecha: document.getElementById('fecha').value,
        monto: document.getElementById('monto').value,
}
return datogasto;

}

//Obtener valores de presupuesto
function obtenerPres() { 
    var presupuestos= {
        Vivienda:document.getElementById('presviv').value,
        Transporte: document.getElementById('prestra').value,
        Alimentacion: document.getElementById('presali').value,
        Educacion: document.getElementById('presedu').value,
        Servicios: document.getElementById('presser').value,
        Otros: document.getElementById('presotr').value,
}
return presupuestos;
}
   
function   insertardatos (gastos){
    
    let fila=document.getElementById("filagasto");
    let listagastosls= leerdatos('listadegasto'); 
    fila.innerHTML="";
    listagastosls.forEach(element => {    
    fila.innerHTML+=`<tr>
    <td> ${element.id} </td>
    <td> ${element.item} </td>
    <td> ${element.descripcion} </td>
    <td> ${element.fecha} </td>
    <td> ${element.monto} </td>
    <td><button class="btn btn-danger">Eliminar</button>
    <button class="btn btn-secondary">Editar</button></td>
    </tr>`;
    });
}
     /*   let nuevafila= selecciontabla.insertRow(-1);
    let nuevacelda1=nuevafila.insertCell(0);
    nuevacelda1.innerHTML = gasto.id;
    let nuevacelda2= nuevafila.insertCell(1);
    nuevacelda2.innerHTML= gasto.item;
    let nuevacelda3= nuevafila.insertCell(2);
    nuevacelda3.innerHTML= gasto.descripcion;
    let nuevacelda4=nuevafila.insertCell(3);
    nuevacelda4.innerHTML= gasto.fecha;
    let nuevacelda5=nuevafila.insertCell(4);
    nuevacelda5.innerHTML= gasto.monto;
    let nuevacelda6= nuevafila.insertCell(5);
    nuevacelda6.innerHTML= `<button class="btn btn-danger">Eliminar</button>
    <button class="btn btn-secondary">Editar</button>`;
        });*/



function editargasto(){

}

//function eliminargasto (boton){
 //   boton.parentElement.parentElement.remove();
   // tareas.filter(tarea=>);

//}

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





//obtengo el dato, y agrego el gasto en la tabla


//datos = obtener
//validación
/*let arrayobj=Object.values(gasto)
if (arrayobj.lengh< 4){
console.log ("hola")
//}*/

// ejecucion de funcion boton agregar gasto

let buttonAgregarpres= document.getElementById('agregarpres');
buttonAgregarpres.addEventListener('click', (a) => agregarpres(a));


function agregarpres (a)

{
    a.preventDefault();
    let presupuesto=obtenerPres();
    
    if( presupuesto.Vivienda=="" || presupuesto.Transporte==""||presupuesto.Alimentacion==""||presupuesto.Educacion==""||presupuesto.Otros==""||presupuesto.Servicios==""){
        alert("no pueden existir campos vacios");
    }
    
    else{
        let selecvivpres=document.getElementById("vivpres");
        selecvivpres.innerHTML = `<h5 class="card-title">Vivienda</h5>
        <p class="card-text">Gasto <p>Presupuesto= ${presupuesto.Vivienda}</p>`;
        let selecedupres=document.getElementById("edupres");
        selecedupres.innerHTML = `<h5 class="card-title">Educación</h5>
        <p class="card-text">Gasto <p>Presupuesto= ${presupuesto.Educacion}</p>`;
        let selecalipres=document.getElementById("alipres");
        selecalipres.innerHTML = `<h5 class="card-title">Alimentación</h5>
        <p class="card-text">Gasto <p>Presupuesto= ${presupuesto.Alimentacion}</p>`;
        let selecotrpres=document.getElementById("otrpres");
        selecotrpres.innerHTML = `<h5 class="card-title">Otros</h5>
        <p class=card-text">Gasto <p>Presupuesto= ${presupuesto.Otros}</p>`;
        let selecserpres=document.getElementById("serpres");
        selecserpres.innerHTML = `<h5 class="card-title">Servicios</h5>
        <p class="card-text">Gasto <p>Presupuesto= ${presupuesto.Servicios}</p>`;
        let selectrapres=document.getElementById("trapres");
        selectrapres.innerHTML = `<h5 class="card-title">Transporte</h5>
        <p class="card-text">Gasto <p>Presupuesto= ${presupuesto.Transporte}</p>`;
    };
        
}

