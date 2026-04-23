
export type CategoryType = 
  | 'Restaurantes' 
  | 'Hostales' 
  | 'Piscinas' 
  | 'Atracciones'
  | 'Servicios';

export interface Place {
  id: string;
  name: string;
  category: CategoryType;
  type: 'hostal' | 'piscina' | 'atraccion' | 'restaurante' | 'servicio';
  description: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  hours: string | {
    general: string;
    check_in?: string;
    check_out?: string;
  };
  details: {
    // Campos genéricos que se adaptarán por tipo
    intensity?: string;
    targetAudience?: string;
    duration?: string;
    capacity?: string | number;
    estimatedWait?: string;
    cuisineType?: string;
    rooms?: number;
    services?: string[];
    specificLocations?: string[];
  };
}

export interface Category {
  id: string;
  name: CategoryType;
  icon: string;
}
