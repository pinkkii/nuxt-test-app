import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
    state: () => {
        return {
            basket: {
                quantity: 0
            }
        }
    },
    actions: {
        incrementQuantityInBasket(quantity) {
            if (typeof quantity === 'string') {
                return;
            }

            if (this.basket.quantity + quantity >= 99) {
                this.basket.quantity = 99;
                return;
            }

            this.basket.quantity += quantity;
        }
    },
})