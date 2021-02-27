// https://github.com/playwright-community/jest-playwright/#configuration
module.exports = {
  // browsers: ["chromium", "firefox", "webkit"],
  browsers: ["chromium"],
  exitOnPageError: false,
  launchOptions: {
    // headless: false
    headless: true
  }
}