import { newSpecPage } from '@stencil/core/testing';
import { SdsSpinner } from '../sds-spinner';

describe('sds-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdsSpinner],
      html: `<sds-spinner></sds-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <sds-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sds-spinner>
    `);
  });
});
