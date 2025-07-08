const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Enable console logging
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('http://localhost:3001/font-test');
  
  // Wait for fonts to load
  await page.waitForTimeout(2000);
  
  // Check computed styles
  const fontInfo = await page.evaluate(() => {
    const testElement = document.querySelector('.font-pacifico');
    const htmlElement = document.documentElement;
    
    if (testElement) {
      const computed = window.getComputedStyle(testElement);
      const htmlComputed = window.getComputedStyle(htmlElement);
      
      return {
        elementFontFamily: computed.getPropertyValue('font-family'),
        pacificoVariable: htmlComputed.getPropertyValue('--font-pacifico'),
        htmlClasses: htmlElement.className,
        bodyClasses: document.body.className,
        testElementText: testElement.textContent
      };
    }
    return null;
  });
  
  console.log('Font Information:', fontInfo);
  
  await browser.close();
})();