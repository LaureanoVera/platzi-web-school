import { User } from "./../../01-enum";
import { Product } from "../products/product.model";
import { BaseModel } from "../base.model";

export interface Order extends BaseModel {
  id: string | number;
  create: Date;
  products: Product[];
  user: User;
}
