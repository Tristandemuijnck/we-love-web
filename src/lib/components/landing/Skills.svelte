<script>
    import ScrollButtons from "$lib/components/small-elements/ScrollButtons.svelte";
</script>

<section class="skills" id="skills">
    <!-- Skills heading text -->
    <h2>SKILLS</h2>

    <!-- Skills cards -->
    <div class="skill-cards">

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/html.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">HTML</p>
            <p class="skill-level">Proficient</p>
            <p class="skill-years">5 Years</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/css.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">CSS</p>
            <p class="skill-level">Proficient</p>
            <p class="skill-years">5 Years</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/javascript.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">JavaScript</p>
            <p class="skill-level">Proficient</p>
            <p class="skill-years">5 Years</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/figma.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">Figma</p>
            <p class="skill-level">Proficient</p>
            <p class="skill-years">1 Year</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/php.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">PHP</p>
            <p class="skill-level">Intermediate</p>
            <p class="skill-years">4 Years</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/nodejs.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">NodeJS</p>
            <p class="skill-level">Intermediate</p>
            <p class="skill-years">1 Year</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/express.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">ExpressJS</p>
            <p class="skill-level">Intermediate</p>
            <p class="skill-years">1 Year</p>
        </div>

        <!-- Skill card -->
        <div class="skill-card">
            <img src="/img/icons/ui.svg" alt="" class="skill-svg" width="48" height="48">
            <p class="skill-title">UI Design</p>
            <p class="skill-level">Intermediate</p>
            <p class="skill-years">1 Year</p>
        </div>

    </div>

    <!-- Scroll buttons menu -->
    <ScrollButtons />
</section>

<style>
    .skills{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
    }

    h2{
        font-size: 4em;
        font-weight: normal;
        position: relative;
        text-transform: uppercase;
        padding-left: 2rem;
    }

    h2::after{
        content: "SKILLS";
        white-space: pre;
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
        padding-left: 2rem;
    }

    .skill-cards{
        display: flex;
        flex-flow: row wrap;
        width: 90%;
        margin: 2em auto 2em auto;
        gap: 0.8rem;
        justify-content: center;
    }

    .skill-card{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #111116;
        border: solid 1px #fff;
        gap: 0.4rem;
        padding: 0.8rem 0;
    }

    .skill-svg{
        margin-bottom: 0.6rem;
    }

    .skill-title{
        font-size: 1.3em;
    }

    .skill-title::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: var(--third-color);
    }
</style>