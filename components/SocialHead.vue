<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'https://nuxtjs.org/nuxt-card.png'
    }
  },

  head() {
    return {
      meta: [
        {
          //hid: 'og:image',
          property: 'og:image',
          content: this.image
        },/*
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: this.title
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: this.title
        },*/
      ]
    }
  }
}
</script>
