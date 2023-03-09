import { expect, test } from '@playwright/test';
test.describe('ホーム画面', () => {
  test('初期表示が正しく表示されること', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Population Transition Graph in Japan');
    await expect(page.getByRole('checkbox')).toHaveCount(47);
    await expect(page.getByText('👉 都道府県を選択してください')).toBeVisible();
    await expect(page.locator('.recharts-wrapper')).not.toBeVisible();
  });

  test('チェックボックスを選択するとグラフが描画されて凡例に対象の都道府県表示されること', async ({
    page,
  }) => {
    await page.goto('/');

    await page.getByRole('checkbox', { name: '北海道' }).check();

    await expect(page.locator('.recharts-wrapper')).toBeVisible();
    await expect(page.locator('.recharts-legend-wrapper').getByText('北海道')).toBeVisible();
  });

  test('チェックボックスの選択を解除するとグラフが更新されて凡例から対象の都道府県が消えること', async ({
    page,
  }) => {
    await page.goto('/');

    await page.getByRole('checkbox', { name: '北海道' }).check();

    await expect(page.locator('.recharts-wrapper')).toBeVisible();
    await expect(page.locator('.recharts-legend-wrapper').getByText('北海道')).toBeVisible();

    await page.getByRole('checkbox', { name: '北海道' }).uncheck();

    await expect(page.getByText('👉 都道府県を選択してください')).toBeVisible();
  });

  test('クリアボタンを押すとグラフの描画が消えて初期表示に戻ること', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('checkbox', { name: '北海道' }).check();
    await page.getByRole('checkbox', { name: '青森県' }).check();
    await page.getByRole('checkbox', { name: '岩手県' }).check();

    await expect(page.locator('.recharts-legend-wrapper').getByText('北海道')).toBeVisible();
    await expect(page.locator('.recharts-legend-wrapper').getByText('青森県')).toBeVisible();
    await expect(page.locator('.recharts-legend-wrapper').getByText('岩手県')).toBeVisible();

    await page.getByRole('button', { name: 'Clear' }).click();

    await expect(page.getByText('👉 都道府県を選択してください')).toBeVisible();
  });
});
