<template>
  <div class="container mx-auto px-10 py-4 ">
    <TeamHeader />
    <TeamRoles :team="team" />
  </div>
</template>

<script setup>
import {useteamStore} from "@/store/useTeamStore";
import TeamRoles from "@/components/TeamRoles.vue";
// import team from '../Team.json'
import TeamHeader from "@/components/TeamHeader.vue";


const team = useteamStore();
team.fill();

</script>

