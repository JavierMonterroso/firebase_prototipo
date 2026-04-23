
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
  lo_mejor?: string[];
  telefono?: string;
  precios?: {
    afiliados: string;
    no_afiliado: {
      ninos_adulto_mayor: string;
      adulto: string;
    };
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
    // Atracciones / Piscinas
    intensidad?: string;
    publico?: string;
    duracion?: string;
    tiempo_estimado?: string;
    restricciones?: string;
    velocidad_aproximada?: string;
    inversiones?: number;
    tipo?: string;
    capacidad_por_turno?: number;
    personas_en_fila?: number; // Nueva propiedad para molinetes
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
