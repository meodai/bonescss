<script>
export default {
  props: ['title', 'subtitle', 'type'],
  data() {
    return {
      title: 'Module title',
      subtitle: 'Module sub-title',
      type: 'scss'
    }
  }
}
</script>

<style lang="sass!sass-resources">

</style>

<template lang="jade">

.module
  h2.module__title {{title}}
  h3.module__title-sub {{subtitle}}

  slot(name='description')
    | Module desciption

  .module__demo
    slot(name='demo')
      | Example

  pre.module__code(class='language-{{type}}')
    slot(name='code')


</template>
