class Perfumes {
    constructor(marca, descripcion, mililitros, precio, stock){
        this.marca = marca;
        this.descripcion = descripcion;
        this.mililitros = mililitros;
        this.precio = precio;
        this.stock = stock;
    }
}

const perfume1 = new Perfumes ("Azzaro", "Perfume Azzaro Wanted EDP", 100, 7000, 10);
const perfume2 = new Perfumes ("Valentino", "Valentino Born in roma EDT", 50, 4990, 8);
const perfume3 = new Perfumes ("Jean Paul Gaultier", "JPG Le Male EDT", 50, 3950, 11);
const perfume4 = new Perfumes ("Versace", "Versace Eros EDT", 100, 5990, 6);
const perfume5 = new Perfumes ("Dior", "Dior Sauvage Men EDT", 50, 5905, 9);
const perfume6 = new Perfumes ("Dior", "Dior Sauvage Men EDP", 100, 7000, 13);
const perfume7 = new Perfumes ("Jean Paul Gaultier", "Jpg Scandal Le Parf Him EDP", 100, 3590, 15);
const perfume8 = new Perfumes ("Paco Rabanne", "P.R One Millon EDT", 100, 2590, 15);
const perfume9 = new Perfumes ("Valentino", "Perfume Valentino Uomo Born in Roma Yellow EDT", 100, 3500, 5);
const perfume10 = new Perfumes ("Carolina Herrera", "Perfume Carolina Herrera 212 Vip Men EDT", 50, 3490, 9);
const perfume11 = new Perfumes ("Carolina Herrera", "Perfume Carolina Herrera Bad Boy EDT", 100, 5600, 7);

const perfumesEnStock = [perfume1, perfume2, perfume3, perfume9, perfume10, perfume11];
const perfumesRebajas = [perfume4, perfume5]
const perfumesOutlet = [perfume6, perfume7, perfume8];
const promoBlackFriday = perfumesRebajas.concat(perfumesOutlet);
alert("Bienvenido a Fragances");
alert("Primeros pasos: Seleccionar la OPC 5  || Abrir la consola || Volver a ejecutar la app para un funcionamiento correcto");

let pasosIncorrectos = true;

while(pasosIncorrectos){
    let menuPrincipal = prompt("Menu principal || OPC1: Visualizar tabla de fragancias || OPC2: Búsqueda manual || OPC3: Filtrar Precios || OPC4: Ver Promo Black Friday || OPC5 : Salir");
    if(menuPrincipal === "1"){
        console.table(perfumesEnStock);
    }else if(menuPrincipal === "2"){
        let search = prompt("Ingrese la marca del perfume");
        const resultadoEnStock = perfumesEnStock.find(producto => producto.marca === search);
        const resultadoEnRebajas = perfumesRebajas.find(producto => producto.marca === search);
        const resultadoEnPromo = promoBlackFriday.find(producto => producto.marca === search);
        if (resultadoEnPromo) {
            alert(`¡Contamos con ${search} y está en promoción!`);
        } else if (resultadoEnStock) {
            alert(`¡Contamos con ${search} en stock!`);
        } else {
            alert(`No se encontraron resultados para ${search}, lo sentimos`);
        }
    }else if(menuPrincipal === "3"){
        let filtroPrice = prompt("OPC1: De Menor $ a Mayor $ || OPC2: De Mayor $ a Menor $");
        if(filtroPrice === "1"){
            perfumesEnStock.sort((a, b) => a.precio - b.precio);
            console.table(perfumesEnStock.map(perfume => ({ Precio: perfume.precio, Marca: perfume.marca, Descripcion: perfume.descripcion, Mililitros: perfume.mililitros})));
        }else if(filtroPrice === "2"){
            perfumesEnStock.sort((a, b) => b.precio - a.precio);
            console.table(perfumesEnStock.map(perfume => ({ Precio: perfume.precio, Marca: perfume.marca, Descripcion: perfume.descripcion, Mililitros: perfume.mililitros})));
        }else{
            alert("Seleccione una opción correcta")
        }
        
    }else if(menuPrincipal === "4"){
        console.table(promoBlackFriday);
    }
    else if(menuPrincipal === "5"){
        pasosIncorrectos = false;
    }
}
