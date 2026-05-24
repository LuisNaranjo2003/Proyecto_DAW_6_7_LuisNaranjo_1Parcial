const btnTema = document.getElementById("btnTema");

if(btnTema){

    btnTema.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            btnTema.innerHTML = `
                <i class="ti ti-sun"></i>
                Tema Oscuro
            `;

        }else{

            btnTema.innerHTML = `
                <i class="ti ti-moon"></i>
                Tema Claro
            `;
        }

    });

}

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

if(slides.length > 0){

    mostrarSlides();

}

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(header){

        if(window.scrollY > 50){

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

        }else{

            header.style.boxShadow = "none";

        }

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const productos = {

        iphone16pro: {

            nombre: "iPhone 16 Pro",

            precio: "$1399",

            imagen: "img/iphoen16.jpg",

            descripcion: "El nuevo iPhone 16 Pro ofrece máxima potencia con Apple Intelligence y cámaras profesionales.",

            especificaciones: `
                <li><strong>Pantalla:</strong> OLED Super Retina XDR 6.3” 120Hz</li>
                <li><strong>Procesador:</strong> Apple A18 Pro</li>
                <li><strong>RAM:</strong> 8GB</li>
                <li><strong>Almacenamiento:</strong> 256GB</li>
                <li><strong>Cámara Principal:</strong> 48MP Fusion</li>
                <li><strong>Ultra Gran Angular:</strong> 48MP</li>
                <li><strong>Teleobjetivo:</strong> 12MP 5X</li>
                <li><strong>Cámara Frontal:</strong> 12MP TrueDepth</li>
                <li><strong>Batería:</strong> 3582mAh</li>
                <li><strong>Sistema:</strong> iOS 18</li>
                <li><strong>Conectividad:</strong> 5G, WiFi 7, USB-C</li>
            `

        },

        iphone15pro: {

            nombre: "iPhone 15 Pro",

            precio: "$1199",

            imagen: "img/iphone15.jpg",

            descripcion: "Diseño de titanio y rendimiento extremo gracias al chip A17 Pro.",

            especificaciones: `
                <li><strong>Pantalla:</strong> OLED Super Retina XDR 6.1”</li>
                <li><strong>Procesador:</strong> Apple A17 Pro</li>
                <li><strong>RAM:</strong> 8GB</li>
                <li><strong>Almacenamiento:</strong> 256GB</li>
                <li><strong>Cámara Principal:</strong> 48MP</li>
                <li><strong>Ultra Gran Angular:</strong> 12MP</li>
                <li><strong>Teleobjetivo:</strong> 12MP</li>
                <li><strong>Cámara Frontal:</strong> 12MP</li>
                <li><strong>Batería:</strong> 3274mAh</li>
                <li><strong>Sistema:</strong> iOS 18</li>
            `

        },

        s24ultra: {

            nombre: "Samsung Galaxy S24 Ultra",

            precio: "$1299",

            imagen: "img/samsungs24.jpg",

            descripcion: "El Galaxy más avanzado con Galaxy AI y cámara de 200MP.",

            especificaciones: `
                <li><strong>Pantalla:</strong> Dynamic AMOLED 2X 6.8”</li>
                <li><strong>Procesador:</strong> Snapdragon 8 Gen 3</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 200MP</li>
                <li><strong>Ultra Gran Angular:</strong> 12MP</li>
                <li><strong>Teleobjetivo:</strong> 50MP 5X</li>
                <li><strong>Teleobjetivo 2:</strong> 10MP 3X</li>
                <li><strong>Cámara Frontal:</strong> 12MP</li>
                <li><strong>Batería:</strong> 5000mAh</li>
                <li><strong>Sistema:</strong> Android 14</li>
                <li><strong>Extras:</strong> S-Pen Integrado</li>
            `

        },

        xiaomi14ultra: {

            nombre: "Xiaomi 14 Ultra",

            precio: "$1150",

            imagen: "img/xiaomi14ultra.jpg",

            descripcion: "Fotografía Leica profesional y rendimiento premium.",

            especificaciones: `
                <li><strong>Pantalla:</strong> AMOLED LTPO 6.73”</li>
                <li><strong>Procesador:</strong> Snapdragon 8 Gen 3</li>
                <li><strong>RAM:</strong> 16GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 50MP Leica</li>
                <li><strong>Ultra Gran Angular:</strong> 50MP</li>
                <li><strong>Teleobjetivo:</strong> 50MP</li>
                <li><strong>Periscopio:</strong> 50MP</li>
                <li><strong>Cámara Frontal:</strong> 32MP</li>
                <li><strong>Batería:</strong> 5300mAh</li>
                <li><strong>Sistema:</strong> HyperOS</li>
            `

        },

        pocof5pro: {

            nombre: "Poco F5 Pro",

            precio: "$620",

            imagen: "img/xiaomipocof5.jpg",

            descripcion: "Potencia gamer con Snapdragon 8+ Gen 1 y pantalla WQHD+.",

            especificaciones: `
                <li><strong>Pantalla:</strong> AMOLED WQHD+ 6.67” 120Hz</li>
                <li><strong>Procesador:</strong> Snapdragon 8+ Gen 1</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 256GB</li>
                <li><strong>Cámara Principal:</strong> 64MP</li>
                <li><strong>Ultra Gran Angular:</strong> 8MP</li>
                <li><strong>Macro:</strong> 2MP</li>
                <li><strong>Cámara Frontal:</strong> 16MP</li>
                <li><strong>Batería:</strong> 5160mAh</li>
                <li><strong>Carga:</strong> 67W</li>
                <li><strong>Sistema:</strong> HyperOS</li>
            `

        },

        honormagic6: {

            nombre: "Honor Magic 6",

            precio: "$620",

            imagen: "img/Honor_Magic_6.jpg",

            descripcion: "Elegancia premium con batería gigante y cámaras avanzadas.",

            especificaciones: `
                <li><strong>Pantalla:</strong> OLED LTPO 6.78”</li>
                <li><strong>Procesador:</strong> Snapdragon 8 Gen 3</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 50MP</li>
                <li><strong>Ultra Gran Angular:</strong> 50MP</li>
                <li><strong>Teleobjetivo:</strong> 180MP</li>
                <li><strong>Cámara Frontal:</strong> 50MP</li>
                <li><strong>Batería:</strong> 5600mAh</li>
                <li><strong>Sistema:</strong> MagicOS 8</li>
            `

        },

        motoedge50: {

            nombre: "Motorola Edge 50",

            precio: "$690",

            imagen: "img/Motorola_Edge_50.jpg",

            descripcion: "Pantalla curva premium y experiencia Android fluida.",

            especificaciones: `
                <li><strong>Pantalla:</strong> pOLED 6.7” 144Hz</li>
                <li><strong>Procesador:</strong> Snapdragon 7 Gen 3</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 256GB</li>
                <li><strong>Cámara Principal:</strong> 50MP Sony LYTIA</li>
                <li><strong>Ultra Gran Angular:</strong> 13MP</li>
                <li><strong>Teleobjetivo:</strong> 10MP</li>
                <li><strong>Cámara Frontal:</strong> 32MP</li>
                <li><strong>Batería:</strong> 5000mAh</li>
                <li><strong>Sistema:</strong> Android 14</li>
            `

        },

        realmegt6: {

            nombre: "Realme GT 6",

            precio: "$740",

            imagen: "img/Realme_GT_6.jpg",

            descripcion: "Rendimiento extremo con carga ultra rápida de 120W.",

            especificaciones: `
                <li><strong>Pantalla:</strong> AMOLED 6.78” 120Hz</li>
                <li><strong>Procesador:</strong> Snapdragon 8s Gen 3</li>
                <li><strong>RAM:</strong> 16GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 50MP Sony</li>
                <li><strong>Ultra Gran Angular:</strong> 8MP</li>
                <li><strong>Teleobjetivo:</strong> 50MP</li>
                <li><strong>Cámara Frontal:</strong> 32MP</li>
                <li><strong>Batería:</strong> 5500mAh</li>
                <li><strong>Carga:</strong> 120W SUPERVOOC</li>
            `

        },

        opporeno12: {

            nombre: "Oppo Reno 12",

            precio: "$620",

            imagen: "img/Oppo_Reno_12.jpg",

            descripcion: "Diseño moderno con IA avanzada y excelente cámara selfie.",

            especificaciones: `
                <li><strong>Pantalla:</strong> AMOLED 6.7” 120Hz</li>
                <li><strong>Procesador:</strong> Dimensity 7300</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 256GB</li>
                <li><strong>Cámara Principal:</strong> 50MP Sony</li>
                <li><strong>Ultra Gran Angular:</strong> 8MP</li>
                <li><strong>Macro:</strong> 2MP</li>
                <li><strong>Cámara Frontal:</strong> 32MP</li>
                <li><strong>Batería:</strong> 5000mAh</li>
                <li><strong>Carga:</strong> 80W SUPERVOOC</li>
                <li><strong>Sistema:</strong> ColorOS 14</li>
            `

        }

    };

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if(id && productos[id]){

        const producto = productos[id];

        document.getElementById("producto-img").src = producto.imagen;

        document.getElementById("producto-nombre").textContent = producto.nombre;

        document.getElementById("producto-precio").textContent = producto.precio;

        document.getElementById("producto-desc").textContent = producto.descripcion;

        const specs = document.getElementById("producto-specs");

        if(specs){

            specs.innerHTML = producto.especificaciones;

        }

    }

    const btnCarrito = document.getElementById("btnCarrito");

    if(btnCarrito){

        btnCarrito.addEventListener("click", () => {

            alert("Producto añadido al carrito");

        });

    }

});