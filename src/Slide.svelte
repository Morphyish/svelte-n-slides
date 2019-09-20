<script>
    import { currentSlide } from './slide.store'
    import { fly, fade } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'

    export let index = 0
    export let content = ''
</script>

{#if index === $currentSlide}
    <div
            class="slide"
            in:fly="{{delay: 0, duration: 500, x: currentSlide.direction() * 1920, y: 0, opacity: 0, easing: quintOut}}"
    >
        <div class="background">
            <img class="logo" alt="background" src="assets/background.png">
        </div>
        {@html content}
    </div>
{/if}

<style>
    .slide {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 1px solid red;
        background: white;
    }

    .background {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: .3;
    }

    .logo {
        height: 50%;
        width: auto;
    }
</style>
