<script>
	import Slider from './Slider.svelte'
	import Slide from './Slide.svelte'

	import { currentSlide } from './slide.store'
	import mdSlides from './assets/slides.md'
	import { parseMd } from './assets/parser'

	const slides = parseMd(mdSlides)

	$: currentSlide.setMax(slides.length - 1)
</script>

<svelte:head>
	<link rel="stylesheet" href="assets/normalize.css">
</svelte:head>

<Slider>
	{#each slides as slide, index}
		<Slide {index} content={slide} />
	{:else}
		loading...
	{/each}
</Slider>

<style>
	h1 {
		color: purple;
	}
</style>
