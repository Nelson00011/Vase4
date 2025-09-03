const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// TabButton.test.jsx

// Minimal React setup for Puppeteer
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>TabButton Test</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      window.testProps = {};
      ${fs.readFileSync(path.resolve(__dirname, './TabButton.jsx'), 'utf8')}
      function renderTabButton(props) {
        ReactDOM.render(
          React.createElement(TabButton, props, props.children),
          document.getElementById('root')
        );
      }
      window.renderTabButton = renderTabButton;
    </script>
  </body>
</html>
`;

describe('TabButton', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
  });

  afterAll(async () => {
    await browser.close();
  });

  test('renders children text', async () => {
    await page.evaluate(() => {
      window.renderTabButton({ children: 'Tab 1', onSelect: () => {}, isSelected: false });
    });
    const text = await page.$eval('button', el => el.textContent);
    expect(text).toBe('Tab 1');
  });

  test('adds active class when isSelected is true', async () => {
    await page.evaluate(() => {
      window.renderTabButton({ children: 'Tab 2', onSelect: () => {}, isSelected: true });
    });
    const className = await page.$eval('button', el => el.className);
    expect(className).toBe('active');
  });

  test('does not add active class when isSelected is false', async () => {
    await page.evaluate(() => {
      window.renderTabButton({ children: 'Tab 3', onSelect: () => {}, isSelected: false });
    });
    const className = await page.$eval('button', el => el.className);
    expect(className).toBe('');
  });

  test('calls onSelect when button is clicked', async () => {
    await page.exposeFunction('onSelectSpy', () => {
      window.__clicked = true;
    });
    await page.evaluate(() => {
      window.__clicked = false;
      window.renderTabButton({
        children: 'Tab 4',
        onSelect: window.onSelectSpy,
        isSelected: false
      });
    });
    await page.click('button');
    const clicked = await page.evaluate(() => window.__clicked);
    expect(clicked).toBe(true);
  });
});