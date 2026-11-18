
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    // Test folder
    timeout: 60000,
    testDir: './tests/e2e',

    // Run tests in parallel
    fullyParallel: true,

    // CI configuration
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
  ...(process.env.CI ? { workers: 1 } : {}),

    // HTML report
    reporter: 'html',

    // Shared browser settings
    use: {
        baseURL: process.env.URL,
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        launchOptions: {args: ['--start-maximized'],},
        viewport: null,
    },

    // Browser configuration
    projects: [

         {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] },
        },
         
     /*   {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
           name: 'Microsoft Edge',
           use: { ...devices['Desktop Edge'] },
        },
        */
    ],

});
