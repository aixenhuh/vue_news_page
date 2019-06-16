<template>
    <div>
        <div v-for='user in this.$store.state.news' > {{ user.title }}</div>
    </div>
</template>

<script>


export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
        // var vm = this;
        // fetchNewsList().then(function(response) {
        //     vm.users = response.data;
        // })
        // .catch(function(err) {
        //     console.log(err);
        // })
    },
}
</script>

<style>

</style>
