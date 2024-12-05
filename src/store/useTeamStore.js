import {defineStore} from "pinia";
import {ref} from "vue";

export const useteamStore = defineStore('team', () => {
    const name = ref('chan team')
    const available = ref(10)
    const members = ref([])


    // data fetching
    const fill =async () => {
        await import('@/Team.json').then(res => {
            // console.log(res.default.members)
            name.value = res.default.name
            available.value = res.default.available
            members.value = res.default.members
        })
    }
    return {name, available, members, fill};
})