import { User } from "./../../01-enum";
import { Product } from "../products/product.model";

export interface Order {
  id: string | number;
  create: Date;
  products: Product[];
  user: User;
}
