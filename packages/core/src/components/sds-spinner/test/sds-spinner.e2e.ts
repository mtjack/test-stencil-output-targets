import { newE2EPage } from '@stencil/core/testing';

describe('sds-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sds-spinner></sds-spinner>');

    const element = await page.find('sds-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
