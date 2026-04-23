
export type PlaceType = 'hostal' | 'piscina' | 'atraccion' | 'restaurante' | 'servicio';

export interface Place {
  id: string;
  nombre: string;
  tipo: PlaceType;
  categoria?: string;
  descripcion: string;
  ubicacion: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  horario: string | {
    general: string;
    check_in?: string;
    check_out?: string;
  };
  detalles: {
    // Restaurantes
    tipo_comida?: string;
    servicio?: string[];
    ambiente?: string;
    // Hostales
    habitaciones?: number;
    capacidad?: string | number;
    servicios?: string[];
    tipos?: string[];
    edificios?: string[];
    extra?: string;
    estructura?: string;
    // Atracciones
    intensidad?: string;
    publico?: string;
    duracion?: string;
    tiempo_estimado?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
