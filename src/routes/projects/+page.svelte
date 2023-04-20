<script>
    import { onMount } from 'svelte'
    import { createScene } from '$lib/scene.js'

    let canvas

    onMount(() => {
        createScene(canvas)
    })

</script>

<h1>Projects page</h1>

<canvas bind:this={canvas}></canvas>

<style>

</style>