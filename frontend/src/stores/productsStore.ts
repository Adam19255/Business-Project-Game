import { defineStore } from "pinia";
import type { Product } from "../models/business";

interface ProductsState {
  products: Product[];
}

export const useProductsStore = defineStore("products", {
  state: (): ProductsState => ({
    products: [],
  }),

  getters: {
    getProductById: (state) => {
      return (id: string) => state.products.find((p) => p.id === id) || null;
    },
  },

  actions: {
    setProducts(products: Product[]) {
      this.products = products;
    },
  },
});
