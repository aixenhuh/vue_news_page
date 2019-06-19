<template>
    <div>
<<<<<<< HEAD
        <list-item></list-item>
=======
        <ul class="news-list">
            <li v-for='item in fetchedNews' class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points }}
                </div>

                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">{{item.time_ago}} by
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>

            </li>
        </ul>
>>>>>>> commit
    </div>
</template>

<script>
<<<<<<< HEAD
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
    components : {
        ListItem,
=======
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters(['fetchedNews'])
>>>>>>> commit
    },
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_NEWS');
        bus.$emit('end:spinner');
    }
}
</script>

<<<<<<< HEAD
<style scoped></style>
=======
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
>>>>>>> commit
