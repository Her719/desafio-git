class Producto {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
  getPrice() {
    return this.price;
  }
}

class ProductoAlimenticio extends Producto {
  fechaCaducidad: Date;
  constructor(name: string, price: number, fechaCaducidad: string) {
    super(name, price);
    const fecha = new Date(fechaCaducidad); // Convertir el string a Date
    this.fechaCaducidad = fecha; // Guardar el objeto Date
  }

  checkCaducidad(): boolean {
    const hoy = new Date();
    const productoVencido = hoy > this.fechaCaducidad;
    return productoVencido;
  }
}

class ProductoCongelado extends ProductoAlimenticio {
  temperaturaRecomendada: number;
  private margen: number;
  constructor(
    name: string,
    price: number,
    fechaCaducidad: string,
    temperaturaRecomendada: number,
    margen: number = 5
  ) {
    super(name, price, fechaCaducidad);
    this.margen = margen;
    this.temperaturaRecomendada = temperaturaRecomendada;
  }
  estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
    const diferencia = Math.abs(
      temperaturaActual - this.temperaturaRecomendada
    );
    return diferencia <= this.margen;
  }
}

// Creación de la instancia
const helado = new ProductoCongelado(
  "Helado de Vainilla",
  2.99,
  "2024-12-31",
  -18
);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente =
  helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log(
  "¿Está almacenado correctamente?:",
  estaAlmacenadoCorrectamente ? "Sí" : "No"
);

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log(
  "Temperatura Recomendada:",
  helado.temperaturaRecomendada,
  "grados"
);

// const leche = new Producto("Sancor", 2.8);
// const yogurt = new ProductoAlimenticio("Ilolay", 3.0, "2022-12-25");
// yogurt.checkCaducidad();
// console.log(leche);
// console.log(yogurt, "Este producto esta vencido? ", yogurt.checkCaducidad());
