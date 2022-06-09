import { beforeEach, test, expect } from 'vitest';
import { cleanup, render } from '@testing-library/svelte';

import Header from '../Header.svelte';

beforeEach(cleanup);

test('can render', () => {
	render(Header);
});

test('Displays default title', () => {
	const { getByText } = render(Header);
	expect(getByText('CMcCulloh')).toBeDefined();
});

test('Displays passed in title', () => {
	const { getByText } = render(Header, { title: 'Careers' });
	expect(getByText('Careers')).toBeDefined();
});
