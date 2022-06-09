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
	<!--div class="controls">
		<div class="link" style="padding: 20px;">
			<a href="https://github.com/cmcculloh">Personal Github</a>
		</div>
		<div>
			<a href="#contact" class="button">Contact</a>
		</div>
	</div-->
</div>

<style>
	#form {
		display: flex;
		flex-wrap: wrap;
		max-width: 435px;
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
