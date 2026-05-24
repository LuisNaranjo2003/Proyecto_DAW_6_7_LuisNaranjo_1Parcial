const btnTema = document.getElementById("btnTema");

if (btnTema) {

    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "claro") {

        document.body.classList.add("light-mode");

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

    btnTema.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("tema", "claro");

            btnTema.innerHTML = `
                <i class="ti ti-sun"></i>
                Tema Oscuro
            `;

        } else {

            localStorage.setItem("tema", "oscuro");

            btnTema.innerHTML = `
                <i class="ti ti-moon"></i>
                Tema Claro
            `;

        }

    });

}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", (e) => {

        e.preventDefault();

        navLinks.classList.toggle("active");

    });

}

const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

    });

});

const formulario = document.getElementById("formContacto");

if (formulario) {

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === "" && correo === "" && mensaje === "") {

            alert("No hay campos llenos, intente de nuevo");
            return;

        }

        if (nombre === "") {

            alert("Ingrese su nombre");
            return;

        }

        if (correo === "") {

            alert("Ingrese su correo");
            return;

        }

        if (!regexCorreo.test(correo)) {

            alert("Ingrese un correo válido");
            return;

        }

        if (mensaje === "") {

            alert("Ingrese un mensaje");
            return;

        }

        if (mensaje.length < 10) {

            alert("El mensaje debe tener mínimo 10 caracteres");
            return;

        }

        alert("Mensaje ha sido enviado correctamente");

        formulario.reset();

    });

}

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function mostrarSlides() {

    slides.forEach((slide) => {

        slide.style.display = "none";

    });

    slideIndex++;

    if (slideIndex > slides.length) {

        slideIndex = 1;

    }

    if (slides.length > 0) {

        slides[slideIndex - 1].style.display = "block";

    }

    setTimeout(mostrarSlides, 3000);

}

if (slides.length > 0) {

    mostrarSlides();

}

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (header) {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

        } else {

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

        edge50pro: {

            nombre: "Motorola Edge 50 Pro",
            precio: "$799",
            imagen: "img/Motorola_Edge_50.jpg",
            descripcion: "Diseño premium con inteligencia artificial y carga ultra rápida.",
            especificaciones: `
                <li><strong>Pantalla:</strong> pOLED 6.7” 144Hz</li>
                <li><strong>Procesador:</strong> Snapdragon 7 Gen 3</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 50MP</li>
                <li><strong>Ultra Gran Angular:</strong> 13MP</li>
                <li><strong>Teleobjetivo:</strong> 10MP</li>
                <li><strong>Cámara Frontal:</strong> 50MP</li>
                <li><strong>Batería:</strong> 4500mAh</li>
                <li><strong>Carga:</strong> 125W TurboPower</li>
                <li><strong>Sistema:</strong> Android 14</li>
            `
        },

        honormagic6: {

            nombre: "Honor Magic 6 Pro",
            precio: "$1199",
            imagen: "img/Honor_Magic_6.jpg",
            descripcion: "Potencia premium con inteligencia artificial y cámaras avanzadas.",
            especificaciones: `
                <li><strong>Pantalla:</strong> OLED LTPO 6.8” 120Hz</li>
                <li><strong>Procesador:</strong> Snapdragon 8 Gen 3</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 50MP</li>
                <li><strong>Ultra Gran Angular:</strong> 50MP</li>
                <li><strong>Teleobjetivo:</strong> 180MP</li>
                <li><strong>Cámara Frontal:</strong> 50MP</li>
                <li><strong>Batería:</strong> 5600mAh</li>
                <li><strong>Carga:</strong> 80W</li>
                <li><strong>Sistema:</strong> MagicOS 8</li>
            `
        },

        realmegt6: {

            nombre: "Realme GT 6",
            precio: "$699",
            imagen: "img/Realme_GT_6.jpg",
            descripcion: "Smartphone gamer con gran potencia y carga ultra rápida.",
            especificaciones: `
                <li><strong>Pantalla:</strong> AMOLED 6.78” 120Hz</li>
                <li><strong>Procesador:</strong> Snapdragon 8s Gen 3</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 256GB</li>
                <li><strong>Cámara Principal:</strong> 50MP Sony</li>
                <li><strong>Ultra Gran Angular:</strong> 8MP</li>
                <li><strong>Cámara Frontal:</strong> 32MP</li>
                <li><strong>Batería:</strong> 5500mAh</li>
                <li><strong>Carga:</strong> 120W SUPERVOOC</li>
                <li><strong>Sistema:</strong> Realme UI 5</li>
            `
        },

        opporeno12: {

            nombre: "Oppo Reno 12 Pro",
            precio: "$850",
            imagen: "img/Oppo_Reno_12.jpg",
            descripcion: "Elegancia, inteligencia artificial y cámaras de alta calidad.",
            especificaciones: `
                <li><strong>Pantalla:</strong> AMOLED 6.7” 120Hz</li>
                <li><strong>Procesador:</strong> MediaTek Dimensity 7300</li>
                <li><strong>RAM:</strong> 12GB</li>
                <li><strong>Almacenamiento:</strong> 512GB</li>
                <li><strong>Cámara Principal:</strong> 50MP</li>
                <li><strong>Ultra Gran Angular:</strong> 8MP</li>
                <li><strong>Teleobjetivo:</strong> 50MP</li>
                <li><strong>Cámara Frontal:</strong> 50MP</li>
                <li><strong>Batería:</strong> 5000mAh</li>
                <li><strong>Carga:</strong> 80W SUPERVOOC</li>
                <li><strong>Sistema:</strong> ColorOS 14</li>
            `
        }

    };

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (id && productos[id]) {

        const producto = productos[id];

        const productoImg = document.getElementById("producto-img");
        const productoNombre = document.getElementById("producto-nombre");
        const productoPrecio = document.getElementById("producto-precio");
        const productoDesc = document.getElementById("producto-desc");
        const productoSpecs = document.getElementById("producto-specs");

        if (productoImg) {

            productoImg.src = producto.imagen;
            productoImg.alt = producto.nombre;

        }

        if (productoNombre) {

            productoNombre.textContent = producto.nombre;

        }

        if (productoPrecio) {

            productoPrecio.textContent = producto.precio;

        }

        if (productoDesc) {

            productoDesc.textContent = producto.descripcion;

        }

        if (productoSpecs) {

            productoSpecs.innerHTML = producto.especificaciones;

        }

    }

    const btnCarrito = document.getElementById("btnCarrito");
    const carritoCount = document.getElementById("carrito-count");

    let contador = localStorage.getItem("carritoCount") || 0;

    contador = parseInt(contador);

    if (carritoCount) {

        carritoCount.textContent = contador;

    }

    if (btnCarrito) {

        btnCarrito.addEventListener("click", () => {

            contador++;

            if (carritoCount) {

                carritoCount.textContent = contador;

            }

            localStorage.setItem("carritoCount", contador);

            alert("Producto añadido al carrito");

        });

    }

});