<template>
  <div>
    <HEADER></HEADER>
    <div>
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../Layouts/Header'
  import Sidebar from '../Layouts/Sidebar'
export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Header,
      Sidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1, h2
  font-weight: normal
</style>
