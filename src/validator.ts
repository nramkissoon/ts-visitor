import type {
  Customer,
  Subscription,
  Product,
  ShoppingCart,
  Seller,
  Visitable,
} from "./objects";
import { Visitor } from "./visitor";

class Validator implements Visitor<void> {
  visitCustomer(customer: Customer) {
    if (customer.name.length === 0) {
      throw new Error("Customer name is empty");
    }
  }
  visitSubscription(subscription: Subscription) {
    if (subscription.startDate > subscription.endDate) {
      throw new Error("Subscription start date is after end date");
    }
  }
  visitProduct(product: Product) {
    if (product.price < 0) {
      throw new Error("Product price is negative");
    }
  }
  visitShoppingCart(shoppingCart: ShoppingCart) {
    if (!shoppingCart.customerId) {
      throw new Error("Shopping cart has no customer");
    }
  }
  visitSeller(seller: Seller) {
    if (seller.name.length === 0) {
      throw new Error("Seller name is empty");
    }
  }

  validate(visitable: Visitable) {
    visitable.accept(this);
  }
}

export const validator = new Validator();
