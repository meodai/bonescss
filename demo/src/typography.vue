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

<style lang="sass!sass-resources">
@include textClasses(".t-");

.content {
  h2 {
    @include type(title, (margin-top: 0));
  }
  h3 {
    @include type(lead);
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
  .content
    h2.demo__block Title
    p Paragraph
    sub * this is some kind sub
    h3 Lead
    p Paragraph
</template>
