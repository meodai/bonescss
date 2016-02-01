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
$line-dashed: size(tiny) dashed color(black);

.module {
  &__title {
    @include type(title-sub,
      (
        margin: size(medium, -1) size(medium, -1) size(medium) size(medium, -1),
        padding: size(medium) size(medium) calc( #{size(medium)} - .3ex ),
        border-bottom: $line
      )
    );
  }
  &__title-sub {
    @include type(title, (margin: 0));
  }
  &__intro {
    background: color(white);
  }
  &__box {
    background: color(white);
    padding: size(medium);
    margin-bottom: size(huge);
    border: $line;
    box-shadow: size(small) size(small) 0 0 color(black);
  }
  &__description {
    margin: size(medium, -1) size(medium, -1) size(medium) size(medium, -1);
    padding: size(medium) size(medium) calc( #{size(medium)} - .3ex );
    border-bottom: $line;
  }
}
.demo {
  &__block {
    padding: size(medium);
    margin-bottom: size(large);
    color: color(white);
    text-shadow: size(tiny, .5) size(tiny, .5) 0 color(black);
    background: color(green);
    box-shadow: inset size(tiny) size(tiny) 0 0 color(black);
    .demo__block {
      padding: size(medium);
      margin-bottom: 0;
      color: color(black);
      text-shadow: none;
      box-shadow: size(tiny) size(tiny) 0 0 color(black);
      background: color(white);
    }
  }
  &__title {
    @include type(title, (margin: 0));
  }
  &__title-sub {
    @include type(paragraph, (margin: 0 0 size(large)));
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
