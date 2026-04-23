
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
    id: 'restaurante-corozos',
    nombre: 'Los Corozos',
    tipo: 'restaurante',
    categoria: 'Restaurantes',
    descripcion: 'Comida gourmet internacional en ambiente elegante.',
    imageUrl: '/img/hero-home.jpg',
    ubicacion: 'Hostales IRTRA',
    rating: 4.8,
    reviews: 210,
    horario: 'Según programación',
    detalles: {
      tipo_comida: 'Internacional',
      servicio: ['Desayuno', 'Almuerzo', 'Cena'],
      ambiente: 'Familiar y elegante'
    }
  },
  {
    id: 'kapa-hapa',
    nombre: 'Kapa Hapa',
    tipo: 'restaurante',
    categoria: 'Restaurantes',
    descripcion: 'Fusión asiática con vista a piscina Moana.',
    imageUrl: 'https://picsum.photos/seed/kapa/600/400',
    ubicacion: 'Hostal Palajunoj',
    rating: 4.7,
    reviews: 180,
    horario: 'Según programación',
    detalles: {
      tipo_comida: 'Asiática',
      servicio: ['Desayuno', 'Almuerzo', 'Cena']
    }
  },
  {
    id: 'hostal-san-martin',
    nombre: 'Hostales San Martín',
    tipo: 'hostal',
    categoria: 'Hostales',
    descripcion: 'Te sentirás como en los tiempos de la colonia con las comodidades del presente.',
    imageUrl: 'https://picsum.photos/seed/sanmartin/600/400',
    ubicacion: 'Complejo IRTRA Retalhuleu',
    rating: 4.9,
    reviews: 320,
    horario: {
      general: "24 horas",
      check_in: "15:00",
      check_out: "12:00"
    },
    detalles: {
      habitaciones: 192,
      capacidad: "2 adultos y 2 niños por habitación",
      servicios: ["Aire acondicionado", "TV cable", "Baño privado", "Agua caliente y fría", "Business Center"],
      estructura: "4 módulos de dos niveles con plaza central estilo colonial"
    }
  },
  {
    id: 'hostal-santa-cruz',
    nombre: 'Hostal Santa Cruz',
    tipo: 'hostal',
    categoria: 'Hostales',
    descripcion: 'Ambiente mediterráneo ideal para descansar y desconectarte.',
    imageUrl: 'https://picsum.photos/seed/santacruz/600/400',
    ubicacion: 'Complejo IRTRA Retalhuleu',
    rating: 4.8,
    reviews: 280,
    horario: {
      general: "24 horas",
      check_in: "15:00",
      check_out: "12:00"
    },
    detalles: {
      habitaciones: 151,
      tipos: ["Habitaciones dobles", "Junior Suites", "Suites de 2 habitaciones"],
      servicios: ["Aire acondicionado", "Baño privado", "Secadora de cabello"],
      capacidad: "Variable según tipo de habitación"
    }
  },
  {
    id: 'hostal-palajunoj',
    nombre: 'Hostal Palajunoj',
    tipo: 'hostal',
    categoria: 'Hostales',
    descripcion: 'Inspirado en culturas del mundo con ambientación temática.',
    imageUrl: 'https://picsum.photos/seed/palajunoj/600/400',
    ubicacion: 'Complejo IRTRA Retalhuleu',
    rating: 4.9,
    reviews: 350,
    horario: {
      general: "24 horas",
      check_in: "15:00",
      check_out: "12:00"
    },
    detalles: {
      edificios: ["Papeete", "Kalimantán", "Nakurú", "Mandalay", "Uaxactún"],
      habitaciones: 156,
      servicios: ["Ascensores", "Parqueos", "Aire acondicionado", "TV cable", "Piscinas Moana"],
      extra: "Piscinas con cascadas, tobogán y solárium"
    }
  }
];
