export type Category = "Eletrônicos" | "Vestuário" | "Alimentos" | "Ferramentas" | "Cosméticos";

export interface IProduct {
  id?: string;
  name: string;
  sku: string;
  category: Category;
  quantity: number;
  price: number;
  minStock: number;
  createdAt?: Date;
  updatedAt?: Date;
}
