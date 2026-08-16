import { Schema, model, Document } from 'mongoose';
import { Category } from '../types/product';

export interface IProductDocument extends Document {
  name: string;
  sku: string;
  category: Category;
  quantity: number;
  price: number;
  minStock: number;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: Definir o Schema do Mongoose com as validações de tipos e regras de negócio
const productSchema = new Schema<IProductDocument>(
  {
    // TODO: Adicionar o campo 'name' (String, obrigatório, trim)
    
    // TODO: Adicionar o campo 'sku' (String, obrigatório, único, uppercase, trim)
    
    // TODO: Adicionar o campo 'category' (String, obrigatório, enum com as categorias permitidas)
    
    // TODO: Adicionar o campo 'quantity' (Number, obrigatório, min: 0, default: 0)
    
    // TODO: Adicionar o campo 'price' (Number, obrigatório, min: 0)
    
    // TODO: Adicionar o campo 'minStock' (Number, obrigatório, min: 0, default: 0)
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret: any) => {
        ret.id = ret._id ? ret._id.toString() : ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const Product = model<IProductDocument>('Product', productSchema);
