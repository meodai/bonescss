<script>
export default {
  components: {},
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

body {
  @include type;
}

@include textClasses(".t-");

</style>

<template lang="jade">
div.typography
  h1.t-title {{ title }}
  h2.t-subtitle {{ subtitle }}
  p.t-paragraph {{ lead }}
</template>
