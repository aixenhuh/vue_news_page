<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItems.user}`">
                        {{ fetchedItems.user }}
                    </router-link>
                </div>
                <div class="time">
                    {{ fetchedItems.time_ago}}
                </div>
            </div>
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
import { mapState, mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters(['fetchedItems'])
    },
    created() {
        const userId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEMS', userId)
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
