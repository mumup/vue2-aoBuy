<template>
  <div class="box">
    <swipeout>
      <swipeout-item v-for="item in list">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">Yes</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">Right</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-t">
          <p>{{ item.key_name }}</p>
        </div>
      </swipeout-item>
    </swipeout>
  </div>
</template>

<script>
  import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
  export default {
    name: 'keywordPanel',
    props: {
      list: Array
    },
    data () {
      return {}
    },
    components: {
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      XButton
    },
    methods: {},
    computed: {}
  }
</script>


<style scoped>

</style>
