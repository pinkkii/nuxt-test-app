import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            product: {
                id: Date.now(),
                name: 'Omega-3',
                cost: 489,
                oldCost: 963
            }
        }
    }
})