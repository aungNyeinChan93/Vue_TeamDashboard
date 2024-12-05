import {ref} from "vue";
import {defineStore} from "pinia";
import axios from "axios";


export const useProductStore = defineStore('product', () => {
    const products = ref([])

    const fetchProducts = async() => {
        const res= await axios.get('http://localhost:3000/products');
        products.value = res.data;
        console.log(res.data)
    }


    return { products , fetchProducts }
})