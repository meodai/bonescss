<script>
export default {
  data() {
    return {
        'code': 'some source'
        'type': 'scss'
    }
  }
}
</script>

<style lang="sass">
@import "../../0.settings";
@import "../../mixins";

.code {
  @include site-width;
}
</style>

<template lang="jade">
code(class='syntax-' + {{type}})
    {{code}}
</template>
