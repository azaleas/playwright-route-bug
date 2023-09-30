import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.route(
    'https://jsonplaceholder.typicode.com/todos/1',
    async route => {
      const json = { title: 'Mock supplied title' }
      await route.fulfill({ json })
    }
  )
  await page.goto('http://localhost:5173')
})

test('should log the messages from Alan and Beta', async ({ page }) => {
  const messages = []

  page.on('console', msg => {
    const text = msg.text()
    if (!text.includes('[vite]')) {
      messages.push(msg.text())
    }
  })

  await page.waitForEvent('console', {
    predicate: () => {
      return messages.length === 2
    }
  })

  const [alanMessage, betaMessage] = messages

  await expect(alanMessage, 'First Message').toBe('alan received message: test')
  await expect(betaMessage, 'Second Message').toContain(
    'beta sent message: Mock supplied title'
  )
})
