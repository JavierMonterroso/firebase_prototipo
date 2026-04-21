
export type CategoryType = 
  | 'Restaurantes' 
  | 'Hostales' 
  | 'Piscinas' 
  | 'Spa' 
  | 'Diversión' 
  | 'Eventos' 
  | 'Información';

export interface Category {
  id: string;
  name: CategoryType;
  icon: string;
}

export interface Place {
  id: string;
  name: string;
  category: CategoryType;
  location: string;
  hours: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
}
