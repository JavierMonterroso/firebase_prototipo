
export type CategoryType = 
  | 'Restaurantes' 
  | 'Hostales' 
  | 'Piscinas' 
  | 'Atracciones'
  | 'Baños'
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
    // Atracciones / Piscinas
    intensity?: string;
    targetAudience?: string;
    duration?: string;
    capacity?: string | number;
    estimatedWait?: string;
    // Restaurantes
    cuisineType?: string;
    serviceOptions?: string[];
    atmosphere?: string;
    // Hostales
    rooms?: number;
    roomTypes?: string[];
    services?: string[];
    structure?: string;
    extra?: string;
    // Baños / Servicios
    availability?: string;
    accessibility?: string;
    specificLocations?: string[];
  };
}

export interface Category {
  id: string;
  name: CategoryType;
  icon: string;
}
