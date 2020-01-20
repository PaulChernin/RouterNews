<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{title}}</v-card-title>
    </v-img>

    <!-- <v-card-subtitle class="pb-0">{{subtitle}}</v-card-subtitle> -->

    <v-card-text class="text--primary">
      <div>{{text}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        title: String,
        //subtitle: String,
        text: String
    }
}
</script>