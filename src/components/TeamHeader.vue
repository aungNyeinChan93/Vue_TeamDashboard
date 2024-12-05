<template>
  <div class="card flex justify-between my-3">
      <span>
        <button class="px-2 py-1 bg-gray-400 rounded ">
          <strong>Add Member</strong> <span class="text-xl ms-2 text-red-600">
          {{team.available - team.members.length}} left</span></button>
      </span>
    <span class="text-3xl text-green-500">{{team.name}}</span>
  </div>
</template>

<script setup>
// import {defineProps} from "vue"
//
// defineProps({
//   team: {
//     type: Object,
//   }
// })

import {useteamStore} from "@/store/useTeamStore";
let team = useteamStore();
</script>

