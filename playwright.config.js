/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000
	},
	testDir: './tests/',
	testIgnore: ['./src/**', './node_modules/**', './.svelte-kit/**', './static/**']
};

export default config;
