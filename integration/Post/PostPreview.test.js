/* eslint-disable no-undef */

describe('Button', () => {
  it('visually looks correct', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?id=post--post-preview-with-images'
    );
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
