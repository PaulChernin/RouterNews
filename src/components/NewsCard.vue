<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="image"
    >
    </v-img>
    <v-card-title>{{title}}</v-card-title>

    <v-card-text class="text--primary">
      <div>{{text}}</div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="orange"
        text
        :href="link"
      >
        Перейти
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        title: String,
        text: String,
        image: String,
        link: String
    }
}
</script>