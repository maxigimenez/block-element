<template>
  <div>
    <div v-if="loading">
      <partial-loading :html="partials.loading" />
    </div>
    <div v-else>
      <partial-body :html="partials.body" :data="data" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VNode } from 'vue';

import { PartialBody, PartialLoading } from '@/components/partials';
import { extract } from '@/helpers';
import { Partials } from '@/typings';

@Component({
  components: {
    PartialBody,
    PartialLoading,
  },
})
export default class App extends Vue {
  @Prop({
    default: 'get',
  }) method!: string;

  @Prop() url!: string;

  @Prop({
    default: () => ({}),
  }) headers!: object;

  @Prop({
    default: () => ({}),
  }) body!: object;

  loading = true;

  data = {};

  partials: Partials = {
    loading: '',
    body: '',
  }

  constructor() {
    super();
    if (!this.url) {
      throw new Error('URL must be defined');
    }
  }

  async mounted() {
    this.partials = extract(this.$slots.default as VNode[]);
    await this.request();
    this.loading = false;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  async request(): Promise<any> {
    const response = await fetch(this.url, {
      method: this.method,
    });
    this.data = await response.json();
  }
}
</script>
