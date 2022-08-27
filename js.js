
// function verificarMarca(){
//     if (document.getElementById("selectMarca").value =="volkswagen"){
//         marca = (document.getElementById("contVolkswagen").style.display = "block");
//         marca = "volkswagen"
//         console.log(marca)
//     }else if (document.getElementById("selectMarca").value =="nissan"){
//         marca = (document.getElementById("contNissan").style.display = "block");
//         marca = "nissan"
//         console.log(marca)
//     }else if (document.getElementById("selectMarca").value =="ford"){
//         marca = (document.getElementById("contFord").style.display = "block");
//         marca = "ford"
//         console.log(marca)
//     }
// }
let marca =""

btn_marca.addEventListener("click",function(){
    if (document.getElementById("selectMarca").value =="volkswagen"){
        marca = (document.getElementById("contVolkswagen").style.display = "block");
        marca = "volkswagen"
        console.log(marca)
    }else if (document.getElementById("selectMarca").value =="nissan"){
        marca = (document.getElementById("contNissan").style.display = "block");
        marca = "nissan"
        console.log(marca)
    }else if (document.getElementById("selectMarca").value =="ford"){
        marca = (document.getElementById("contFord").style.display = "block");
        marca = "ford"
        console.log(marca)
    }

})


let modelo="";
function verificarModelo(){
    if (document.getElementById("selectVolkswagen").value==="gol"){
        modelo="gol"
        console.log(modelo)
    }else if (document.getElementById("selectVolkswagen").value==="amarok"){
        modelo="amarok"
        console.log(modelo)
    }else if (document.getElementById("selectVolkswagen").value==="polo"){
        modelo="polo"
        console.log(modelo)

    }else if (document.getElementById("selectNissan").value==="sentra"){
        modelo="sentra"
        console.log(modelo)
    }else if (document.getElementById("selectNissan").value==="versa"){
        modelo="versa"
        console.log(modelo)
    }else if (document.getElementById("selectNissan").value==="kicks"){
        modelo="kicks"
        console.log(modelo)

    }else if (document.getElementById("selectFord").value==="ka"){
        modelo="ka"
        console.log(modelo)
    }else if (document.getElementById("selectFord").value==="koga"){
        modelo="koga"
        console.log(modelo)
    }else if (document.getElementById("selectFord").value==="mondeo"){
        modelo="mondeo"
        console.log(modelo)
    }
}


function verificarAnio(){
    let anio = document.querySelector("#anio").value
    console.log(anio)
}


// Validar checkboxs
function check(){
    
    if (document.getElementById("radio_planA").checked == true){
        fetch("./data.json")
            .then( (res) => res.json())
            .then( (data) => {
                let element=""
            data.planA.forEach((planA) => {
                element += 
                `   <div class ="planess">
                        <p>Precio : $ ${planA.precio}</p>
                        <p>Descripcion :  ${planA.descripcion}</p>
                    </div>`
            });
            document.getElementById("cuadroPlanes").innerHTML=element;
    })
    
    }
    else if(document.getElementById("radio_planB").checked == true){
        fetch("./data.json")
            .then( (res) => res.json())
            .then( (data) => {
                let element=""
            data.planB.forEach((planB) => {
                element += 
                `   <div class ="planess">
                        <p>Precio : $ ${planB.precio}</p>
                        <p>Descripcion :  ${planB.descripcion}</p>
                    </div>`
            });
            document.getElementById("cuadroPlanes").innerHTML=element;
    })

    }
    else if(document.getElementById("radio_planC").checked == true){
        fetch("./data.json")
            .then( (res) => res.json())
            .then( (data) => {
                let element=""
            data.planC.forEach((planC) => {
                element += 
                `   <div class ="planess">
                        <p>Precio : $ ${planC.precio}</p>
                        <p>Descripcion :  ${planC.descripcion}</p>
                    </div>`
            });
            document.getElementById("cuadroPlanes").innerHTML=element;
    })
    }
}

cotizacion.addEventListener("click",function(){
    class CotizacionAuto {
        constructor(marca, modelo,anio) {
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
        }
    }
    const personax = new CotizacionAuto(
        marca.value,modelo,anio.value
        );
    console.log(personax);
})




