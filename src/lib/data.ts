
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
    imageUrl: '/img/san-martin.jpg',
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
    imageUrl: '/img/santa-cruz.jpg',
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
    imageUrl: '/img/palajunoj.jpg',
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
    imageUrl: '/img/corozos.jpg',
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
    imageUrl: '/img/kapa-hapa.jpg',
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
    categoria: 'agua',
    descripcion: 'Atracción acuática con caídas rápidas y salpicaduras.',
    imageUrl: '/img/Gondola-Salpicona1-885x500.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "General",
      duracion: "3 minutos",
      capacidad_por_turno: 14,
      tiempo_estimado: "15-25 min",
      personas_en_fila: 42
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
    categoria: 'extrema',
    descripcion: 'Plataforma giratoria con movimientos intensos.',
    imageUrl: '/img/jurakan.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "Adultos",
      duracion: "2 minutos",
      capacidad_por_turno: 20,
      tiempo_estimado: "20-35 min",
      personas_en_fila: 85
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
    categoria: "extrema",
    descripcion: "Juego mecánico de gran altura ubicado en la Plaza Alemana que eleva y gira a gran velocidad.",
    imageUrl: '/img/estrugensen.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "Adultos",
      duracion: "3 minutos",
      capacidad_por_turno: 20,
      tiempo_estimado: "10-20 min",
      personas_en_fila: 15,
      restricciones: "Requiere altura mínima"
    },
    lo_mejor: ["Juego lleno de emoción", "Ubicado en Plaza Alemana"],
    precios: {
      afiliados: "Gratis con 5 personas del núcleo familiar",
      no_afiliado: { ninos_adulto_mayor: "Q50.00", adulto: "Q100.00" }
    },
    horario: "Viernes a domingo 10:00 - 18:00",
    ubicacion: "Xetulul, Plaza Alemana",
    rating: 4.7,
    reviews: 230
  },
  {
    id: 'avalancha-xetulul',
    nombre: "La Avalancha",
    tipo: "atraccion",
    categoria: "extrema",
    descripcion: "Montaña rusa temática del Polo Norte con múltiples inversiones.",
    imageUrl: '/img/avalancha.jpg',
    detalles: {
      intensidad: "Muy alta",
      publico: "Adultos",
      duracion: "4 minutos",
      capacidad_por_turno: 24,
      tiempo_estimado: "45-60 min",
      personas_en_fila: 184,
      velocidad_aproximada: "88 km/h",
      inversiones: 8
    },
    lo_mejor: ["8 inversiones", "Temática del Polo Norte"],
    precios: {
      afiliados: "Gratis con 5 personas del núcleo familiar",
      no_afiliado: { ninos_adulto_mayor: "Q50.00", adulto: "Q100.00" }
    },
    horario: "Viernes a domingo 10:00 - 18:00",
    ubicacion: "Xetulul, frente a la Plaza Alemana",
    rating: 4.9,
    reviews: 410
  },
  {
    id: 'vuelta-del-jaguar',
    nombre: 'La Vuelta del Jaguar',
    tipo: 'piscina',
    categoria: 'extrema',
    descripcion: 'Tobogán extremo con cápsula de caída vertical.',
    imageUrl: '/img/vuelta-jaguar.jpg',
    detalles: {
      intensidad: "Alta",
      publico: "Adultos",
      duracion: "2 minutos",
      capacidad_por_turno: 1,
      personas_en_fila: 12,
      tipo: "Tobogán extremo"
    },
    horario: "Jueves a domingo 9:00 - 17:00",
    ubicacion: "Xocomil - Área nueva",
    rating: 4.9,
    reviews: 410
  },
  {
    id: 'caracol-xocomil',
    nombre: 'El Caracol',
    tipo: 'piscina',
    categoria: 'adrenalina',
    descripcion: 'Tobogán en espiral que desemboca en piscina central.',
    imageUrl: '/img/caracol-xocomil.jpg',
    detalles: {
      intensidad: "Media-Alta",
      publico: "General",
      capacidad_por_turno: 2,
      personas_en_fila: 28,
      duracion: "2 minutos"
    },
    horario: "Jueves a domingo 9:00 - 17:00",
    ubicacion: "Xocomil - Área nueva",
    rating: 4.7,
    reviews: 300
  }
];
