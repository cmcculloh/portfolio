<script>
	import Header from './_components/Header.svelte';
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

	<Section title="Code" src="code.png" cta="read it" href="https://cmcculloh.com/code">
		<p slot="copy">
			One of Christopher's favorite courses in college was TCM 220, which was a technical writing
			course. Christopher has maintained a technical blog off and on over the years, although most
			of it is now lost. You can see the latest incarnation of his development blog here.
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
