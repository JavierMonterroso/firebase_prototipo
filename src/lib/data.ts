
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
    imageUrl: '/img/hero-home.jpg', // Usando la imagen que mencionaste que funciona
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
    id: 'gondola-salpicona',
    nombre: 'Góndola Salpicona',
    tipo: 'atraccion',
    categoria: 'Atracciones',
    descripcion: 'Atracción acuática con caídas rápidas y salpicaduras.',
    imageUrl: '/img/Gondola-Salpicona1-885x500.jpg',
    ubicacion: 'Xetulul - Plaza Italia',
    rating: 4.8,
    reviews: 390,
    horario: '10:00 - 18:00',
    detalles: {
      intensidad: 'Alta',
      publico: 'General',
      duracion: '3 minutos',
      tiempo_estimado: '10-25 min'
    }
  }
];
