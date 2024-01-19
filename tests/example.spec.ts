import { IDrug } from '@/app/api/types';
import { test, expect } from '@playwright/test';

const drug:IDrug = {
    id: 1,
    name_en: 'test en name',
    name_fr: 'test fr name',
    Type: 'test type',
    Category: 'test category',
    Max_Allowed_Qty: '1110',
    Unit: 'test unit',
    Description: 'test description',
}

test('can add drug', async ({ page }) => {
  await page.goto('http://localhost:3000/new');

  (await page.$('input[name="name_en"]'))?.fill(drug.name_en);
  (await page.$('input[name="name_fr"]'))?.fill(drug.name_fr);
  (await page.$('input[name="Type"]'))?.fill(drug.Type);
  (await page.$('input[name="Category"]'))?.fill(drug.Category);
  (await page.$('input[name="Max_Allowed_Qty"]'))?.fill(drug.Max_Allowed_Qty!);
  (await page.$('input[name="Unit"]'))?.fill(drug.Unit);
  (await page.$('textarea[name="Description"]'))?.fill(drug.Description);

  const responsePromise = page.waitForResponse(/drugs$/);
  (await page.$('button[type="submit"]'))?.click();
  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.message).toBe('Drug created successfully');
  // Expect a title "to contain" a substring.


  // seo
});