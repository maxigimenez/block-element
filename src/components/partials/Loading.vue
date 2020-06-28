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
export default class PartialLoading extends Vue {
  @Prop({
    default: '',
  }) html!: string;
}
</script>
