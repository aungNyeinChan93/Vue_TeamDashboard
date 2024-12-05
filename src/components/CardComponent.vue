<template>
  <a
      href="#"
      class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
  >
    <span
        class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>

    <div class="sm:flex sm:justify-between sm:gap-4">
      <div>
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
         {{product.title}}
        </h3>

        <p class="mt-1 text-xs font-medium text-gray-600">{{product.category}}</p>
      </div>

      <div class="hidden sm:block sm:shrink-0">
        <img
            alt=""
            :src="product.image"
            class="size-16 rounded-lg object-cover shadow-sm"
        />
      </div>
    </div>

    <div class="mt-4">
      <p class="text-pretty text-sm text-gray-500">
       {{product.description.substring(0, 100) + " more ..."}}
      </p>
    </div>

    <dl class="mt-6 flex gap-4 sm:gap-6">
      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-gray-600">${{product.price}} </dt>
        <dd class="text-xs text-gray-500">Rating Count {{product.rating.count}} </dd>
      </div>

      <div class="flex flex-col-reverse">
        <dt class="text-sm font-medium text-gray-600">Rate {{product.rating.rate}}</dt>
<!--        <dd class="text-xs text-gray-500">3 minute</dd>-->
      </div>
    </dl>
  </a>
</template>

<script setup>
import {defineProps} from "vue"

defineProps({
  product:{
    type: Object,
  }
})
</script>

