const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            onSale: true,
            inventory : 8,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})


