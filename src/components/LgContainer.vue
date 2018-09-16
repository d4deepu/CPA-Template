<template>
  <section>
    <div class="mn">
      <div id="main">
          <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  display: block;
}
div.mn {
   background: rgba(23, 26, 33, 0.95);
   background-image: url(../assets/panel-overlay.png);
  background-size: cover;
  max-width: 600px;
  min-height: 300px;
  color:white;
  position: relative;
  margin: 0 auto;
  border-radius: 2px;
}
div.mn div#main {
  padding: 20px 10px 20px 10px;
  width: 100%;
  height: 100%;
  z-index:2;
}
</style>
