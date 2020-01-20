<template>
    <div>
        <!-- <NewsCard title="Top 10 Australian beaches" subtitle="Number 10" text="Whitehaven Beach Whitsunday Island, Whitsunday Islands"></NewsCard> -->
        <!-- <p v-for="news in newsData" v-bind:key="news.id">{{news}} конец </p> -->
        <NewsCard v-for="news in newsData"
                  v-bind:key="news.id"
                  :title="news.title"
                  :text="news.description">
        </NewsCard>
    </div>
</template>

<script>
import NewsCard from './NewsCard.vue'

export default {
    name: 'CardList',
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
            this.axios.get('https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766')
            .then((response) => {
                //alert('got json')
                this.newsData = response.data.articles
            })
            .catch(() => {
                alert('не получилось')
            })
        }
    }
}
</script>