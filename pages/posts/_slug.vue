<template>
  <article>
    <SocialHead
      :title="post.data[0].title"
      :description="post.data[0].short_description"
      :image="post.data[0].featured_media_path"
    />
    <h1>{{ post.data[0].title }}</h1>
    <section>
      <img :src="post.data[0].featured_media_path" :alt="post.data[0].title" />
      <p>{{ post.data[0].short_description }}</p>
    </section>
    <button @click="goBack">Back</button>
  </article>
</template>
<script>
export default {
  async asyncData({ params }) {
    const post = await fetch(
      `https://gv.unocrm.mx/api/v1/news?filter[slug]=${params.slug}`
    ).then((res) => res.json())
    return { post }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  },
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `/posts/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>