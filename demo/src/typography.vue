<script>
export default {
  props: ['title', 'subtitle', 'lead'],
  data() {
    return {
      title: 'Lorem ipsum dor sit amet',
      subtitle: 'Lorem ipsum dor sit amet etc...',
      lead: 'leadtext lead text'
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
      line-height   : 1.3
    ),
    title: (
      font-weight   : $t-bold,
      font-size     : 1.75rem,
      line-height   : 1.2
    ),
    lead: (
      font-size     : 1.2rem
    ),
    paragraph: (
      font-size     : 1rem
    ),
    sub: (
      font-size     : 0.75rem
    ),
  ),
  tablet: (
    title-page: (
      color         : silver
    )
  ),
  mobile: (
    default: (
      font-size     : 1.25rem,
      line-height   : 1.5
    ),
    title-page: (
      font-size     : 3rem,
      border-bottom : 1px solid black,
      margin-bottom : 0.25em,
      color         : black
    )
  )
);

body, html {
  @include type;
}

@include textClasses(".t-");

.content {
  h2, h3 {
    @include type(title);
  }
  h2 + p {
    @include type(lead, (margin-top: 0, padding-top: 1em, border-top: 1px solid black));
  }
  p {
    @include type(paragraph);
  }
  sub {
    @include type(sub);
  }
  strong {
    font-weight: $t-bold;
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
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit enim eu sem porta scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a viverra ligula. Nunc eleifend sagittis neque. Donec gravida elit in felis volutpat pellentesque. Donec vitae neque ac est molestie convallis. Vivamus scelerisque risus non neque accumsan lobortis. Nam nec lacinia tellus, id bibendum est. Etiam porttitor nisi non consectetur suscipit. Etiam sit amet turpis elementum, accumsan lectus eget, pharetra sapien. Praesent id ante bibendum, ornare elit ac, elementum quam. Cras gravida nibh sed hendrerit mattis. Donec iaculis lorem ut sem tristique ultrices id nec ligula. Proin sapien nunc, maximus ac enim id, facilisis maximus nibh. Suspendisse pulvinar semper enim, aliquet placerat massa lacinia in.
    p Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit. Nam hendrerit enim eu sem porta scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a viverra ligula. Nunc eleifend sagittis neque. Donec gravida elit in felis volutpat pellentesque. Donec vitae neque ac est molestie convallis. Vivamus scelerisque risus non neque accumsan lobortis. Nam nec lacinia tellus, id bibendum est. Etiam porttitor nisi non consectetur suscipit. Etiam sit amet turpis elementum, accumsan lectus eget, pharetra sapien. Praesent id ante bibendum, ornare elit ac, elementum quam. Cras gravida nibh sed hendrerit mattis. Donec iaculis lorem ut sem tristique ultrices id nec ligula. Proin sapien nunc, maximus ac enim id, facilisis maximus nibh. Suspendisse pulvinar semper enim, aliquet placerat massa lacinia in.
    sub * this is some kind of annotation
    h3 Second title
    p Praesent risus elit, semper id arcu id, molestie aliquam leo. Proin enim libero, ornare tristique enim nec, tincidunt volutpat diam. Fusce interdum ipsum vulputate, aliquam massa eu, consequat sapien. Aenean pretium eu ante quis blandit. In ex dolor, dignissim vitae nunc sed, congue gravida quam. Nulla ullamcorper libero ut commodo congue. Ut a tempor nibh. Aliquam orci mauris, pulvinar vel commodo vitae, porttitor a odio. Nunc ut accumsan nibh. Integer ultrices sit amet ante eu rutrum.

</template>
