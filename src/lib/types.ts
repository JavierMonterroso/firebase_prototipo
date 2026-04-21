
export type CategoryType = 
  | 'Restaurantes' 
  | 'Hostales' 
  | 'Piscinas' 
  | 'Spa' 
  | 'Diversión' 
  | 'Eventos' 
  | 'Información'
  | 'Atracciones'
  | 'Baños';

export interface Category {
  id: string;
  name: CategoryType;
  icon: string;
}

export interface Place {
  id: string;
  name: string;
  category: CategoryType;
  parque: string;
  zona?: string;
  loMejor?: string;
  description: string;
  telefono?: string;
  precios?: string;
  hours: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  // Attraction specific
  intensity?: 'Baja' | 'Media' | 'Alta' | 'Extrema';
  targetAudience?: string;
  restrictions?: string;
  capacityPerTurn?: number;
  durationMinutes?: number;
  peopleInQueue?: number;
  // Restaurant specific
  cuisineType?: string;
  serviceType?: string;
  // Bathroom specific
  accessibility?: string;
  availability?: 'Alta' | 'Media' | 'Baja';
}
