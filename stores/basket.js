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
            this.basket.quantity = quantity;
        }
    },
})