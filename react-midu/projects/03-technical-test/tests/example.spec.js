// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const fact = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const factText = await fact.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(factText?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com')).toBeTruthy()
})

test('button gets new fact when its clicked', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  await page.click('button')

  await page.waitForSelector('p')

  const fact = await page.getByRole('paragraph')
  const factText = await fact.textContent()
  await expect(factText?.length).toBeGreaterThan(0)
})
