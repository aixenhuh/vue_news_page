<template>
    <div>
        <user-profile :info="userInfo">
            <div slot="username">{{ userInfo.id }}</div>
            <!-- 태그 없이 태그만 들어간다 -->
            <span slot="time">{{ 'Joined' + userInfo.created }},</span>
            <span slot="karma">{{userInfo.karma}}</span>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
export default {
    components : {
        UserProfile,
    },
    computed : {
      userInfo() {
          return this.$store.state.users;
      }  
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USERS', userName);
    }
}
</script>

<style>

</style>
