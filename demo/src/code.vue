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

<style lang="sass!sass-resources">
.code {
  @include site-width;
}
</style>

<template lang="jade">
code(class='syntax-' + {{type}})
    {{code}}
</template>
