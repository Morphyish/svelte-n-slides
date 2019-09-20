<script>
    import {currentSlide} from './slide.store'

    const changeSlide = event => {
        if (event.keyCode === 37) {
            currentSlide.prev()
        }
        if (event.keyCode === 39) {
            currentSlide.next()
        }
    }
</script>

<svelte:window on:keyup={changeSlide} />

<div class="container">
    <slot></slot>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
