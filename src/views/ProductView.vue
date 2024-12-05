<template>
  <div class="product grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 mt-4">
    <CardComponent v-for="product in productsStore.products" :key="product.id" :product="product" />
   </div>
</template>

<script setup>
import CardComponent from "@/components/CardComponent.vue";
import {useProductStore} from "@/store/useProductStore";
import {onMounted} from "vue";

const productsStore = useProductStore();

onMounted(()=>{
  productsStore.fetchProducts()
})

</script>

