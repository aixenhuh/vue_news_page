<template>
    <div>
        <section>
            <user-profile :info="fetchedItems">
                <router-link slot="username" :to="`/user/${fetchedItems.user}`">
                    {{ fetchedItems.user }}
                </router-link>
                <template slot="time">{{ 'posted by' + fetchedItems.time_ago }}</template>
            </user-profile>
            <!-- 사용자 정보 -->
            <!-- <div class="user-container">
                    <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <router-link :to="`/user/${fetchedItems.user}`">
                    {{ fetchedItems.user }}
                </router-link>
            </div>
            <div class="time">
                {{ fetchedItems.time_ago}}
            </div> -->
        </section>
        <section>
            <h2>
                {{ fetchedItems.title }} 
            </h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div v-html="fetchedItems.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapState, mapGetters } from 'vuex';
export default {
    components : {
        UserProfile
    },
    computed : {
        ...mapGetters(['fetchedItems'])
    },
    created() {
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_JOBS', userId)
    }
}
</script>

<style scoped>
    .user-container {
        display : flex;
        align-items : center;
        padding : 0.5rem
    }

    .fa-user {
        font-size : 2.5rem;
    }

    .user-description {
        padding-left : 8px;

    }

    .time {
        font-size : 0.7rem
    }

</style>
