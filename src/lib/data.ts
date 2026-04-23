
import { Place, Category } from './types';
import data from '@/app/lib/placeholder-images.json';

const images = data.placeholderImages;

// Función inteligente para obtener la imagen: 
// Intenta usar la ruta local y si no existe (o es vacía), usa el placeholder del JSON.
const getImg = (localPath: string, placeholderId: string) => {
  const placeholder = images.find(i => i.id === placeholderId)?.imageUrl || '';
  return localPath || placeholder;
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Atracciones', icon: 'FerrisWheel' },
  { id: '2', name: 'Restaurantes', icon: 'Utensils' },
  { id: '3', name: 'Hostales', icon: 'Hotel' },
  { id: '4', name: 'Piscinas', icon: 'Waves' },
  { id: '5', name: 'Spa', icon: 'Sparkles' },
  { id: '7', name: 'Baños', icon: 'Bath' },
  { id: '6', name: 'Info', icon: 'Info' },
];

export const PLACES: Place[] = [
  {
    id: 'pueblo-fantasma',
    name: 'Pueblo Fantasma',
    category: 'Atracciones',
    parque: 'Xetulul',
    zona: 'Plaza España',
    loMejor: 'Temática inmersiva, efectos especiales',
    description: 'Una de las atracciones más icónicas y misteriosas del parque. Recorre pasillos llenos de magia y sorpresas en esta experiencia inmersiva.',
    imageUrl: getImg('/img/Pueblo-Fantasma1-885x500.jpg', 'attraction-caribeno'),
    location: 'Plaza España',
    hours: 'Jueves 10:00-17:00 | Viernes a domingo 10:00-18:00',
    telefono: '7722-9450',
    rating: 4.8,
    reviewCount: 245,
    intensity: 'Baja',
    targetAudience: 'Familiar',
    capacityPerTurn: 20,
    durationMinutes: 10,
    peopleInQueue: 15
  },
  {
    id: 'gondola-salpicona',
    name: 'Góndola Salpicona',
    category: 'Atracciones',
    parque: 'Xetulul',
    zona: 'Plaza Italia',
    loMejor: 'Juego con agua, alta velocidad',
    description: 'Juego en balsa con descensos rápidos, vistas del parque y recorrido lleno de adrenalina.',
    imageUrl: getImg('/img/Gondola-Salpicona1-885x500.jpg', 'attraction-gondola'),
    location: 'Plaza Italia',
    hours: 'Jueves 10:00-17:00 | Viernes a domingo 10:00-18:00',
    telefono: '7722-9450',
    rating: 4.9,
    reviewCount: 340,
    intensity: 'Alta',
    targetAudience: 'Jóvenes y adultos',
    restrictions: 'Estatura mínima 1.20m',
    capacityPerTurn: 20,
    durationMinutes: 5,
    peopleInQueue: 120
  },
  {
    id: 'jurakan',
    name: 'Jurakán',
    category: 'Atracciones',
    parque: 'Xetulul',
    zona: 'Área Choconoy',
    loMejor: 'Juego extremo, alta velocidad',
    description: 'Plataforma que gira y se eleva de lado a lado generando una experiencia intensa.',
    imageUrl: getImg('/img/Jurakan-885x500.jpg', 'attraction-jurakan'),
    location: 'Frente a Choconoy',
    hours: 'Jueves 10:00-17:00 | Viernes a domingo 10:00-18:00',
    telefono: '7722-9450',
    rating: 4.7,
    reviewCount: 180,
    intensity: 'Extrema',
    targetAudience: 'Buscadores de adrenalina',
    restrictions: 'Estatura mínima 1.40m',
    capacityPerTurn: 40,
    durationMinutes: 3,
    peopleInQueue: 150
  },
  {
    id: 'tamagas',
    name: 'Tamagás',
    category: 'Atracciones',
    parque: 'Xocomil',
    zona: 'Área nueva',
    loMejor: 'Montaña rusa acuática',
    description: 'Tobogán con subidas, bajadas y curvas a gran altura. Una experiencia única en la región.',
    imageUrl: getImg('/img/el-tamagas-2.jpg', 'attraction-tamagas'),
    location: 'Área nueva',
    hours: 'Jueves a domingo 09:00-17:00',
    telefono: '7722-9400',
    rating: 4.9,
    reviewCount: 410,
    featured: true,
    intensity: 'Alta',
    targetAudience: 'Familiar',
    restrictions: 'Estatura mínima 1.20m',
    capacityPerTurn: 2,
    durationMinutes: 4,
    peopleInQueue: 18
  },
  {
    id: 'pueblo-caribeno',
    name: 'Pueblo Caribeño',
    category: 'Atracciones',
    parque: 'Xetulul',
    zona: 'Inspirado en Izabal',
    loMejor: 'Nueva atracción, museo, restaurante, juego con agua',
    description: 'Espacio inspirado en el Castillo de San Felipe. Incluye un juego tipo barco donde puedes lanzar agua a otros usuarios mientras navegas obstáculos.',
    imageUrl: getImg('', 'attraction-caribeno'),
    location: 'Plaza España / Izabal',
    hours: 'Jueves 10:00-17:00 | Viernes a domingo 10:00-18:00',
    rating: 4.8,
    reviewCount: 210,
    intensity: 'Media',
    targetAudience: 'Familiar'
  },
  {
    id: 'los-corozos',
    name: 'Los Corozos',
    category: 'Restaurantes',
    parque: 'Hostales',
    loMejor: 'Ambiente relajante y buffet',
    description: 'Espacio con ambiente relajante, opciones de comida internacional y excelente servicio para huéspedes.',
    imageUrl: getImg('', 'restaurant-corozos'),
    location: 'Área de Hostales',
    hours: '07:00 - 21:00',
    telefono: '7722-9450',
    rating: 4.8,
    reviewCount: 156,
    cuisineType: 'Internacional / Buffet',
    serviceType: 'Mesa / Buffet'
  },
  {
    id: 'banos-plaza-italia',
    name: 'Servicios Plaza Italia',
    category: 'Baños',
    parque: 'Xetulul',
    zona: 'Plaza Italia',
    description: 'Servicios sanitarios de primer nivel, con limpieza constante y cambiadores para bebés.',
    imageUrl: getImg('', 'bath-placeholder'),
    location: 'A un costado de Góndola Salpicona',
    hours: '10:00 - 18:00',
    rating: 4.5,
    reviewCount: 88,
    accessibility: 'Totalmente accesible',
    availability: 'Alta'
  }
];
