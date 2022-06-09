<script>
	import Icon from './Icon.svelte';

	let y;
	export let context = 'demo';

	let icon = 'recipe';
	if (context === 'demo') {
		icon = 'insert_tag_field';
	}
</script>

<svelte:window bind:scrollY={y} />

<nav class={y < 460 ? '' : 'fixed'}>
	<ul>
		<li><a href="https://github.com/cmcculloh"><Icon {icon} /></a></li>
	</ul>
</nav>

<style>
	nav {
		position: absolute;
		top: 540px;
		background-color: var(--grey-1);
		width: 60px;
		height: 60px;
	}

	nav.fixed {
		position: fixed;
		top: 80px;
	}
	nav li {
		list-style: none;
		padding: 0;
	}
	ul {
		margin: 14px 0 0 14px;
		padding: 0;
	}
</style>
