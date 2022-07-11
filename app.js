let registro = document.getElementById("registro");
registro.addEventListener("click", () => {

let ingreso = prompt("ingrese su nombre y sera registrado");
localStorage.setItem("nombre", ingreso || "usuario no existe");

let edad = Number(prompt("Ingrese su edad"));
edad < 18 ? Swal.fire({
    icon: 'error',
    title: 'Importante',
    text: 'Usted no podra realizar pagos dentro de la pagina!',
    footer: '<a href="">Por que tengo este problema?</a>'
})  : Swal.fire({
    icon: 'success',
    title: 'Usted podra realizar pagos dentro de la pagina!',
    text: 'Hasta 12 cuotas sin interes',
    footer: '<a href="">Terminos y condiciones</a>'
})
})

const productos1 = [
    {nombre: "Zapatilla Nike", talle: "Talle: " + 36, precio: "Precio: " + "$10.000"},
    {nombre: "Zapatilla Nike", talle: "Talle: " + 37, precio: "Precio: " + "$10.500" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 38, precio: "Precio: " + "$11.000" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 39, precio: "Precio: " + "$12.000" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 40, precio: "Precio: " + "$12.500" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 41, precio: "Precio: " + "$13.000" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 42, precio: "Precio: " + "$13.500" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 43, precio: "Precio: " + "$13.500" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 44, precio: "Precio: " + "$15.000" },
    {nombre: "Zapatilla Nike", talle: "Talle: " + 45, precio: "Precio: " + "$15.000" },
];

const productos2 = [
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 36, precio: "Precio: " + "$11.000" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 37, precio: "Precio: " + "$11.500" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 38, precio: "Precio: " + "$12.000" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 39, precio: "Precio: " + "$12.500" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 40, precio: "Precio: " + "$13.000" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 41, precio: "Precio: " + "$13.500" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 42, precio: "Precio: " + "$14.000" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 43, precio: "Precio: " + "$14.000" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 44, precio: "Precio: " + "$16.000" },
    {nombre: "Zapatilla Adidas", talle: "Talle: " + 45, precio: "Precio: " + "$16.000" },
];

const productos3 = [
    {nombre: "Zapatilla Puma", talle: "Talle: " + 36, precio: "Precio: " + "$8.000" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 37, precio: "Precio: " + "$8.500" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 38, precio: "Precio: " + "$8.500" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 39, precio: "Precio: " + "$9.000" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 40, precio: "Precio: " + "$9.500" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 41, precio: "Precio: " + "$10.000" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 42, precio: "Precio: " + "$10.500" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 43, precio: "Precio: " + "$10.700" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 44, precio: "Precio: " + "$12.000" },
    {nombre: "Zapatilla Puma", talle: "Talle: " + 45, precio: "Precio: " + "$12.500" },
];



let buttonUno = document.getElementById("boton1")
buttonUno.addEventListener("click", ()=>{
    
    let inputUno = document.getElementById("input1").value;
    
    switch (inputUno){
        case "36":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[0].nombre}</li>
                                    <li>${productos1[0].talle}</li>
                                    <li>${productos1[0].precio}</li>
                                </ul>`;
    break;
        case "37":
            catalogo.innerHTML =`<ul>
                                    <li>${productos1[1].nombre}</li>
                                    <li>${productos1[1].talle}</li>
                                    <li>${productos1[1].precio}</li>
                                </ul>`; ;
    break;
        case "38":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[2].nombre}</li>
                                    <li>${productos1[2].talle}</li>
                                    <li>${productos1[2].precio}</li>
                                </ul>`;;
    break;
        case "39":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[3].nombre}</li>
                                    <li>${productos1[3].talle}</li>
                                    <li>${productos1[3].precio}</li>
                                </ul>`;;
    break;
        case "40":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[4].nombre}</li>
                                    <li>${productos1[4].talle}</li>
                                    <li>${productos1[4].precio}</li>
                                </ul>`;;
    break;
        case "41":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[5].nombre}</li>
                                    <li>${productos1[5].talle}</li>
                                    <li>${productos1[5].precio}</li>
                                </ul>`;;
    break;
        case "42":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[6].nombre}</li>
                                    <li>${productos1[6].talle}</li>
                                    <li>${productos1[6].precio}</li>
                                </ul>`;;
    break;
        case "43":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[7].nombre}</li>
                                    <li>${productos1[7].talle}</li>
                                    <li>${productos1[7].precio}</li>
                                </ul>`;;
    break;
        case "44":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[8].nombre}</li>
                                    <li>${productos1[8].talle}</li>
                                    <li>${productos1[8].precio}</li>
                                </ul>`;;
    break;
        case "45":
            catalogo.innerHTML = `<ul>
                                    <li>${productos1[9].nombre}</li>
                                    <li>${productos1[9].talle}</li>
                                    <li>${productos1[9].precio}</li>
                                </ul>`;;
    break;
    
        default:
            catalogo.innerHTML = "<p>No disponemos este talle</p>"
        break;
    }
    } 
);

