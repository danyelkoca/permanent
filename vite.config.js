import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: '/permanent/',
	plugins: [sveltekit()]
};

export default config;
