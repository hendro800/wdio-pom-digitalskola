import CartPage from "../pageobjects/cart.page";
import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";


describe('Login Test', () => {
    it('Tes 1 - Successful login And Validate user on Homepage - Page Objects', async () => {
        await LoginPage.open()
        await LoginPage.login("standard_user","secret_sauce")
        await HomePage.validateOnHomePage()
        await browser.pause(5000)
    });
    it('Tes 2 - Add Item to cart', async () => {
        await HomePage.clickItem();
        await browser.pause(5000)
    });
    it('Tes 3 - Validate Item Successful added to cart', async () => {
        await CartPage.open()
        await CartPage.validateItemOnCartPage()
        await CartPage.validateOnCartPage()
        await browser.pause(5000)
    });
});