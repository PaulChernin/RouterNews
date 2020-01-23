<template>
  <div class="home">
    <CardList :country="this.$route.params.country"></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
///import HelloWorld from '@/components/HelloWorld.vue'
import CardList from '@/components/CardList.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
    CardList
  }
}
</script>
