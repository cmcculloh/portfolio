<script>
	export let title = 'CMcCulloh';
	export let forcedClip = '';

	let y;

	const clips = [
		{ file: 'rain-in-osaka-clipped.mp4', offset: 200 },
		{ file: 'alley.mp4', offset: 400, blur: 2 },
		{ file: 'raining-nagoya.mp4', offset: 600 },
		{ file: 'tokyo-night.mp4', offset: 574, blur: 5 }
	];
	const randomClip =
		forcedClip === '' ? clips[Math.floor(Math.random() * clips.length)] : forcedClip;

	// TODO: try animating transform translateY instead
	$: top = y * -2 + -randomClip.offset;
	$: blur = y / 25 + (randomClip.blur || 0);
</script>

<svelte:window bind:scrollY={y} />

<header>
	<video autoplay muted loop style="top: {top}px;">
		<source src={randomClip.file} type="video/mp4" />
	</video>
	<h1 style="backdrop-filter: blur({blur}px);">{@html title}</h1>
</header>

<style>
	:global(body) {
		overflow-x: hidden;
	}
	header {
		overflow: hidden;
		margin-left: 0;
		height: 440px;
		width: 100vw;
	}

	video {
		top: -200px;
		width: 2500px;
		left: -200px;
		position: fixed;
		object-fit: cover;
		z-index: -1;

		background-color: var(--blue-1);
	}
	h1 {
		font-family: Helvetica;
		font-weight: 200;
		font-size: 6rem;
		color: white;
		/* background: radial-gradient(
			circle at 1469px 258px,
			var(--blue-3),
			var(--blue-3) 70px,
			transparent 0px
		); */
		height: 252px;
		width: 100%;
		margin: 0;
		padding-top: 188px;
		padding-left: 20%;
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		text-shadow: 1px 1px 2px black;
	}

	@property --dark-x {
		syntax: '<length>';
		inherits: false;
		initial-value: 500px;
	}

	@property --dark-y {
		syntax: '<length>';
		inherits: false;
		initial-value: -5270px;
	}

	@property --dark-size {
		syntax: '<length>';
		inherits: false;
		initial-value: 5600px;
	}

	header:after {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		content: '';
		height: 440px;
		width: 100%;
		padding: 0;
		margin: 0;
		background: radial-gradient(
			circle at var(--dark-x) var(--dark-y),
			transparent,
			transparent var(--dark-size),
			var(--blue-1) 0px
		);
		animation: animateDarkCircle 20s infinite alternate;
	}

	@keyframes animateDarkCircle {
		0% {
			--dark-x: 500px;
			--dark-y: -5270px;
			--dark-size: 5700px;
		}
		50% {
			--dark-x: 600px;
			--dark-y: -5370px;
			--dark-size: 5800px;
		}
		100% {
			--dark-x: 500px;
			--dark-y: -5270px;
			--dark-size: 5700px;
		}
	}

	@property --light-x {
		syntax: '<length>';
		inherits: false;
		initial-value: 1475px;
	}

	@property --light-y {
		syntax: '<length>';
		inherits: false;
		initial-value: -5535px;
	}

	@property --light-size {
		syntax: '<length>';
		inherits: false;
		initial-value: 5600px;
	}
	header:before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		height: 440px;
		width: 100%;
		background: radial-gradient(
			circle at var(--light-x) var(--light-y),
			var(--blue-2),
			var(--blue-2) var(--light-size),
			transparent 0px
		);
		padding: 0;
		margin: 0;
		animation: animateLightCircle 20s infinite alternate;
	}
	@keyframes animateLightCircle {
		0% {
			--light-x: 1375px;
			--light-y: -5535px;
			--light-size: 5600px;
		}
		50% {
			--light-x: 1275px;
			--light-y: -5505px;
			--light-size: 5580px;
		}
		100% {
			--light-x: 1375px;
			--light-y: -5535px;
			--light-size: 5600px;
		}
	}
	/*
	header:after {
		 height: 5600px;
    width: 5600px;
    background-color: var(--blue-1);
		 border-radius: 50%;
		content:"";
		position:absolute;
    z-index:-1;
		top: -5270px;
    left: -2000px;
		transition: all 20s;
	} */
</style>
