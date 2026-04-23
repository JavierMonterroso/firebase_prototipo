
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
    name: 'Hostales San Martín',
    type: 'hostal',
    category: 'Hostales',
    description: 'Te sentirás como en los tiempos de la colonia con las comodidades del presente.',
    imageUrl: '/img/hero-home.jpg',
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
      services: ["Aire acondicionado", "TV cable", "Baño privado", "Business Center"]
    }
  },
  {
    id: 'gondola-salpicona',
    name: 'Góndola Salpicona',
    type: 'atraccion',
    category: 'Atracciones',
    description: 'Atracción acuática con caídas rápidas y salpicaduras.',
    imageUrl: '/img/Gondola-Salpicona1-885x500.jpg',
    location: 'Xetulul - Plaza Italia',
    rating: 4.8,
    reviewCount: 390,
    hours: '10:00 - 18:00',
    details: {
      intensity: 'Alta',
      targetAudience: 'General',
      duration: '3 minutos',
      estimatedWait: '15 min'
    }
  }
];
