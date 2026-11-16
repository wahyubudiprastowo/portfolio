const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const info = await page.evaluate(() => {
    const rs = getComputedStyle(document.documentElement);
    const pageEl = document.querySelector(".page");
    const pcs = getComputedStyle(pageEl);
    const h = document.querySelector(".h-en, .hero-name");
    return {
      pad: rs.getPropertyValue("--pad"),
      display: rs.getPropertyValue("--display"),
      pagePadding: pcs.padding,
      maxw: rs.getPropertyValue("--maxw"),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
