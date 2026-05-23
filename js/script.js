const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        btnTema.innerHTML = `
            <i class="ti ti-sun"></i>
            Tema Oscuro
        `;

    } else {

        btnTema.innerHTML = `
            <i class="ti ti-moon"></i>
            Tema Claro
        `;
    }

});

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

const formulario = document.getElementById("formularioContacto");

if(formulario){

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        const correo = document.getElementById("correo").value.trim();

        const mensaje = document.getElementById("mensaje").value.trim();

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(nombre === ""){

            alert("Ingrese su nombre");

            return;
        }

        if(!regexCorreo.test(correo)){

            alert("Ingrese un correo válido");

            return;
        }

        if(mensaje.length < 10){

            alert("El mensaje debe tener mínimo 10 caracteres");

            return;
        }

        alert("Formulario enviado correctamente");

        formulario.reset();

    });

}

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function mostrarSlides(){

    slides.forEach((slide) => {

        slide.style.display = "none";

    });

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;

    }

    if(slides.length > 0){

        slides[slideIndex - 1].style.display = "block";

    }

    setTimeout(mostrarSlides, 3000);

}

mostrarSlides();

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

    }else{

        header.style.boxShadow = "none";

    }

});

const productos = {

    iphone16pro: {
        nombre: "iPhone 16 Pro",
        precio: "$1399",
        imagen: "img/iphone16pro.jpg",
        descripcion: "Chip A18 Pro, pantalla OLED 120Hz y cámara profesional."
    },

    iphone15pro: {
        nombre: "iPhone 15 Pro",
        precio: "$1199",
        imagen: "img/iphone15pro.jpg",
        descripcion: "Titanio aeroespacial y potente procesador A17 Pro."
    },

    s24ultra: {
        nombre: "Samsung Galaxy S24 Ultra",
        precio: "$1299",
        imagen: "img/s24ultra.jpg",
        descripcion: "Galaxy AI, cámara 200MP y S-Pen integrado."
    },

    s23ultra: {
        nombre: "Samsung Galaxy S23 Ultra",
        precio: "$1099",
        imagen: "img/s23ultra.jpg",
        descripcion: "Pantalla AMOLED 120Hz y excelente rendimiento."
    },

    xiaomi14ultra: {
        nombre: "Xiaomi 14 Ultra",
        precio: "$1150",
        imagen: "img/xiaomi14ultra.jpg",
        descripcion: "Cámara Leica y Snapdragon 8 Gen 3."
    },

    pocox6pro: {
        nombre: "Poco X6 Pro",
        precio: "$480",
        imagen: "img/pocox6pro.jpg",
        descripcion: "Gaming potente con Dimensity 8300 Ultra."
    },

    honormagic6: {
        nombre: "Honor Magic 6",
        precio: "$620",
        imagen: "img/honormagic6.jpg",
        descripcion: "Diseño premium y batería de larga duración."
    },

    motoedge50: {
        nombre: "Moto Edge 50",
        precio: "$690",
        imagen: "img/motoedge50.jpg",
        descripcion: "Motorola premium con pantalla OLED curva."
    },

    realmegt6: {
        nombre: "Realme GT 6",
        precio: "$740",
        imagen: "img/realmegt6.jpg",
        descripcion: "Gran potencia y carga ultra rápida."
    },

    oppofindx7: {
        nombre: "Oppo Find X7",
        precio: "$980",
        imagen: "img/oppofindx7.jpg",
        descripcion: "Cámara Hasselblad y diseño elegante."
    }

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

if(id && productos[id]){

    document.getElementById("producto-img").src = productos[id].imagen;

    document.getElementById("producto-nombre").textContent = productos[id].nombre;

    document.getElementById("producto-precio").textContent = productos[id].precio;

    document.getElementById("producto-desc").textContent = productos[id].descripcion;

}

const btnCarrito = document.getElementById("btnCarrito");

if(btnCarrito){

    btnCarrito.addEventListener("click", () => {

        alert("Producto añadido al carrito");

    });

}