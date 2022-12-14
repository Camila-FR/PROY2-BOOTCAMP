//Constantes 

let listagastos=[];

let presupuestos=[];

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
        
    let datogasto=obtener();
    //console.log( datogasto.id);
    if( datogasto.item=="" || datogasto.descripcion==""||datogasto.fecha==""||datogasto.monto==""){
        Swal.fire('No pueden existir campos vacios');
    }
    
    else if (datogasto.id==0 || datogasto.id==null) {
        datogasto.id= listagastos.length? (listagastos[listagastos.length -1 ].id +1): 1;      
        listagastos.push(datogasto);
        //console.log( datogasto.id);
       
    }
    else {
        // const student = students[idStudent.id-1];
        let pos = listagastos.findIndex(element => element.id == id.value);
        if (pos >= 0){
            listagastos[pos].item = item.value;
            listagastos[pos].descripcion = descripcion.value;
            listagastos[pos].fecha = fecha.value;
            listagastos[pos].monto = monto.value;
        //console.log( datogasto.id);
    }
    }
    guadardatosls("listadegasto", listagastos);
    insertardatos();
    limpiarform2();  
}

// obtener valores en variable objeto

function obtener() { 
    let datogasto= {
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
   
function   insertardatos (){
    
    let fila=document.getElementById("filagasto");
    listagastos= leerdatos('listadegasto'); 
    fila.innerHTML="";
    listagastos.forEach(element => {    
    fila.innerHTML+=`<tr>
    <td> ${element.id} </td>
    <td> ${element.item} </td>
    <td> ${element.descripcion} </td>
    <td> ${element.fecha} </td>
    <td> ${element.monto} </td>
    <td><button class="btn btn-danger" onclick="eliminargasto(this,'${element.id}')">Eliminar</button>
    <button class="btn btn-secondary" onclick="editargasto(this, '${element.id}')">Editar</button></td>
    
    </tr>`;
    });
}
insertardatos ();
    

function eliminargasto (button, id){
button.parentElement.parentElement.remove();
let gastos= leerdatos('listadegasto');
listagastos= gastos.filter((element) => element.id != id);

console.log(gastos);
console.log(listagastos);
console.log(id);
guadardatosls("listadegasto", listagastos);

}

function editargasto(button, ide){
    let gastos= leerdatos('listadegasto');
    
    let gastoeditado = gastos.find((element)=> element.id ==ide);
    
    
    
    id.value= gastoeditado.id;
    item.value = gastoeditado.item;
    monto.value = gastoeditado.monto;
    descripcion.value = gastoeditado.descripcion;
    fecha.value = gastoeditado.fecha;
    //console.log(id.value);
    

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
    document.getElementById("id").value = "";
    document.getElementById("item").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("fecha").value = "";

}


let buttonAgregarpres= document.getElementById('agregarpres');
buttonAgregarpres.addEventListener('click', (a) => agregarpres(a));


function agregarpres (a)

{
    a.preventDefault();
    let presupuesto=obtenerPres();
    
    if( presupuesto.Vivienda=="" || presupuesto.Transporte==""||presupuesto.Alimentacion==""||presupuesto.Educacion==""||presupuesto.Otros==""||presupuesto.Servicios==""){
        Swal.fire('No pueden existir campos vacios');
    }
    
    else{
        guadardatosls("presupuestos", presupuesto);
        insertarpres();
        Swal.fire(
            'Se ha actualizado!',
            '',
            'success'
          );
        
    };
        
}

function insertarpres(){
    presupuesto= leerdatos('presupuestos'); 
    let selecvivpres=document.getElementById("vivpres");
    selecvivpres.innerHTML = `<h5 class="card-title">Vivienda</h5>
    <p class="card-text" id="gas3viv">Gasto <p>Presupuesto= ${presupuesto.Vivienda || 0}</p>`;
    let selecedupres=document.getElementById("edupres");
    selecedupres.innerHTML = `<h5 class="card-title">Educaci??n</h5>
    <p class="card-text" id="gas3edu">Gasto <p>Presupuesto= ${presupuesto.Educacion || 0}</p>`;
    let selecalipres=document.getElementById("alipres");
    selecalipres.innerHTML = `<h5 class="card-title">Alimentaci??n</h5>
    <p class="card-text" id="gas3ali">Gasto <p>Presupuesto= ${presupuesto.Alimentacion || 0}</p>`;
    let selecotrpres=document.getElementById("otrpres");
    selecotrpres.innerHTML = `<h5 class="card-title">Otros</h5>
    <p class=card-text" id="gas3otr">Gasto <p>Presupuesto= ${presupuesto.Otros || 0}</p>`;
    let selecserpres=document.getElementById("serpres");
    selecserpres.innerHTML = `<h5 class="card-title">Servicios</h5>
    <p class="card-text"id="gas3ser">Gasto <p>Presupuesto= ${presupuesto.Servicios || 0}</p>`;
    let selectrapres=document.getElementById("trapres");
    selectrapres.innerHTML = `<h5 class="card-title">Transporte</h5>
    <p class="card-text" id="gas3tra">Gasto <p>Presupuesto= ${presupuesto.Transporte || 0}</p>`;
    }
insertarpres();

// sumas de filtros, actualiza los gastos 
let buttonactgas3= document.getElementById('actgas3');
buttonactgas3.addEventListener('click', (element) => insertarfiltergasto(element));

function insertarfiltergasto(element){
    element.preventDefault();
    
   let gastos3=leerdatos('listadegasto');
   console.log(gastos3);
   let vVivienda = gastos3.filter((element) => element.item == "Vivienda").reduce((a,b)=> a + Number (b.monto),0);
   let vTransporte=gastos3.filter((element)=>element.item == "Transporte").reduce((a,b)=> a + Number (b.monto),0);
   let vAlimentacion=gastos3.filter((element)=>element.item == "Alimentaci??n").reduce((a,b)=> a + Number (b.monto),0);
   let vOtros=gastos3.filter((element)=>element.item == "Otros").reduce((a,b)=> a + Number (b.monto),0);
   let vServicios=gastos3.filter((element)=>element.item =="Servicios B??sicos").reduce((a,b)=> a + Number (b.monto),0);
   let vEducacion=gastos3.filter((element)=>element.item =="Educaci??n").reduce((a,b)=> a + Number (b.monto),0);
    
   let selecvivgas=document.getElementById("gas3viv");
    selecvivgas.innerHTML = `Gasto= ${vVivienda}`;
    let selectragas=document.getElementById("gas3tra");
    selectragas.innerHTML = `Gasto= ${vTransporte}`;
    let selecaligas=document.getElementById("gas3ali");
    selecaligas.innerHTML = `Gasto= ${vAlimentacion}`;
    let selecsergas=document.getElementById("gas3ser");
    selecsergas.innerHTML = `Gasto= ${vServicios}`;
    let selecedugas=document.getElementById("gas3edu");
    selecedugas.innerHTML = `Gasto= ${vEducacion}`;
    let selecotrgas=document.getElementById("gas3otr");
    selecotrgas.innerHTML = `Gasto= ${vOtros}`;
    Swal.fire(
        'Se ha actualizado!',
        '',
        'success'
      );
    
    }
   
    


//listagastos= gastos.filter((element) => element.id != id);