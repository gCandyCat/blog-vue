<template>
  <div class="main">
    <skitter></skitter>
  </div>
  <div class="main clearfix">
    <inbloglist></inbloglist>
  </div>
</template>

<script>

import skitter from '../components/skitter'
import inbloglist from '../components/inbloglist'

export default {
  components: {
    skitter,inbloglist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

