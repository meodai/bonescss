<style lang="sass!sass-resources">
@import
  "../../vendor/normalize",
  // "vendor/reset",
  "../../1.base",
  "../../2.layout";

body {
  background: color(orange);
}

.site-width {
  @include site-width;
  padding: 0 size(large);
}

@import
  "../../3.helpers",
  "../../4.print",
  "../../5.states";

</style>
