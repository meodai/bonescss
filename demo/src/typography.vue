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

.title {
  @include type(title);
}

.subtitle {
  @include type(subtitle);
}

.paragraph {
  @include type(paragraph);
}

</style>

<template lang="jade">
div.typography
  h1.title {{ title }}
  h2.subtitle {{ subtitle }}
  p.lead {{ lead }}
</template>
