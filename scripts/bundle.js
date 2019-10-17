const fs = require('fs-extra');
const cheerio = require('cheerio');
const logger = require('debug')('bundle.js');
const concat = require('concat');

const element = 'packt-magento-dropin-free-learning';

(async function build() {
    try {
        // clean up if already exists
        await fs.remove('./dist/bundle');

        // recreate bundle folder
        await fs.ensureDir('./dist/bundle');

        // parsing index.html
        const htmlContent = await fs.readFile('./dist/magento-dropin/index.html');
        const $ = cheerio.load(htmlContent.toString());
        const files = $('script').get()
            .map(item => `./dist/magento-dropin/${item.attribs.src}`);
        logger('Scripts found:', files);

        // bundling scripts: es5
        const es5Bundle = files.filter(item => item.endsWith('es5.js'));
        logger('Bundling es5 scripts:', es5Bundle);
        await concat(es5Bundle, './dist/bundle/magento-dropin-es5.js');
        logger('Generated:', './dist/bundle/magento-dropin-es5.js');

        // bundling scripts: es2015
        const es6Bundle = files.filter(item => item.endsWith('es2015.js'));
        logger('Bundling es2015 scripts:', es6Bundle);
        await concat(es6Bundle, './dist/bundle/magento-dropin-es2015.js');
        logger('Generated:', './dist/bundle/magento-dropin-es2015.js');

        // importing scripts.js
        await fs.copyFile('./dist/magento-dropin/scripts.js', './dist/bundle/magento-dropin-scripts.js');
        logger('Generated:', './dist/bundle/magento-dropin-scripts.js');

        // generating testing index.html
        const indexHtml = `<!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>MagentoDropin</title>
          <base href="/">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <${element}></${element}>
          <script src="magento-dropin-es2015.js" type="module"></script>
          <script src="magento-dropin-es5.js" nomodule defer></script>
          <script src="magento-dropin-scripts.js" defer></script>
        </body>
        </html>
        `;
        fs.writeFileSync('./dist/bundle/index.html', indexHtml);
        logger('Generated index.html:', indexHtml);

    } catch (error) {
        logger('Failed to bundle:', error);
    }
})()