import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: { includePaths: ['src', 'node_modules'] }
	}),

	kit: {
		paths: {
			base: ''
		},
		appDir: 'internal',
		adapter: adapter({ pages: 'build' }),
		prerender: {
			default: true
		},

		vite: {
			test: {
				environment: 'jsdom',
				exclude: [
					'**/node_modules/**',
					'**/dist/**',
					'**/cypress/**',
					'**/.{idea,git,cache,output,temp}/**',
					'**/tests/**'
				],
				watch: false
			}
		}
	}
};

export default config;
