
export type CategoryType = 
  | 'Restaurantes' 
  | 'Hostales' 
  | 'Piscinas' 
  | 'Spa' 
  | 'Diversión' 
  | 'Eventos' 
  | 'Información'
  | 'Atracciones';

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
}
