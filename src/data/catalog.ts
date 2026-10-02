export const categories = [
  "Sillas",
  "Mesas",
  "Iluminación",
  "Archivo",
  "Escritorios",
  "Recepción",
] as const;

export const tags = ["Nuevo", "Tendencia", "Destacados", "Selección"] as const;

export type Category = (typeof categories)[number];
export type Tag = (typeof tags)[number];

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: Category;
  tags: Tag[];
  image: string;
  summary: string;
};

export const products: Product[] = [
  {
    slug: "silla-acusta-30",
    name: "Silla Acusta 30",
    price: 35,
    category: "Sillas",
    tags: ["Nuevo", "Selección"],
    image: "/images/chair-mesh.jpg",
    summary: "Silla ejecutiva de malla, para jornadas largas en el puesto de trabajo.",
  },
  {
    slug: "escritorio-recto-og",
    name: "Escritorio recto OG",
    price: 76.5,
    compareAt: 99,
    category: "Escritorios",
    tags: ["Destacados", "Selección"],
    image: "/images/desk-white.jpg",
    summary: "Cubierta recta de la línea OG. El color del catálogo no cambia el precio.",
  },
  {
    slug: "escritorio-en-l-ogl",
    name: "Escritorio en L OGL",
    price: 70.8,
    category: "Escritorios",
    tags: ["Tendencia"],
    image: "/images/desk-wood.jpg",
    summary: "Estación en L para quien necesita más superficie sin perder el pasillo.",
  },
  {
    slug: "estacion-4-personas",
    name: "Estación 4 personas",
    price: 73.42,
    compareAt: 97,
    category: "Escritorios",
    tags: ["Destacados"],
    image: "/images/workstations.jpg",
    summary: "Módulo para cuatro personas. Ordena el puesto y oculta el cableado.",
  },
  {
    slug: "silla-lake-20",
    name: "Silla Lake 20",
    price: 59.99,
    category: "Sillas",
    tags: ["Nuevo", "Tendencia"],
    image: "/images/meeting.jpg",
    summary: "Silla ejecutiva de la línea Lake, con respaldo alto y base de aluminio.",
  },
  {
    slug: "mueble-bajo",
    name: "Mueble bajo",
    price: 94.21,
    category: "Archivo",
    tags: ["Selección"],
    image: "/images/desks-red.jpg",
    summary: "Mueble bajo en el mismo acabado del escritorio, para archivo a la mano.",
  },
  {
    slug: "silla-arezzo",
    name: "Silla Arezzo",
    price: 83.14,
    category: "Sillas",
    tags: ["Destacados"],
    image: "/images/conference.jpg",
    summary: "Silla operativa Arezzo para salas y puestos de uso continuo.",
  },
  {
    slug: "silla-staff",
    name: "Silla Staff",
    price: 98,
    compareAt: 149,
    category: "Sillas",
    tags: ["Nuevo", "Tendencia"],
    image: "/images/chair.jpg",
    summary: "Silla Staff para áreas operativas. Garantía de 5 años contra defectos de fabricación.",
  },
  {
    slug: "estacion-individual",
    name: "Estación individual",
    price: 79.21,
    category: "Escritorios",
    tags: ["Selección"],
    image: "/images/desks-green.jpg",
    summary: "Puesto individual con panel. Se fabrica en Aguascalientes.",
  },
  {
    slug: "escritorio-oce",
    name: "Escritorio OCE",
    price: 55.66,
    compareAt: 99,
    category: "Escritorios",
    tags: ["Tendencia"],
    image: "/images/office-glass.jpg",
    summary: "Escritorio ejecutivo de la línea OCE.",
  },
  {
    slug: "archivero",
    name: "Archivero",
    price: 89.99,
    category: "Archivo",
    tags: ["Destacados"],
    image: "/images/desks-red.jpg",
    summary: "Archivero en el acabado de la estación.",
  },
  {
    slug: "archivero-metalico",
    name: "Archivero metálico",
    price: 92.3,
    compareAt: 123,
    category: "Archivo",
    tags: ["Selección"],
    image: "/images/hero-2.jpg",
    summary: "Archivo metálico para áreas de alto uso.",
  },
  {
    slug: "gabinete",
    name: "Gabinete",
    price: 66.44,
    category: "Archivo",
    tags: ["Tendencia"],
    image: "/images/reception.jpg",
    summary: "Gabinete con puertas, en la misma línea del escritorio.",
  },
  {
    slug: "silla-sling-negro",
    name: "Silla Sling Negro",
    price: 89.88,
    compareAt: 120,
    category: "Sillas",
    tags: ["Destacados"],
    image: "/images/chair-mesh.jpg",
    summary: "Silla Sling en negro, para puestos operativos.",
  },
  {
    slug: "silla-acusta-10",
    name: "Silla Acusta 10",
    price: 96.45,
    category: "Sillas",
    tags: ["Selección"],
    image: "/images/meeting.jpg",
    summary: "Silla ejecutiva Acusta 10.",
  },
  {
    slug: "librero",
    name: "Librero",
    price: 62.37,
    category: "Archivo",
    tags: ["Tendencia"],
    image: "/images/office-glass.jpg",
    summary: "Librero a la medida del espacio.",
  },
  {
    slug: "estacion-con-cajones",
    name: "Estación con cajones",
    price: 59.99,
    compareAt: 99,
    category: "Escritorios",
    tags: ["Destacados"],
    image: "/images/desk-wood.jpg",
    summary: "Estación individual con cajonera integrada.",
  },
  {
    slug: "silla-operativa",
    name: "Silla operativa",
    price: 70.8,
    category: "Sillas",
    tags: ["Tendencia"],
    image: "/images/workstations.jpg",
    summary: "Silla operativa para call center, aula o piso de trabajo.",
  },
  {
    slug: "mesa-de-juntas",
    name: "Mesa de juntas",
    price: 83.14,
    compareAt: 168,
    category: "Mesas",
    tags: ["Destacados", "Selección"],
    image: "/images/conference.jpg",
    summary: "Mesa de juntas fabricada a la medida de la sala.",
  },
  {
    slug: "escritorio-ocg",
    name: "Escritorio OCG",
    price: 88,
    category: "Escritorios",
    tags: ["Selección"],
    image: "/images/hero-1.jpg",
    summary: "Escritorio ejecutivo de la línea OCG.",
  },
  {
    slug: "mesa-auxiliar",
    name: "Mesa auxiliar",
    price: 42,
    category: "Mesas",
    tags: ["Tendencia"],
    image: "/images/desk-white.jpg",
    summary: "Mesa auxiliar para sala o recepción.",
  },
  {
    slug: "recepcion",
    name: "Recepción",
    price: 120,
    category: "Recepción",
    tags: ["Destacados"],
    image: "/images/reception.jpg",
    summary: "Mostrador de recepción fabricado para el acceso del corporativo.",
  },
];

export function formatPrice(value: number) {
  return value.toFixed(2);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const posts = [
  {
    slug: "como-elegir-silla-ergonomica",
    title: "Cómo elegir una silla ergonómica",
    excerpt:
      "Respaldo, asiento y base: lo que revisamos en el taller antes de proponer una silla para ocho horas de uso.",
    image: "/images/chair-mesh.jpg",
  },
  {
    slug: "que-exige-la-ley-silla",
    title: "Qué exige la ley silla",
    excerpt:
      "Una guía breve para oficinas en México que van a equipar puestos de trabajo sentados.",
    image: "/images/workstations.jpg",
  },
  {
    slug: "equipar-un-aula-o-call-center",
    title: "Equipar un aula o un call center",
    excerpt:
      "Estaciones repetibles, sillas operativas y archivo en el mismo acabado, fabricados en Aguascalientes.",
    image: "/images/desks-green.jpg",
  },
];
