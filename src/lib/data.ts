
import { Place, Category } from './types';
import data from '@/app/lib/placeholder-images.json';

const images = data.placeholderImages;

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Restaurantes', icon: 'Utensils' },
  { id: '2', name: 'Hostales', icon: 'Hotel' },
  { id: '3', name: 'Piscinas', icon: 'Waves' },
  { id: '4', name: 'Spa', icon: 'Sparkles' },
  { id: '5', name: 'Diversión', icon: 'FerrisWheel' },
  { id: '6', name: 'Eventos', icon: 'CalendarDays' },
  { id: '7', name: 'Información', icon: 'Info' },
];

export const PLACES: Place[] = [
  {
    id: 'los-corozos',
    name: 'Los Corozos',
    category: 'Restaurantes',
    location: 'Zona de servicios y bienestar',
    hours: '8:00 a.m. – 8:00 p.m.',
    description: 'Espacio con ambiente relajante, opciones de comida y acceso a servicios de descanso.',
    imageUrl: images.find(i => i.id === 'restaurant-corozos')?.imageUrl || '',
    rating: 4.8,
    reviewCount: 156,
    featured: true
  },
  {
    id: 'restaurante-palajunoj',
    name: 'Restaurante Palajunoj',
    category: 'Restaurantes',
    location: 'Sector de hostales',
    hours: '7:00 a.m. – 9:00 p.m.',
    description: 'Restaurante con opciones de comida para visitantes y huéspedes.',
    imageUrl: images.find(i => i.id === 'restaurant-palajunoj')?.imageUrl || '',
    rating: 4.2,
    reviewCount: 89
  },
  {
    id: 'hostales-san-martin',
    name: 'Hostales San Martín',
    category: 'Hostales',
    location: 'Área de hostales, complejo IRTRA',
    hours: '24 horas',
    description: 'Complejo de hospedaje familiar con acceso a áreas verdes y servicios de descanso.',
    imageUrl: images.find(i => i.id === 'hostal-sanmartin')?.imageUrl || '',
    rating: 4.9,
    reviewCount: 320,
    featured: true
  },
  {
    id: 'spa-de-luna',
    name: 'Spa de Luna',
    category: 'Spa',
    location: 'Zona de bienestar',
    hours: '9:00 a.m. – 6:00 p.m.',
    description: 'Área enfocada en relajación, descanso y servicios de spa.',
    imageUrl: images.find(i => i.id === 'spa-luna')?.imageUrl || '',
    rating: 4.5,
    reviewCount: 64
  },
  {
    id: 'piscina-familiar',
    name: 'Piscina Familiar',
    category: 'Piscinas',
    location: 'Área recreativa principal',
    hours: '9:00 a.m. – 5:00 p.m.',
    description: 'Piscina pensada para familias, con acceso cercano a zonas de descanso.',
    imageUrl: images.find(i => i.id === 'pool-family')?.imageUrl || '',
    rating: 4.7,
    reviewCount: 210,
    featured: true
  },
  {
    id: 'eventos-irtra',
    name: 'Eventos IRTRA',
    category: 'Eventos',
    location: 'Área central del complejo',
    hours: 'Según programación',
    description: 'Espacio para consultar actividades especiales, temporadas y eventos del parque.',
    imageUrl: images.find(i => i.id === 'events-center')?.imageUrl || '',
    rating: 4.3,
    reviewCount: 45
  },
  {
    id: 'planea-tu-visita',
    name: 'Planea tu visita',
    category: 'Información',
    location: 'Servicio digital',
    hours: 'Disponible todo el tiempo',
    description: 'Sección informativa con recomendaciones, horarios y consejos previos a la visita.',
    imageUrl: images.find(i => i.id === 'info-center')?.imageUrl || '',
    rating: 4.0,
    reviewCount: 12
  }
];
