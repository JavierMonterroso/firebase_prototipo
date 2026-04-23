
import { Place, Category } from './types';
import data from '@/app/lib/placeholder-images.json';

const images = data.placeholderImages;

// Función auxiliar para obtener la imagen: Prioriza la local, usa placeholder de respaldo
const getImg = (id: string, localPath: string) => {
  const placeholder = images.find(i => i.id === id)?.imageUrl || '';
  // En desarrollo local, si la imagen existe en public/img, se usará el localPath
  // Aquí devolvemos el placeholder como prioridad para que el prototipo se vea bien siempre
  return placeholder || localPath;
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
    id: 'pueblo-caribeno',
    name: 'Pueblo Caribeño',
    category: 'Atracciones',
    parque: 'Xetulul',
    zona: 'Inspirado en Izabal',
    loMejor: 'Nueva atracción, museo, restaurante, juego con agua',
    description: 'Espacio inspirado en el Castillo de San Felipe. Incluye un juego tipo barco donde puedes lanzar agua a otros usuarios mientras navegas obstáculos.',
    imageUrl: getImg('attraction-caribeno', '/img/pueblo-caribeno.jpg'),
    location: 'Km 180.5 carretera a Quetzaltenango',
    hours: 'Jueves 10:00-17:00 | Viernes a domingo 10:00-18:00',
    telefono: '7722-9450',
    rating: 4.8,
    reviewCount: 210,
    intensity: 'Media',
    targetAudience: 'Familiar',
    capacityPerTurn: 16,
    durationMinutes: 8,
    peopleInQueue: 32
  },
  {
    id: 'gondola-salpicona',
    name: 'Góndola Salpicona',
    category: 'Atracciones',
    parque: 'Xetulul',
    zona: 'Plaza Italia',
    loMejor: 'Juego con agua, alta velocidad',
    description: 'Juego en balsa con descensos rápidos, vistas del parque y recorrido lleno de adrenalina.',
    imageUrl: getImg('attraction-gondola', '/img/Gondola-Salpicona1-885x500.jpg'),
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
    imageUrl: getImg('attraction-jurakan', '/img/Jurakan-885x500.jpg'),
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
    imageUrl: getImg('attraction-tamagas', '/img/el-tamagas-2.jpg'),
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
    id: 'vuelta-jaguar',
    name: 'Vuelta del Jaguar',
    category: 'Atracciones',
    parque: 'Xocomil',
    zona: 'Área nueva',
    loMejor: 'Extremo, caída vertical',
    description: 'Tobogán con cápsula que se abre y genera una caída libre que te dejará sin aliento.',
    imageUrl: getImg('attraction-jaguar', '/img/vuelta-jaguar.jpg'),
    location: 'Cerca de Tamagás',
    hours: 'Jueves a domingo 09:00-17:00',
    telefono: '7722-9400',
    rating: 4.9,
    reviewCount: 390,
    intensity: 'Extrema',
    targetAudience: 'Buscadores de adrenalina',
    restrictions: 'Estatura mínima 1.30m',
    capacityPerTurn: 1,
    durationMinutes: 2,
    peopleInQueue: 45
  },
  {
    id: 'los-corozos',
    name: 'Los Corozos',
    category: 'Restaurantes',
    parque: 'Hostales',
    loMejor: 'Ambiente relajante y buffet',
    description: 'Espacio con ambiente relajante, opciones de comida internacional y excelente servicio para huéspedes.',
    imageUrl: getImg('restaurant-corozos', '/img/los-corozos.jpg'),
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
    imageUrl: getImg('bath-placeholder', '/img/banos.jpg'),
    location: 'A un costado de Góndola Salpicona',
    hours: '10:00 - 18:00',
    rating: 4.5,
    reviewCount: 88,
    accessibility: 'Totalmente accesible',
    availability: 'Alta'
  }
];
