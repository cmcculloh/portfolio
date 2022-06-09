<script>
	import Header from './_components/Header.svelte';
	import Footer from './_components/Footer.svelte';
	import Form from './_components/Form.svelte';
	// import ContextToggle from './_components/ContextToggle.svelte';
</script>

<Header forcedClip={{ file: 'vlc-guitar.m4v', offset: 300 }} />

<!-- <ContextToggle /> -->

<main>
	<h2>Physical Art</h2>
	<p>Christopher likes it.</p>

	<div class="two-column">
		<div>
			<img alt="Christopher's kids playing guitars" src="kids-guitars.JPG" width="100%" />
			<p>
				Christopher hasn't had time really fill out this page yet. He's probably too busy playing
				guitar...
			</p>
			<div class="basic-grid">
				<img alt="Piano meetup Christopher organized" src="piano.JPG" />
				<img alt="Carving" src="carving.jpeg" />
				<img alt="Rainbow over Christopher's garden" src="rainbow.jpeg" />
				<img alt="Hand-dug Stream" src="stream-1.jpeg" />
				<img alt="Icon" src="icon.jpeg" />
			</div>
		</div>

		<div>
			<Form fold={650}>
				<span slot="title">Artistic Endeavors</span>
				<span slot="list">
					<ul>
						<li>
							<strong>Guitar</strong>Three years ago Christopher finally began to life-long journey
							of checking "plays guitar" off on his bucket-list. Now he teaches folk-singing. He
							must be doing ok...
						</li>
						<li>
							<strong>Landscaping</strong><br />Christopher designed, hand-dug, and crafted a stream
							in his backyard. Because every kid can benefit from a stream in their backyard. Even
							the kid at heart.
						</li>
						<li>
							<strong>Singing</strong><br />Christopher sings in the choir at his church, and just
							loves to sing in general.
						</li>
						<li>
							<strong>Painting</strong><br />Christopher enjoys drawing and painting.
						</li>
						<li>
							<strong>Carving & Whittling</strong><br />Christopher is an aspiring wood-carver and
							whittler.
						</li>
						<li>
							<strong>Gardening</strong><br />Christopher has a small orchard, as well as anywhere
							from 72 to 144 square feet of vegetable garden depending on the year, in his back
							yard.
						</li>
						<li>
							<strong>Woodworking</strong><br />Christopher has done wood-working and made some
							pieces of furniture. Does laying 3000sqft of hardwood floors count has woodworking?
						</li>
						<li>
							<strong>Piano</strong><br />Christopher took 6 years of piano lessons. He enjoys
							sitting down and tickling the ivories every now and then.
						</li>
					</ul>
				</span>
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
