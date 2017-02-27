<template>
  <div id="home">
    <keyword-panel :list="keyword"></keyword-panel>
  </div>
</template>

<script>
  import keywordPanel from './keywordPanel'
  import {mapGetters} from 'vuex'
  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {
      keywordPanel
    },
    methods: {},
    computed: {
      ...mapGetters({
        keyword: 'keyword',
        keywordLength: 'keywordLength'
      })
    },
    mounted: function () {
      this.$store.dispatch('UserKeywordFetch')
    },
    watch: {}
  }
</script>


<style scoped>

</style>
