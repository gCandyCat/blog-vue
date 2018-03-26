<template>
  <blognav></blognav>
    <section class="wrap">
      <div class="main clearfix">
        <skitter></skitter>
      </div>
      <div class="main clearfix">
            <div class="info  clearfix">
                <inbloglist></inbloglist>
            </div>
            <div class="info  clearfix">
                <editblog></editblog>
            </div>
      </div>
    </section>
</template>

<script>
import blognav from './components/blognav'
import skitter from './components/skitter'
import inbloglist from './components/inbloglist'
import editblog from './components/editblog'


export default {
  components: {
    blognav,skitter,inbloglist,editblog
  }
}

</script>

<style>

</style>
