<script>
export default {
}
</script>

<style lang="sass!sass-resources">
/*$sizes: (
  huge                  : $s-base * 3,
  large                 : $s-base * 1.5,
  medium                : $s-base,
  small                 : $s-base * .5
)*/

@each $key, $size in $sizes {
  .size--#{$key} {
    max-width: $size;
    height: $size;
  }
}

.size {
  display: inline-block;
  margin-right: size(small);
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  transition: 200ms max-width;
  &:hover {
    overflow: visible;
    max-width: size(huge, 2);
  }
}

</style>

<template lang="jade">
.demo__block
  .demo__block.size.size--small small
  .demo__block.size.size--medium medium
  .demo__block.size.size--lrage large
  .demo__block.size.size--huge huge
</template>
