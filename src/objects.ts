import { Visitor } from "./visitor";

export type Visitable = {
  accept<R>(visitor: Visitor<R>): R;
};

export type Customer = {
  id: string;
  name: string;
} & Visitable;

export type Subscription = {
  id: string;
  customerId: string;
  productId: string;
  startDate: Date;
  endDate: Date;
} & Visitable;

export type Product = {
  id: string;
  name: string;
  price: number;
} & Visitable;

export type ShoppingCart = {
  id: string;
  customerId: string;
  productIds: string[];
} & Visitable;

export type Seller = {
  id: string;
  name: string;
} & Visitable;

export function createCustomer(opts: { id: string; name: string }): Customer {
  return {
    ...opts,
    accept<R>(visitor: Visitor<R>): R {
      return visitor.visitCustomer(this);
    },
  };
}

export function createSubscription(opts: {
  id: string;
  customerId: string;
  productId: string;
  startDate: Date;
  endDate: Date;
}): Subscription {
  return {
    ...opts,
    accept<R>(visitor: Visitor<R>): R {
      return visitor.visitSubscription(this);
    },
  };
}

export function createProduct(opts: {
  id: string;
  name: string;
  price: number;
}): Product {
  return {
    ...opts,
    accept<R>(visitor: Visitor<R>): R {
      return visitor.visitProduct(this);
    },
  };
}

export function createShoppingCart(opts: {
  id: string;
  customerId: string;
  productIds: string[];
}): ShoppingCart {
  return {
    ...opts,
    accept<R>(visitor: Visitor<R>): R {
      return visitor.visitShoppingCart(this);
    },
  };
}

export function createSeller(opts: { id: string; name: string }): Seller {
  return {
    ...opts,
    accept<R>(visitor: Visitor<R>): R {
      return visitor.visitSeller(this);
    },
  };
}
