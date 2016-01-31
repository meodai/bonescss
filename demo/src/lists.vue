<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="sass">
@import "demo-settings";

.site-width {
  @include site-width;
}
</style>

<template lang="jade">
div.lists
  h3 Mixin usage
  code
    |@include site-width;


  h3 Markup usage
  code.
    .l-site-width

</template>
