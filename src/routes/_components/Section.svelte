<script>
	export let title;
	export let src = '/salesforce.png';
	export let alt = 'banner';
	export let cta = 'see it';
	export let href = '/career';
</script>

<section>
	<h3>{title}</h3>
	<img {alt} {src} width="400px" />
	<div>
		<slot name="copy" />
		<a class="button" {href}>{cta}</a>
	</div>
</section>

<style>
	section {
		padding-left: 20%;
		padding-right: 20%;
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto;
		grid-template-areas:
			'header header'
			'banner copy';
		gap: 15px;
		margin-bottom: 100px;
	}

	section h3 {
		grid-area: header;
		margin-bottom: 10px;
	}

	section img {
		grid-area: banner;
	}

	section div {
		grid-area: copy;
		justify-content: flex-end;
		display: flex;
		flex-wrap: wrap;
	}
</style>
