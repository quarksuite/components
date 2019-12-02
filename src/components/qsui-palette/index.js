import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import QBSwatch from '../../bricks/qb-swatch';
import QBScheme from '../../bricks/qb-scheme';
import QBVariants from '../../bricks/qb-variants';

export default {
  render: () =>
    html`
      <qb-swatch></qb-swatch>
      <qb-scheme></qb-scheme>
      <qb-variants></qb-variants>
    `.define({ QBSwatch, QBScheme, QBVariants })
};
