import {get, writable} from 'svelte/store'

function currentSlideStore() {
    let currentSlide = writable(0)
    let lastSlide = writable(0)
    let direction = writable(0)

    const setMax = val => {
        lastSlide.set(val)
    }

    const prev = () => {
        direction.set(-1)
        currentSlide.update(snapshot => Math.max(--snapshot, 0))
    }

    const next = () => {
        direction.set(1)
        currentSlide.update(snapshot => Math.min(++snapshot, get(lastSlide)))
    }

    const getDirection = () => {
        return get(direction)
    }

    return {
        ...currentSlide,
        direction: getDirection,
        prev,
        next,
        setMax,
    }
}

export const currentSlide = currentSlideStore()
