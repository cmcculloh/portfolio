<script>
	import Header from './_components/Header.svelte';
	import Footer from './_components/Footer.svelte';
	import Form from './_components/Form.svelte';
	// import ContextToggle from './_components/ContextToggle.svelte';
</script>

<Header forcedClip={{ file: 'lego.mp4', offset: 600 }} />

<!-- <ContextToggle /> -->

<main>
	<h2>Volunteering</h2>
	<p>The most important thing on earth is kids. Everything else is just details.</p>

	<div class="two-column">
		<div>
			<img alt="Hagia Sophia Classical Accademy" src="singing.jpeg" width="100%" />
			<p>
				Christopher has a strong belief that the primary purpose of society should be in support of
				providing a healthy world in which to raise children, who can in turn raise children. This
				requires seeking the proper balance between attending to our own needs and self sacrifice to
				focus on the needs of others. Whether working directly with youth, working with adults to
				support their journey to get their lives in order, seeking to improve yourself to become the
				best version of you that you can be, or tending and cultivating the world we all inhabit
				together, all of these things are vital to helping ensure a safe healthy environment for the
				next generation to mature in. Life is hard, but we can all help.
			</p>
			<div class="basic-grid">
				<img alt="Scout Meeting" src="camp.jpg" />
				<img alt="Achaius Ranch" src="horses.JPG" />
				<img alt="LEGO League" src="lego-league.JPG" />
				<img alt="Christmas Program" src="christmas-play.JPG" />
				<video autoplay muted loop>
					<source src="soccer.mp4" type="video/mp4" />
				</video>
			</div>
		</div>

		<div>
			<Form fold={650}>
				<span slot="title">Volunteer Work</span>
				<span slot="list">
					<ul>
						<li>
							<strong>Music Teacher</strong><br />Christopher teaches folk music at Hagia Sophia
							Classical Accademy.
						</li>
						<li>
							<strong>LEGO League</strong><br />Christopher helped coach a First Robotics LEGO
							league team that made it past regionals to state two years in a row.
						</li>
						<li>
							<strong>Scout Leader</strong><br />Christopher formed a scout group, planned lessons,
							organized and executed meetings, and planned and co-ordinated twice yearly scout
							camps.
						</li>
						<li>
							<strong>Sunday School Teacher</strong><br />Christopher has taught sunday school to
							various age groups for 11 years.
						</li>
						<li>
							<strong>Certified Catechist</strong><br />Christopher is certified as a catechist in
							the Orthodox Church, and teaches at Sts. Constantine and Elena.
						</li>
						<li>
							<strong>Camp Counselor</strong><br />Christopher is a conselor at St. John's Camp.
						</li>
						<li>
							<strong>Soccer Coach</strong><br />Christopher volunteered as a coach in a
							not-for-profit soccer league.
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

	.basic-grid img,
	.basic-grid video {
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

	.basic-grid img:hover,
	.basic-grid video:hover {
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
