<template>
  <v-runtime-template :template="html" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import VRuntimeTemplate from 'v-runtime-template';

@Component({
  components: {
    VRuntimeTemplate,
  },
})
export default class PartialBody extends Vue {
  @Prop() html!: string;

  @Prop({
    default: () => ({}),
  }) data!: object;

  mounted(): void {
    if (!this.html) {
      throw new Error('data-block="body" is required');
    }
  }
}
</script>
