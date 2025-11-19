export interface Material {
  id: string;
  name: string;
  timeRequired: number;
  stock: number;
}

export type ProductPriority = "NORMAL" | "REPRODUCTION";

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  priority: ProductPriority;
  materials: Material[];
}

export interface BusinessSettings {
  productionSlotsCount: number;
  deliveryTime: number;
}
