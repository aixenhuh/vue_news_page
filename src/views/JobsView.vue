<template>
    <div>
        <list-item></list-item>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ListItem from '../components/ListItem.vue'
export default {
    components : {
        ListItem
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style scoped></style>
 