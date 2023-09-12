import { newSpecPage } from '@stencil/core/testing';
import { SdsBtn } from '../sds-btn';

describe('sds-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdsBtn],
      html: `<sds-btn></sds-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <sds-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sds-btn>
    `);
  });
});
