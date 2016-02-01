<script>
export default {
  data() {
    return {
      'title': 'demo title'
      'subtitle': 'demo usage'
    }
  }
}
</script>

<style lang="sass!sass-resources">


</style>

<template lang="jade">
h3(class="demo__title") {{title}}
h4(class="demo__title-sub") {{subtitle}}
  <ul class="l-horizontal-list demo__block">
    <li class="demo__block">first</li>
    <li class="demo__block">second</li>
    <li class="demo__block">third</li>
  </ul>
</template>
