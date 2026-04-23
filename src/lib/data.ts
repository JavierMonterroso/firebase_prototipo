
import { Place, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Atracciones', icon: 'FerrisWheel' },
  { id: '2', name: 'Restaurantes', icon: 'Utensils' },
  { id: '3', name: 'Hostales', icon: 'Hotel' },
  { id: '4', name: 'Piscinas', icon: 'Waves' },
  { id: '5', name: 'Servicios', icon: 'Settings' },
];

export const PLACES: Place[] = [
  {
    id: 'hostal-san-martin',
    nombre: 'Hostales San Martín',
    tipo: 'hostal',
    descripcion: 'Te sentirás como en los tiempos de la colonia con las comodidades del presente.',
    imageUrl: 'https://picsum.photos/seed/sanmartin/600/400',
    detalles: {
      habitaciones: 192,
      capacidad: "2 adultos y 2 niños por habitación",
      servicios: ["Aire acondicionado", "TV cable", "Baño privado", "Agua caliente y fría", "Business Center"],
      estructura: "4 módulos de dos niveles con plaza central estilo colonial"
    },
    horario: {
      general: "24 horas",
      check_in: "15:00",
      check_out: "12:00"
    },
    ubicacion: "Complejo IRTRA Retalhuleu",
    rating: 4.9,
    reviews: 320
  },
  {
    id: 'hostal-santa-cruz',
    nombre: 'Hostal Santa Cruz',
    tipo: 'hostal',
    descripcion: 'Ambiente mediterráneo ideal para descansar y desconectarte.',
    imageUrl: 'https://picsum.photos/seed/santacruz/600/400',
    detalles: {
      habitaciones: 151,
      tipos: ["Habitaciones dobles", "Junior Suites", "Suites de 2 habitaciones"],
      servicios: ["Aire acondicionado", "Baño privado", "Secadora de cabello"],
      capacidad: "Variable según tipo de habitación"
    },
    horario: {
      general: "24 horas",
      check_in: "15:00",
      check_out: "12:00"
    },
    ubicacion: "Complejo IRTRA Retalhuleu",
    rating: 4.8,
    reviews: 280
  },
  {
    id: 'hostal-palajunoj',
    nombre: 'Hostal Palajunoj',
    tipo: 'hostal',
    descripcion: 'Inspirado en culturas del mundo con ambientación temática.',
    imageUrl: 'https://picsum.photos/seed/palajunoj/600/400',
    detalles: {
      edificios: ["Papeete", "Kalimantán", "Nakurú", "Mandalay", "Uaxactún"],
      habitaciones: 156,
      servicios: ["Ascensores", "Parqueos", "Aire acondicionado", "TV cable", "Piscinas Moana"],
      extra: "Piscinas con cascadas, tobogán y solárium"
    },
    horario: {
      general: "24 horas",
      check_in: "15:00",
      check_out: "12:00"
    },
    ubicacion: "Complejo IRTRA Retalhuleu",
    rating: 4.9,
    reviews: 350
  },
  {
    id: 'restaurante-corozos',
    nombre: 'Los Corozos',
    tipo: 'restaurante',
    descripcion: 'Comida gourmet internacional en ambiente elegante.',
    imageUrl: '/img/hero-home.jpg',
    detalles: {
      tipo_comida: "Internacional",
      servicio: ["Desayuno", "Almuerzo", "Cena"],
      ambiente: "Familiar y elegante"
    },
    horario: "Según programación",
    ubicacion: "Hostales IRTRA",
    rating: 4.8,
    reviews: 210
  },
  {
    id: 'kapa-hapa',
    nombre: 'Kapa Hapa',
    tipo: 'restaurante',
    descripcion: 'Fusión asiática con vista a piscina Moana.',
    imageUrl: 'https://picsum.photos/seed/kapa/600/400',
    detalles: {
      tipo_comida: "Asiática",
      servicio: ["Desayuno", "Almuerzo", "Cena"]
    },
    horario: "Según programación",
    ubicacion: "Hostal Palajunoj",
    rating: 4.7,
    reviews: 180
  },
  {
    id: 'gondola-salpicona',
    nombre: 'Góndola Salpicona',
    tipo: 'atraccion',
    categoria: 'Atracciones',
    descripcion: 'Atracción acuática con caídas rápidas y salpicaduras.',
    imageUrl: '/img/Gondola-Salpicona1-885x500.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "General",
      duracion: "3 minutos",
      capacidad: 14,
      tiempo_estimado: "10-25 min"
    },
    horario: "10:00 - 18:00",
    ubicacion: "Xetulul - Plaza Italia",
    rating: 4.8,
    reviews: 390
  },
  {
    id: 'jurakan',
    nombre: 'El Jurakán',
    tipo: 'atraccion',
    categoria: 'Atracciones',
    descripcion: 'Plataforma giratoria con movimientos intensos.',
    imageUrl: '/img/jurakan.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "Adultos",
      duracion: "2 minutos",
      capacidad: 20,
      tiempo_estimado: "15-30 min"
    },
    horario: "10:00 - 18:00",
    ubicacion: "Xetulul",
    rating: 4.7,
    reviews: 250
  },
  {
    id: 'estrugensen-xetulul',
    nombre: "Estrugensen",
    tipo: "atraccion",
    categoria: "Atracciones",
    descripcion: "Juego mecánico de gran altura ubicado en la Plaza Alemana que eleva y gira a gran velocidad, ofreciendo una experiencia llena de adrenalina y vistas impresionantes del parque.",
    imageUrl: '/img/estrugensen.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "Adultos",
      duracion: "2-3 minutos",
      capacidad: 20,
      tiempo_estimado: "15-30 min",
      restricciones: "Requiere altura mínima"
    },
    lo_mejor: [
      "Juego lleno de emoción",
      "Ubicado en Plaza Alemana",
      "De los más famosos"
    ],
    telefono: "7722-9450",
    precios: {
      afiliados: "Gratis con 5 personas del núcleo familiar",
      no_afiliado: {
        ninos_adulto_mayor: "Q50.00",
        adulto: "Q100.00"
      }
    },
    horario: "Jueves 10:00 - 17:00 | Viernes a domingo 10:00 - 18:00",
    ubicacion: "Xetulul, Plaza Alemana",
    rating: 4.7,
    reviews: 230
  },
  {
    id: 'avalancha-xetulul',
    nombre: "La Avalancha",
    tipo: "atraccion",
    categoria: "Atracciones",
    descripcion: "Montaña rusa temática del Polo Norte con múltiples inversiones, alta velocidad y recorridos llenos de adrenalina, considerada una de las más impactantes de Guatemala.",
    imageUrl: '/img/avalancha.jpg',
    detalles: {
      intensidad: "Muy alta",
      publico: "Adultos",
      duracion: "3-4 minutos",
      capacidad: 24,
      tiempo_estimado: "20-40 min",
      velocidad_aproximada: "88 km/h",
      inversiones: 8
    },
    lo_mejor: [
      "Una de las montañas más altas",
      "8 inversiones",
      "Temática del Polo Norte"
    ],
    telefono: "7722-9450",
    precios: {
      afiliados: "Gratis con 5 personas del núcleo familiar",
      no_afiliado: {
        ninos_adulto_mayor: "Q50.00",
        adulto: "Q100.00"
      }
    },
    horario: "Jueves 10:00 - 17:00 | Viernes a domingo 10:00 - 18:00",
    ubicacion: "Xetulul, frente a la Plaza Alemana",
    rating: 4.9,
    reviews: 410
  }
];
