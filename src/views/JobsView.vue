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

<style scoped>
.news-list {
    margin:0;
    padding : 0;
}

.post {
    list-style : none;
    display : flex;
    align-items : center;
    border-bottom : 1px solid #eee;
    padding-left : 10px;
}
.points {
    width : 80px;
    height : 60px;
    display : flex;
    align-items : center;
    justify-content: center;
    color : #42b883
}

.news-title {
    margin : 0;
}

.link-text {
    color : #828282
}
</style>
 