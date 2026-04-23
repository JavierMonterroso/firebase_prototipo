
import { Place, Category } from './types';
import data from '@/app/lib/placeholder-images.json';

const images = data.placeholderImages;

const getImg = (localPath: string, placeholderId: string) => {
  const placeholder = images.find(i => i.id === placeholderId)?.imageUrl || '';
  // Prioritize local images from public/img/ if they exist, otherwise use placeholder
  return localPath || placeholder;
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Atracciones', icon: 'FerrisWheel' },
  { id: '2', name: 'Restaurantes', icon: 'Utensils' },
  { id: '3', name: 'Hostales', icon: 'Hotel' },
  { id: '4', name: 'Piscinas', icon: 'Waves' },
  { id: '5', name: 'Baños', icon: 'Bath' },
];

export const PLACES: Place[] = [
  {
    id: 'hostal-san-martin',
    name: 'Hostales San Martín',
    type: 'hostal',
    category: 'Hostales',
    description: 'Te sentirás como en los tiempos de la colonia con las comodidades del presente.',
    imageUrl: getImg('', 'hero-home'),
    location: 'Complejo IRTRA Retalhuleu',
    rating: 4.9,
    reviewCount: 320,
    hours: {
      general: '24 horas',
      check_in: '15:00',
      check_out: '12:00'
    },
    details: {
      rooms: 192,
      capacity: '2 adultos y 2 niños por habitación',
      services: ["Aire acondicionado", "TV cable", "Baño privado", "Agua caliente y fría", "Business Center"],
      structure: "4 módulos de dos niveles con plaza central estilo colonial"
    }
  },
  {
    id: 'hostal-santa-cruz',
    name: 'Hostal Santa Cruz',
    type: 'hostal',
    category: 'Hostales',
    description: 'Ambiente mediterráneo ideal para descansar y desconectarte.',
    imageUrl: getImg('', 'hero-home'),
    location: 'Complejo IRTRA Retalhuleu',
    rating: 4.8,
    reviewCount: 280,
    hours: {
      general: '24 horas',
      check_in: '15:00',
      check_out: '12:00'
    },
    details: {
      rooms: 151,
      roomTypes: ["Habitaciones dobles", "Junior Suites", "Suites de 2 habitaciones"],
      services: ["Aire acondicionado", "Baño privado", "Secadora de cabello"],
    }
  },
  {
    id: 'hostal-palajunoj',
    name: 'Hostal Palajunoj',
    type: 'hostal',
    category: 'Hostales',
    description: 'Inspirado en culturas del mundo con ambientación temática.',
    imageUrl: getImg('', 'hero-home'),
    location: 'Complejo IRTRA Retalhuleu',
    rating: 4.9,
    reviewCount: 350,
    hours: {
      general: '24 horas',
      check_in: '15:00',
      check_out: '12:00'
    },
    details: {
      roomTypes: ["Papeete", "Kalimantán", "Nakurú", "Mandalay", "Uaxactún"],
      rooms: 156,
      services: ["Ascensores", "Parqueos", "Aire acondicionado", "TV cable", "Piscinas Moana"],
      extra: "Piscinas con cascadas, tobogán y solárium"
    }
  },
  {
    id: 'vuelta-del-jaguar',
    name: 'La Vuelta del Jaguar',
    type: 'piscina',
    category: 'Piscinas',
    description: 'Tobogán extremo con cápsula de caída vertical.',
    imageUrl: getImg('/img/el-tamagas-2.jpg', 'attraction-jaguar'),
    location: 'Xocomil - Área nueva',
    rating: 4.9,
    reviewCount: 410,
    hours: 'Jueves a domingo 9:00 - 17:00',
    details: {
      intensity: 'Alta',
      targetAudience: 'Adultos',
      duration: '1-2 minutos',
      capacity: 1
    }
  },
  {
    id: 'caracol-xocomil',
    name: 'El Caracol',
    type: 'piscina',
    category: 'Piscinas',
    description: 'Tobogán en espiral que desemboca en piscina central.',
    imageUrl: getImg('', 'attraction-tamagas'),
    location: 'Xocomil - Área nueva',
    rating: 4.7,
    reviewCount: 300,
    hours: 'Jueves a domingo 9:00 - 17:00',
    details: {
      intensity: 'Media-Alta',
      targetAudience: 'General',
      capacity: 2,
      duration: '2 minutos'
    }
  },
  {
    id: 'gondola-salpicona',
    name: 'Góndola Salpicona',
    type: 'atraccion',
    category: 'Atracciones',
    description: 'Atracción acuática con caídas rápidas y salpicaduras.',
    imageUrl: getImg('/img/Gondola-Salpicona1-885x500.jpg', 'attraction-gondola'),
    location: 'Xetulul - Plaza Italia',
    rating: 4.8,
    reviewCount: 390,
    hours: '10:00 - 18:00',
    details: {
      intensity: 'Alta',
      targetAudience: 'General',
      duration: '3 minutos',
      capacity: 14,
      estimatedWait: '10-25 min'
    }
  },
  {
    id: 'jurakan',
    name: 'El Jurakán',
    type: 'atraccion',
    category: 'Atracciones',
    description: 'Plataforma giratoria con movimientos intensos.',
    imageUrl: getImg('/img/Jurakan-885x500.jpg', 'attraction-jurakan'),
    location: 'Xetulul',
    rating: 4.7,
    reviewCount: 250,
    hours: '10:00 - 18:00',
    details: {
      intensity: 'Alta',
      targetAudience: 'Adultos',
      duration: '2 minutos',
      capacity: 20,
      estimatedWait: '15-30 min'
    }
  },
  {
    id: 'restaurante-corozos',
    name: 'Los Corozos',
    type: 'restaurante',
    category: 'Restaurantes',
    description: 'Comida gourmet internacional en ambiente elegante.',
    imageUrl: getImg('', 'restaurant-corozos'),
    location: 'Hostales IRTRA',
    rating: 4.8,
    reviewCount: 210,
    hours: 'Según programación',
    details: {
      cuisineType: 'Internacional',
      serviceOptions: ["Desayuno", "Almuerzo", "Cena"],
      atmosphere: "Familiar y elegante"
    }
  },
  {
    id: 'kapa-hapa',
    name: 'Kapa Hapa',
    type: 'restaurante',
    category: 'Restaurantes',
    description: 'Fusión asiática con vista a piscina Moana.',
    imageUrl: getImg('', 'restaurant-corozos'),
    location: 'Hostal Palajunoj',
    rating: 4.7,
    reviewCount: 180,
    hours: 'Según programación',
    details: {
      cuisineType: 'Asiática',
      serviceOptions: ["Desayuno", "Almuerzo", "Cena"]
    }
  },
  {
    id: 'banos-generales',
    name: 'Baños Generales',
    type: 'servicio',
    category: 'Baños',
    description: 'Servicios sanitarios distribuidos en todo el parque.',
    imageUrl: getImg('', 'bath-placeholder'),
    location: 'Diversos puntos del parque',
    rating: 4.5,
    reviewCount: 120,
    hours: 'Horario del parque',
    details: {
      availability: 'Alta',
      accessibility: 'Sí',
      specificLocations: ["Entrada", "Plaza central", "Área de piscinas"]
    }
  }
];
