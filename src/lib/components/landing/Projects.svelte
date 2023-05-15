<script>
    import ScrollButtons from "$lib/components/small-elements/ScrollButtons.svelte";
</script>

<section class="projects" id="projects">
    
    <!-- Projects heading text -->
    <h2>PROJECTS</h2>

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
        <div class="project-img">
            <source srcset="/img/ultitv.webp" type="image/webp">
            <img src="/img/ultitv.png" alt="" width="1024" height="625">
        </div>
    </div>

    <div class="project-card">
        <div class="project-text">
            <h2 class="project-title">Lifely</h2>
            <p class="project-desc">
                Landing page for getting started with AI.<br> Find information about the AI design sprint and how it can change and automate company processes.
            </p>
        </div>
        <div class="project-img">
            <source srcset="/img/lifely.webp" type="image/webp">
            <img src="/img/lifely.png" alt="" width="1024" height="556">
        </div>
    </div>

    <div class="project-card">
        <div class="project-text">
            <h2 class="project-title">Vervoerregio</h2>
            <p class="project-desc">
                A tool for checking accessibility on your website.<br> Find possible accessibility improvements.
            </p>
        </div>
        <div class="project-img">
            <source srcset="/img/vervoerregio.webp" type="image/webp">
            <img src="/img/vervoerregio.png" alt="" width="1024" height="556">
        </div>
    </div>

</section>

<style>

</style>