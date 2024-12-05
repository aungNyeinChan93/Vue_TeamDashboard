<template>
  <tr class="team-role text-center">
    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{name}}</td>
    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{email}}</td>
    <td class="whitespace-nowrap px-4 py-2">
      <a
          href="#"
          class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
      >
        {{status}}
      </a>
    </td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  status: {
    type: String,
  }
})
</script>

