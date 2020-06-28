import { VNode } from 'vue';
import { Partials } from '@/typings';

/* eslint-disable import/prefer-default-export */
export const extract = (slots: VNode[]): Partials => {
  if (!Array.isArray(slots)) {
    throw new Error('Partials must be defined');
  }

  let loading = '';
  let body = '';

  /* eslint-disable @typescript-eslint/no-explicit-any */
  slots.forEach((vnode: any) => {
    const { data } = vnode;
    const { attrs } = data;
    const block = attrs['data-block'];

    if (block) {
      switch (block) {
        case 'loading':
          loading = data.domProps.innerHTML;
          return;
        case 'body':
          body = data.domProps.innerHTML;
          return;
        default:
          throw new Error(`Unknown block type ${block}`);
      }
    }
  });

  return { loading, body };
};
