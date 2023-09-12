import { newE2EPage } from '@stencil/core/testing';

describe('sds-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sds-btn></sds-btn>');

    const element = await page.find('sds-btn');
    expect(element).toHaveClass('hydrated');
  });
});
