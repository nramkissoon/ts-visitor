import type {
  Customer,
  Subscription,
  Product,
  ShoppingCart,
  Seller,
  Visitable,
} from "./objects";
import { Visitor } from "./visitor";

class JsonLogger implements Visitor<void> {
  visitCustomer(customer: Customer) {
    console.log(`Customer: ${JSON.stringify({ id: customer.id })}`);
  }
  visitSubscription(subscription: Subscription) {
    console.log(`Subscription: ${JSON.stringify(subscription)}`);
  }
  visitProduct(product: Product) {
    const { id, price } = product;
    console.log(`Product: ${JSON.stringify({ id, price })}`);
  }
  visitShoppingCart(shoppingCart: ShoppingCart) {
    console.log(`ShoppingCart: ${JSON.stringify(shoppingCart)}`);
  }
  visitSeller(seller: Seller) {
    console.log(`Seller: ${JSON.stringify({ id: seller.id })}`);
  }

  log(visitable: Visitable) {
    visitable.accept(this);
  }
}

export const jsonLogger = new JsonLogger();
