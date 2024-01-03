import type {
  Customer,
  Subscription,
  Product,
  ShoppingCart,
  Seller,
  Visitable,
} from "./objects";
import { Visitor } from "./visitor";

const externalServiceClient = {
  async send(data: string) {
    // send data to external service
    return 200; // OK
  },
};

const stringify = (data: any) => JSON.stringify(data);

class ExternalLogger implements Visitor<Promise<number>> {
  async visitCustomer(customer: Customer) {
    return externalServiceClient.send(stringify(customer));
  }
  async visitSubscription(subscription: Subscription) {
    return externalServiceClient.send(stringify(subscription));
  }
  async visitProduct(product: Product) {
    return externalServiceClient.send(stringify(product));
  }
  async visitShoppingCart(shoppingCart: ShoppingCart) {
    return externalServiceClient.send(stringify(shoppingCart));
  }
  async visitSeller(seller: Seller) {
    return externalServiceClient.send(stringify(seller));
  }

  async log(visitable: Visitable) {
    return visitable.accept(this);
  }
}

export const externalLogger = new ExternalLogger();
