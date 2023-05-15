<script>
    import ScrollButtons from "$lib/components/small-elements/ScrollButtons.svelte";
</script>

<section class="hero" id="hero">
    <!-- Intro and name -->
    <div class="hero-title">
        <p class="pre-name">Hi, i'm</p>
        <p class="first-name">Tristan</p>
        <p class="last-name">De Muijnck</p>
    </div>

    <a href="#projects" class="hero-btn">Projects</a>
    
    <!-- Background text -->
    <div class="hero-text-left">
        <p class="bg-text">App developer</p>
    </div>
    <div class="hero-text-right">
        <p class="bg-text">Student FDND</p>
    </div>

    <!-- Scroll buttons menu -->
    <ScrollButtons />
</section>

<style>

    .hero{
        width: 100%;
        position: relative;
    }

    .hero-title{
        margin-left: 16rem;
        margin-top: 6rem;
        margin-bottom: 2.5rem;
    }

    .pre-name{
        font-size: 4em;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
    }

    .first-name, .last-name{
        font-size: 8em;
        font-weight: normal;
        line-height: 0.8;
        position: relative;
        text-transform: uppercase;
    }

    .first-name::after{
        content: "Tristan";
        white-space: pre;
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
    }

    .last-name::after{
        content: "De Muijnck";
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
    }

    .hero-btn{
        border: solid 1px white;
        margin-left: 16rem;
        padding: 0.4em 1em;
        letter-spacing: 5px;
        font-size: 1.5em;
        color: white;
    }

</style>