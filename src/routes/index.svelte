<script>
	import Header from './_components/Header.svelte';
	import SubFooter from './_components/SubFooter.svelte';
	import Footer from './_components/Footer.svelte';
	import Section from './_components/Section.svelte';
</script>

<Header />

<main>
	<p />

	<Section title="Career" src="salesforce.png" cta="learn more" href="/career">
		<p slot="copy">
			Christopher McCulloh is a Lead UX Engineer at Salesforce. He has been with Salesforce since
			2012, and is the author of five patents and contributor to many different products with the
			company.
		</p>
	</Section>

	<Section title="Volunteering" src="horse.jpeg" href="/volunteering">
		<p slot="copy">
			Christopher loves working with kids. He volunteers with several youth oriented organizations.
		</p>
	</Section>

	<Section title="Physical Art" cta="see it" src="stream-3.jpeg" href="/art">
		<p slot="copy">
			Christopher loves creative endeavors. Everything from playing guitar, piano, and singing, to
			painting, carving, whittling, and even landscaping & gardening.
		</p>
	</Section>

	<Section title="Writing" cta="read it" src="books.jpeg" href="https://blog.cmcculloh.com/">
		<p slot="copy">
			Christopher loves to write, both fiction and non-fiction. You can see a small sampling of his
			dabbling at his blog.
		</p>
	</Section>
</main>

<Footer />

<style>
	main > p {
		margin-left: 20%;
		margin-right: 20%;
	}
</style>
