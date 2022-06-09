<script>
	import Header from './_components/Header.svelte';
	import Footer from './_components/Footer.svelte';
	import Form from './_components/Form.svelte';
	import ContextToggle from './_components/ContextToggle.svelte';
</script>

<Header />

<!-- <ContextToggle /> -->

<main>
	<h2>Career</h2>
	<p>
		<strong>Christopher McCulloh</strong> has been crafting websites for
		<strong>two decades</strong>
	</p>

	<div class="two-column">
		<div>
			<p>
				Christopher currently works on the <strong>UX R&D team</strong> at
				<strong>Salesforce</strong>
			</p>
			<img alt="salesforce.com homepage" src="salesforce.png" width="100%" />

			<p>
				Christopher has worked on a large number projects over the years and holds <strong
					>five patents</strong
				>. He is user number 58 on StackOverflow, has commits on the jshint, and backbone.marionette
				repositories (among others), and wrote & tech edited several books on web development.
			</p>
			<div class="basic-grid">
				<img alt="banner" src="exacttarget.png" />
				<img alt="banner" src="finishline.png" />
				<img alt="banner" src="jqueryui.png" />
				<img alt="banner" src="stackoverflow.png" />
				<img alt="banner" src="amazon.png" />
			</div>
		</div>

		<div>
			<Form>
				<span slot="title">Career</span>
				<span slot="list">
					<ul>
						<li>
							<strong>Platform Dev Team</strong><br />Christopher built the Hub Exchange site that
							allowed customer to aquire API keys and integrate with Exact Target.
						</li>
						<li>
							<strong>Marketing Cloud UX Team</strong><br />Christopher helped to build Fuel UX; a
							Bootstrap (3 & 4) driven framework that enabled Salesforce Marketing Cloud developers
							and customers to create a user interface with the look & feel of existing Salesforce
							ExactTarget Marketing Cloud applications.
						</li>
						<li>
							<strong>Cross Cloud UXE Team</strong><br />Christopher created many product demos
							shown on mainstages at Dreamforces over the years. Christopher created a
							five-times-patented product demo framework that allowed full highly stable product
							demos to be created in days (instead of months).
						</li>
						<li>
							<strong>UX R&D Team</strong><br />Christopher worked on AI & ML design generation.
						</li>
					</ul></span
				>
			</Form>
		</div>
	</div>
</main>

<Footer />

<style>
	.basic-grid {
		display: grid;
		gap: 1rem;

		grid-template-columns: repeat(2, minmax(68px, 1fr));
	}

	.basic-grid img {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: --var(--grey-2);
		font-size: 3rem;
		color: #fff;
		box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
		width: 100%;
		height: 100%;
		transition: all 500ms;
		overflow: hidden;

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.basic-grid img:hover {
		box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
		transform: translateY(-3px) scale(1.1);
	}

	.two-column {
		display: flex;
		gap: 2rem;
		width: 60%;
		min-width: 910px;
		margin: 0 auto;
	}

	.two-column > div {
		flex: 1000px;
		min-width: 40%;
	}

	.two-column > div:first-child {
		min-width: 60%;
	}

	main > p {
		font-weight: 300;
		font-size: 28px;
	}

	h2,
	main > p,
	.two-column {
		margin: 40px 15%;
	}
</style>
