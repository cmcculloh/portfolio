<script>
	let y;
	export let fold = 710;
</script>

<svelte:window bind:scrollY={y} />

<div id="form" class={y < fold ? '' : 'fixed'}>
	<h4><slot name="title" /></h4>
	<div class="form">
		<slot name="list" />
	</div>
	<div class="controls">
		<a class="link button neutral" href="https://github.com/cmcculloh">Github (personal)</a>

		<a class="link button" href="https://github.com/cormacmccarthy">Github (work)</a>
	</div>
</div>

<style>
	.button {
		display: inline-block;
		box-sizing: content-box;
		margin: 0;
		outline: none;
		text-align: center;
		text-decoration: none;
		white-space: normal;
		background: #0070d2;
		border: 1px solid #0070d2;
		border-radius: 4px;
		color: white;
		font-size: 14px;
		font-weight: 700;
		height: 20px;
		letter-spacing: 0.6px;
		line-height: 18px;
		padding: 19px 24px;
		transition: all 0.1s;
		margin-top: 10px;
	}
	.button:hover {
		background-color: #014486;
		border-color: #014486;
	}

	.button.neutral {
		background: #ffffff;
		border: 1px solid #c9c9c9;
		color: #0176d3;
	}

	.button.neutral:hover {
		background-color: #f3f3f3;
		color: #014486;
	}

	.link {
		padding: 20px;
		font-size: 0.8rem;
		margin-top: 10px;
	}
	#form {
		display: flex;
		flex-wrap: wrap;
		max-width: 435px;
	}
	.controls {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 0 10px;
	}
	.controls > a {
		flex-grow: 1;
	}
	.form {
		background-color: var(--grey-3);
		padding: 20px;
		border-radius: 24px;
		display: flex;
		gap: 10px 20px;
		flex-wrap: wrap;
	}

	#form.fixed {
		position: fixed;
		top: 20px;
	}

	#form > h4:first-of-type {
		margin-top: 0;
	}

	#form > h4 {
		padding-left: 30px;
	}
	#form > h4 {
		font-family: 'Helvetica';
		margin-bottom: 4px;
		width: 100%;
	}

	#form ul {
		list-style-type: none;
		margin: 0;
		padding-left: 10px;
	}

	#form > div > ul > li {
		margin-top: 16px;
	}

	#form > div > ul > li:first-of-type {
		margin-top: 0;
	}
</style>
