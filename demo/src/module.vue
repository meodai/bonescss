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

$line: size(tiny) solid color(black);

.module {
  &__title {
    @include type(title-sub,
      (
        margin: size(medium, -1) size(medium, -1) size(medium) size(medium, -1),
        padding: size(medium) size(medium) calc( #{size(medium)} - .3ex ) ,
        border-bottom: $line
      )
    );
  }
  &__title-sub {
    @include type(title, (margin: 0 0 size(small)));
  }
  &__intro {
    background: color(white);
  }
  &__box {
    background: color(white);
    padding: size(medium);
    margin-bottom: size(medium);
    border: $line;
    box-shadow: size(small) size(small) 0 0 color(black);
  }
}
.demo {
  &__block {
    background: color(white);
    padding: size(medium);
    box-shadow: inset 0 0 0 2px rgba(color(black),.25);
    .demo__block {
      background: color(orange);
      padding: size(medium);
    }
  }
  &__title {
    @include type(title, (margin: 0));
  }
  &__title-sub {
    @include type(lead, (margin: 0 0 size(large), font-weight: $t-light));
  }
}


</style>

<template lang="jade">

.module.module__box
  .module__intro
    h2.module__title {{title}}
    h3.module__title-sub {{subtitle}}

    .module__description
      slot(name='description')
        | Module desciption

  .module__demo
    slot(name='demo')
      | Example

  pre.module__code(class='language-{{type}}')
    slot(name='code')


</template>
