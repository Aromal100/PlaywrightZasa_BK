import { test, expect } from '@playwright/test';
import { ProductSettingsPage } from '../../pages/product-management-pages/ProductSettingsPage.js';
import { AdminLoginPage } from '../../pages/login-pages/AdminLoginPage.js';
import { SidePages } from '../../pages/common-pages/SidePages.js';
import datas from '../../config/testData.json';

test.describe.serial('Product Settings flow', () => {

  test.beforeEach(async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username, datas.password);
  });

  test('Adding a color', async ({ page }) => {
    const pp = new ProductSettingsPage(page);
    const sp = new SidePages(page);
    await sp.openProductSettingsPage();
    await pp.addColor('jos', '#FF0000');
    await expect(pp.successMessage).toBeVisible();
  });

});