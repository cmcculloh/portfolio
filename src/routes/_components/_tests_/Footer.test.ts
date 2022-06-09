/**
 * @vitest-environment jsdom
 */

import { beforeEach, test, expect } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';

import Footer from '../Footer.svelte';

beforeEach(cleanup);

test('can render', () => {
	render(Footer);
});

test('Displays Home Icon Link', () => {
	const { getByText } = render(Footer);
	expect(getByText('Home')).toBeDefined();
});