let boton4 = document.getElementById("boton4");

boton4.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Producto añadido correctamente'
    });
});


let buttonDos = document.getElementById("boton2")
buttonDos.addEventListener("click", ()=>{
    
    let inputDos = document.getElementById("input2").value;
    
    switch (inputDos){
        case "36":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[0].nombre}</li>
                                    <li>${productos2[0].talle}</li>
                                    <li>${productos2[0].precio}</li>
                                </ul>`;
    break;
        case "37":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[1].nombre}</li>
                                    <li>${productos2[1].talle}</li>
                                    <li>${productos2[1].precio}</li>
                                </ul>`;;
    break;
        case "38":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[2].nombre}</li>
                                    <li>${productos2[2].talle}</li>
                                    <li>${productos2[2].precio}</li>
                                </ul>`;;
    break;
        case "39":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[3].nombre}</li>
                                    <li>${productos2[3].talle}</li>
                                    <li>${productos2[3].precio}</li>
                                </ul>`;;
    break;
        case "40":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[4].nombre}</li>
                                    <li>${productos2[4].talle}</li>
                                    <li>${productos2[4].precio}</li>
                                </ul>`;;
    break;
        case "41":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[5].nombre}</li>
                                    <li>${productos2[5].talle}</li>
                                    <li>${productos2[5].precio}</li>
                                </ul>`;;
    break;
        case "42":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[6].nombre}</li>
                                    <li>${productos2[6].talle}</li>
                                    <li>${productos2[6].precio}</li>
                                </ul>`;;
    break;
        case "43":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[7].nombre}</li>
                                    <li>${productos2[7].talle}</li>
                                    <li>${productos2[7].precio}</li>
                                </ul>`;;
    break;
        case "44":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[8].nombre}</li>
                                    <li>${productos2[8].talle}</li>
                                    <li>${productos2[8].precio}</li>
                                </ul>`;;
    break;
        case "45":
            catalogo2.innerHTML = `<ul>
                                    <li>${productos2[9].nombre}</li>
                                    <li>${productos2[9].talle}</li>
                                    <li>${productos2[9].precio}</li>
                                </ul>`;;
    break;
    
        default:
            catalogo2.innerHTML = "<p>No disponemos este talle</p>"
        break;
    }
    } 
);

let boton5 = document.getElementById("boton5");

boton5.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Producto añadido correctamente'
    });
});


let buttonTres = document.getElementById("boton3")
buttonTres.addEventListener("click", ()=>{
    
    let inputTres = document.getElementById("input3").value;
    
    switch (inputTres){
        case "36":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[0].nombre}</li>
                                    <li>${productos3[0].talle}</li>
                                    <li>${productos3[0].precio}</li>
                                </ul>`;
    break;
        case "37":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[1].nombre}</li>
                                    <li>${productos3[1].talle}</li>
                                    <li>${productos3[1].precio}</li>
                                </ul>`;;
    break;
        case "38":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos1[2].nombre}</li>
                                    <li>${productos1[2].talle}</li>
                                    <li>${productos1[2].precio}</li>
                                </ul>`;;
    break;
        case "39":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[3].nombre}</li>
                                    <li>${productos3[3].talle}</li>
                                    <li>${productos3[3].precio}</li>
                                </ul>`;;
    break;
        case "40":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos1[4].nombre}</li>
                                    <li>${productos1[4].talle}</li>
                                    <li>${productos1[4].precio}</li>
                                </ul>`;;
    break;
        case "41":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[5].nombre}</li>
                                    <li>${productos3[5].talle}</li>
                                    <li>${productos3[5].precio}</li>
                                </ul>`;;
    break;
        case "42":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[6].nombre}</li>
                                    <li>${productos3[6].talle}</li>
                                    <li>${productos3[6].precio}</li>
                                </ul>`;;
    break;
        case "43":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[7].nombre}</li>
                                    <li>${productos3[7].talle}</li>
                                    <li>${productos3[7].precio}</li>
                                </ul>`;;
    break;
        case "44":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[8].nombre}</li>
                                    <li>${productos3[8].talle}</li>
                                    <li>${productos3[8].precio}</li>
                                </ul>`;;
    break;
        case "45":
            catalogo3.innerHTML = `<ul>
                                    <li>${productos3[9].nombre}</li>
                                    <li>${productos3[9].talle}</li>
                                    <li>${productos3[9].precio}</li>
                                </ul>`;;
    break;
    
        default:
            catalogo3.innerHTML = "<p>No disponemos este talle</p>"
        break;
    }
    } 
);

let boton6 = document.getElementById("boton6");

boton6.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: 'Producto añadido correctamente'
    });
});



