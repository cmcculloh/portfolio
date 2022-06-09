<script>
	import { tweened } from 'svelte/motion';

	let y;

	export let walk = false;
	let pos = tweened(0);
	let flip;
	let walking = false;
	let innerWidth;
	const DURATION = 12;
	const make_duration = (a, b, d) => Math.abs(a - b) * d;
	function start_walk() {
		walking = true;
		pos.set(to, { duration: make_duration($pos, from, DURATION) });
	}
	function stop_walk() {
		walking = false;
		pos.set($pos, { duration: 0 });
	}
	function correct_walk() {
		if (!walking) return;
		const duration = flip ? make_duration($pos, from, DURATION) : make_duration($pos, to, DURATION);
		pos.set(flip ? from : to, { duration });
	}
	$: to = innerWidth > 500 ? 436 : (innerWidth * 0.9) / 2 - 32;
	$: from = innerWidth > 500 ? 0 : ((innerWidth * 0.9) / 2 - 32) * -1;
	// $: to = (innerWidth * 0.9) / 2 - 32;
	// $: from = 0;//((innerWidth * 0.9) / 2 - 32) * -1;
	$: innerWidth && correct_walk();
	$: walk && !walking && start_walk();
	$: !walk && walking && stop_walk();
	$: $pos >= to &&
		(flip = true) &&
		pos.set(from, { duration: make_duration($pos, from, DURATION) });
	$: $pos <= from &&
		!(flip = false) &&
		pos.set(to, { duration: make_duration($pos, to, DURATION) });

	$: console.log('y', y);
</script>

<svelte:window bind:innerWidth bind:scrollY={y} />

<div
	class="robot {y > 1716 ? '' : 'fixed'}"
	style="transform: translateX({$pos}px) rotateY({flip ? 180 : 0}deg);"
>
	<img alt="a robot walking" src="/robot-small.gif" />
</div>

<style>
	.robot {
		display: inline-block;
		width: 64px;
		height: 70px;
		margin: 0 auto;
		position: absolute;
		top: 2341px;
		margin-left: 60%;
	}

	.robot.fixed {
		position: fixed;
		top: unset;
		bottom: 50px;
		margin-left: 60%;
	}
</style>
