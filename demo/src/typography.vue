<script>
export default {
  props: ['title', 'subtitle', 'lead'],
  data() {
    return {
      title: 'Lorem ipsum dor sit amet',
      subtitle: 'Lorem ipsum dor sit amet etc...',
      lead: 'leadtext lead text',
    }
  }
}
</script>

<style lang="sass">
@import "../../0.settings";
@import "../../mixins";

$types: (
  desktop: (
    default: (
      font-size     : 1rem,
      font-family   : $t-default-font-family,
      font-weight   : $t-regular,
      font-style    : normal,
      line-height   : 1.5
    ),
    title-page: (
      font-weight   : $t-bold,
      font-size     : 4rem,
      line-height   : 1.3,
      margin        : 0
    ),
    title-sub: (
      font-weight   : $t-bold,
      font-size     : 2.25rem,
      line-height   : 1.3,
      margin        : 0
    ),
    title: (
      font-weight   : $t-bold,
      font-size     : 1.75rem,
      line-height   : 1.2,
      margin        : 0 0 1em
    ),
    lead: (
      font-size     : 1.2rem
    ),
    paragraph: (
      font-size     : 1rem
    )
  ),
  mobile: (
    default: (
      font-size     : 1.15rem,
      line-height   : 1.5
    ),
    title-page: (
      font-size     : 3rem,
      border-bottom : 1px solid black,
      margin-bottom : 0.25em
    )
  )
);

body {
  @include type;
}

@include textClasses(".t-");

.content {
  h2 {
    @include type(title);
  }
  h2 + p {
    @include type(lead, (margin-top: 0));
  }
  p {
    @include type(paragraph);
  }
}

</style>

<template lang="jade">
div.typography
  h1.t-title-page {{ title }}
  h2.t-title-sub {{ subtitle }}
  p.t-lead {{ lead }}
  .content
    h2 Lorem Ipsum dolor sit amet
    p this is the first paragraph
    p this is an other paragraph

</template>
