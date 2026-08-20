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

    name:{type: String, required: true, trim: true},
    // TODO: Adicionar o campo 'sku' (String, obrigatório, único, uppercase, trim)
    sku:{type: String, required: true, unique: true, uppercase: true, trim: true},
    // TODO: Adicionar o campo 'category' (String, obrigatório, enum com as categorias permitidas)
    category: {type: String, required: true,  enum: {
        values: ["Eletrônicos", "Vestuário", "Alimentos", "Ferramentas", "Cosméticos"],
        message: '{VALUE} não é categoria válida'
      },},
    // TODO: Adicionar o campo 'quantity' (Number, obrigatório, min: 0, default: 0)
    quantity: {type: Number, required: true, min: 0, default: 0},
    // TODO: Adicionar o campo 'price' (Number, obrigatório, min: 0)
    price: {type: Number, required: true, min: 0},
    // TODO: Adicionar o campo 'minStock' (Number, obrigatório, min: 0, default: 0)
    minStock: {type: Number, required: true, min: 0, default: 0}
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
