<template>
  <div class="about">
    <h1>This is US page</h1>
    <CardList country='us'></CardList>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
    CardList
  }
}
</script>