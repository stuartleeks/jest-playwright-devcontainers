jest.setTimeout(60 * 1000)


describe("Finding devcontainer-cli", () => {
  it("shoud load GitHub", async () => {
    await page.goto('https://github.com/');
  });

  it("should run the rest", async() => {

    await page.fill('[placeholder="Search GitHub"]', 'devcontainer-cli');

    await page.press('[placeholder="Search GitHub"]', 'Enter');

    await page.click('text=stuartleeks/devcontainer-cli');
    await expect(page.url()).toBe('https://github.com/stuartleeks/devcontainer-cli');

    await page.click('#readme >> text=devcontainer-cli');

    await expect(page).toHaveSelector('#readme >> text=devcontainer-cli');
  });
})