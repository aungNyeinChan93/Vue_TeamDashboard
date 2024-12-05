<template>
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead class="ltr:text-left rtl:text-right">
    <tr>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
    </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
    <TeamRole v-for="member in team.members" :key="member.name"
              :name="member.name" :email="member.email" :status="member.status" />
    </tbody>
  </table>
</template>

<script setup>
import TeamRole from "@/components/TeamRole.vue";
import {defineProps} from "vue"
defineProps({
  team:{
    type: Object,
  }
})
</script>
