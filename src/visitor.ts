import {
  Customer,
  Product,
  Seller,
  ShoppingCart,
  Subscription,
} from "./objects";

export interface Visitor<R> {
  visitCustomer(customer: Customer): R;
  visitSubscription(subscription: Subscription): R;
  visitProduct(product: Product): R;
  visitShoppingCart(shoppingCart: ShoppingCart): R;
  visitSeller(seller: Seller): R;
}
