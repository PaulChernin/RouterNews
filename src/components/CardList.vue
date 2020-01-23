<template>
    <div>
        <NewsCard v-for="news in newsData"
                  v-bind:key="news.id"
                  :title="news.title"
                  :text="news.description"
                  :image="news.urlToImage"
                  :link="news.url">
        </NewsCard>
    </div>
</template>

<script>
import NewsCard from './NewsCard.vue'

export default {
    name: 'CardList',
    props: {
        country: String
    },
    components: {
        NewsCard
    },
    data() {
        return {
            newsData: [{}]
        }
    },
    mounted() {
        this.getNews()
    },
    methods: {
        getNews() {
            this.axios.get(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=d7f41a32c26b4bbfb596d58b1a54c766`)
            .then((response) => {
                //alert('got json')
                this.newsData = response.data.articles
            })
            .catch(() => {
                alert('не получилось')
            })
        }
    },
    watch: {
        $route() {
            this.getNews()
        }
    }
}
</script>