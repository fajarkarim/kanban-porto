<template>
  <div>
    <Navbar/>
    <MainContent/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MainContent from '@/components/MainContent'
export default {
  name: 'hello',
  components: {
    Navbar,
    MainContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
