<script>
	import Icon from './Icon.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li><a href="/"><Icon /></a></li>
		</ul>
	</nav>
</footer>

<style>
	nav a {
		color: white;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 0;
		background: var(--grey-1);
		height: 60px;
		bottom: 0;
		margin-bottom: -40px;
		width: 100%;
		color: white;
	}

	footer {
		position: fixed;
		margin-left: 0;
		background: var(--blue-2);
		padding: 0;
		margin: 0;
		height: 60px;
		bottom: 0;
		width: 100%;
	}

	footer nav {
		background: transparent;
		height: 100%;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	footer,
	footer a {
		color: white;
	}

	nav li {
		list-style: none;
		padding: 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}

	li {
		line-height: 58px;
	}

	a {
		margin-top: 6px;
		display: inline-block;
		line-height: 32px;
		padding: 12px;
		transition: all 0.1s;
	}

	a:hover {
		background: var(--blue-1);
	}
</style>
