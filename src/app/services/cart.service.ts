import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Estado interno protegido por signal
  private cartItems = signal<CartItem[]>([]);

  // Exposição pública apenas para leitura
  items = this.cartItems.asReadonly();

  // Contagem total de itens agregados
  totalItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0)
  );

  // Preço final calculado reativamente
  totalPrice = computed(() =>
    this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0)
  );

  addToCart(product: Product) {
    this.cartItems.update(currentItems => {
      const index = currentItems.findIndex(item => item.product.id === product.id);
      if (index > -1) {
        return currentItems.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number) {
    this.cartItems.update(currentItems =>
      currentItems.filter(item => item.product.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.cartItems.update(currentItems =>
      currentItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }
}