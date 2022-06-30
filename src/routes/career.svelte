<script>
	import Header from './_components/Header.svelte';
	import Footer from './_components/Footer.svelte';
	import Form from './_components/Form.svelte';
	// import ContextToggle from './_components/ContextToggle.svelte';

	const links = [
		{ url: 'https://github.com/cmcculloh', text: 'Github (personal)', styleClass: 'neutral' },
		{ url: 'https://github.com/cormacmccarthy', text: 'Github (work)' }
	];
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
				Christopher has worked on a large number projects over the years, has <a
					href="https://patents.justia.com/inventor/christopher-daniel-mcculloh"
					><strong>four patents pending</strong></a
				>, and
				<a
					href="https://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l=50&s1=%2220210149638%22.PGNR.&OS=DN/20210149638&RS=DN/20210149638"
					><strong>one granted</strong></a
				>. He is user number 58 on StackOverflow, has commits on the jquery-ui, jshint, and
				backbone.marionette repositories (among others), and wrote & tech edited several books on
				web development.
			</p>
			<p>
				You can see his career history on <a href="https://www.linkedin.com/in/cmcculloh/"
					>LinkedIn</a
				>
			</p>
			<div class="basic-grid">
				<!-- https://web.archive.org/web/20130601233817/http://www.exacttarget.com/exacttarget-partners -->
				<a
					href="https://web.archive.org/web/20130610091006/http://pages.exacttarget.com/JoinHubExchange"
					><img alt="banner" src="exacttarget.png" /></a
				>
				<a href="https://web.archive.org/web/20120606070704/http://www.finishline.com/"
					><img alt="banner" src="finishline.png" /></a
				>
				<a
					href="https://github.com/cmcculloh?achievement=arctic-code-vault-contributor&tab=achievements"
					><img alt="banner" src="jqueryui.png" /></a
				>
				<a href="https://stackoverflow.com/users/58/cmcculloh?tab=profile"
					><img alt="banner" src="stackoverflow.png" /></a
				>
				<a
					href="https://www.amazon.com/HTML-XHTML-All-Reference-Dummies/dp/0470186275/ref=sr_1_1?crid=24KSKFLLV3O60&keywords=chris+mcculloch+for+dummies&qid=1654793555&sprefix=chris+mcculloh+for+du%2Caps%2C816&sr=8-1"
					><img alt="banner" src="amazon.png" /></a
				>
			</div>
		</div>

		<div>
			<Form {links}>
				<span slot="list">
					<ul>
						<li>
							<strong>UX R&D Team</strong> <em>(2021-current)</em><br />Christopher worked on AI &
							ML design generation.
						</li>
						<li>
							<strong>CC UXE Team</strong> <em>(2016-2021)</em><br />Christopher created many
							product demos shown on mainstages at Dreamforces over the years. Christopher created a
							five-times-patented product demo framework that allowed full highly stable product
							demos to be created in days (instead of months).
						</li>
						<li>
							<strong>MC UX Team</strong> <em>(2013-2016)</em><br />Christopher helped to build Fuel
							UX; a Bootstrap (3 & 4) driven framework that enabled Salesforce Marketing Cloud
							developers and customers to create a user interface with the look & feel of existing
							Salesforce ExactTarget Marketing Cloud applications.
						</li>
						<li>
							<strong>Platform Dev Team</strong> <em>(2012-2013)</em><br />Christopher built the Hub
							Exchange site that allowed customer to aquire API keys and integrate with Exact
							Target.
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
