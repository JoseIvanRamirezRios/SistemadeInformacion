document.addEventListener("DOMContentLoaded", function() {
    // Array de productos con sus detalles, incluyendo precios y URL de imágenes
    var productos = [
        { nombre: "Extintor de agua", tipo: "Tipo A", precio: 150.00, imagen: "Images/Extintor_aguapng.png" },
        { nombre: "Extintor de espuma ", tipo: "Tipo B", precio: 120.00, imagen: "Images/Espuma.png" },
        { nombre: "Extintor polvo quimico seco", tipo: "Tipo C", precio: 175.00, imagen: "Images/PQS.png" },
        { nombre: "Extintor de CO2", tipo: "Tipo D", precio: 180.00, imagen: "Images/Co2.png" },
        { nombre: "Extintor Quimico Humedo", tipo: "Tipo E", precio: 200.00, imagen: "Images/QH.png" },

        // Añade más productos según sea necesario
    ];

    // Generar productos
    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];

        var productoHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Tipo: ${producto.tipo}</p>
                        <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;

        // Agregar producto al DOM
        document.querySelector(".row").innerHTML += productoHTML;
    }
});
