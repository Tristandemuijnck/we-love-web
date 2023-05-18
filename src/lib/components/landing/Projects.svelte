<script>
    import ScrollButtons from "$lib/components/small-elements/ScrollButtons.svelte";
</script>

<section class="projects" id="projects">

    <!-- Projects heading text -->
    <h2 class="heading">PROJECTS</h2>

    <!-- Scroll buttons menu -->
    <ScrollButtons />

    <!-- Projects nav -->
    <nav>
        <ul>
            <li><a href="#ultitv">UltiTV</a></li>
            <li><a href="#lifely">Lifely</a></li>
            <li><a href="#vervoerregio">Vervoerregio</a></li>
        </ul>
    </nav>

    <!-- Project cards -->
    <div class="project-card">
        <div class="project-text">
            <h2 class="project-title">UltiTV</h2>
            <p class="project-desc">
                A tool for commentating on Ultimate Frisbee games.<br> View game stats, player stats an player facts.
            </p>
        </div>
        <picture class="project-img-wrap">
            <source class="project-img" srcset="/img/ultitv.webp" type="image/webp">
            <img class="project-img" src="/img/ultitv.png" alt="" width="1024" height="625">
        </picture>
    </div>

    <div class="project-card">
        <div class="project-text text-right">
            <h2 class="project-title">Lifely</h2>
            <p class="project-desc">
                Landing page for getting started with AI.<br> Find information about the AI design sprint and how it can change and automate company processes.
            </p>
        </div>
        <picture class="project-img-wrap">
            <source class="project-img" srcset="/img/lifely.webp" type="image/webp">
            <img class="project-img" src="/img/lifely.png" alt="" width="1024" height="556">
        </picture>
    </div>

    <div class="project-card">
        <div class="project-text">
            <h2 class="project-title">Vervoerregio</h2>
            <p class="project-desc">
                A tool for checking accessibility on your website.<br> Find possible accessibility improvements.
            </p>
        </div>
        <picture class="project-img-wrap">
            <source class="project-img" srcset="/img/vervoerregio.webp" type="image/webp">
            <img class="project-img" src="/img/vervoerregio.png" alt="" width="1024" height="556">
        </picture>
    </div>

</section>

<style>
    .projects{
        overflow: hidden;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .heading{
        font-size: 4em;
        font-weight: normal;
        position: relative;
        text-transform: uppercase;
        padding-right: 2rem;
        margin-left: auto;
        margin-bottom: 3rem;
    }

    .heading::after{
        content: "PROJECTS";
        white-space: pre;
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
        padding-right: 2rem;
    }

    ul{
        display: none;
    }

    .project-card{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 5rem;
    }

    .project-text{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto 1rem auto;
    }

    .text-right{
        align-items: flex-end;
    }

    .text-right .project-desc{
        text-align: right;
    }

    .project-title{
        font-size: 3em;
        font-weight: normal;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        line-height: 0.9;
        margin-bottom: 0.5rem;
    }

    .project-img-wrap{
        width: 90%;
        margin: 0 auto;
        position: relative;
    }

    .project-img-wrap::after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.4;
    }

    .project-img{
        width: 100%;
        height: auto;
        filter: grayscale(100%);
    }

</style>