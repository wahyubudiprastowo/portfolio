const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const info = await page.evaluate(() => {
    const mega = document.querySelector(".mega");
    const cs = getComputedStyle(mega);
    const hero = document.querySelector(".hero");
    const stat = document.querySelector(".stat .t");
    return {
      megaFont: cs.font,
      megaFontSize: cs.fontSize,
      megaFamily: cs.fontFamily,
      megaWidth: mega.getBoundingClientRect().width,
      heroWidth: hero.getBoundingClientRect().width,
      heroCols: getComputedStyle(hero).gridTemplateColumns,
      statT: stat ? stat.getBoundingClientRect().width : 0,
      heroRightW: document.querySelector(".hero-right").getBoundingClientRect().width,
      bodyScrollW: document.body.scrollWidth,
      innerW: innerWidth,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
