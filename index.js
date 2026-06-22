const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function main() {
    const options = new chrome.Options();
    // options.addArguments('--headless'); // hapus komentar kalau mau mode tanpa UI

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log('🚀 Mulai Selenium...');
        
        // Contoh: buka Google
        await driver.get('https://www.google.com');
        console.log('✅ Google terbuka');

        // Cari keyword
        const searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
        console.log('✅ Mencari...');

        await driver.wait(until.elementLocated(By.id('search')), 10000);
        console.log('✅ Hasil muncul!');

        const title = await driver.getTitle();
        console.log(`📄 Judul: ${title}`);

        console.log('🎉 Selesai!');

    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await driver.quit();
        console.log('👋 Browser ditutup');
    }
}

main();
