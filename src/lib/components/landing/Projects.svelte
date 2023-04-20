<script>

</script>

<section class="projects">
    <!-- Projects title -->
    <div class="projects-heading">
        <h2>Projects</h2>
    </div>

    <!-- Projects gallery -->
    <div class="projects-gallery">

        <!-- UltiTV -->
        <div class="project">
            <div class="project-img">
                <picture>
                    <source srcset="/img/ultitv.webp" type="image/webp">
                    <img src="/img/ultitv.png" alt="" width="3506" height="2092">
                </picture>
            </div>
            <div class="project-name">
                <h3>UltiTV</h3>
            </div>
        </div>

        <!-- Squadpage -->
        <div class="project">
            <div class="project-img">
                <picture>
                    <source srcset="/img/squadpage.webp" type="image/webp">
                    <img src="/img/squadpage.png" alt="" width="3506" height="1904">
                </picture>
            </div>
            <div class="project-name">
                <h3>Squadpage</h3>
            </div>
        </div>

        <!-- Lifely -->
        <div class="project">
            <div class="project-img">
                <picture>
                    <source srcset="/img/lifely.webp" type="image/webp">
                    <img src="/img/lifely.png" alt="" width="3506" height="1904">
                </picture>
                
            </div>
            <div class="project-name">
                <h3>Lifely</h3>
            </div>
        </div>

        <!-- Vervoerregio -->
        <div class="project">
            <div class="project-img">
                <picture>
                    <source srcset="/img/vervoerregio.webp" type="image/webp">
                    <img src="/img/vervoerregio.png" alt="" width="3506" height="1904">
                </picture>
            </div>
            <div class="project-name">
                <h3>Vervoerregio</h3>
            </div>
        </div>
    </div>
</section>

<style>
    .projects{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 4em;
        margin-bottom: 4em;
    }

    .projects-heading{
        width: 80%;
        margin-inline: auto;
        
    }

    h2{
        font-size: 1.9em;
        letter-spacing: 1px;
    }

    .projects-gallery{
        width: 100%;
        margin-inline: auto;
        margin-top: 4em;
    }

    .project{
        position: relative;
        width: 100%;
        height: auto;
        border-style: solid none;
        border-width: 1px;
        border-color: var(--third-color);
    }

    .project:hover img{
        filter: grayscale(0%) brightness(1);
        height: 12em;
    }

    img{
        width: 100%;
        height: 6em;
        object-fit: cover;
        display: block;
        filter: grayscale(100%) brightness(0.4);
        transition: 250ms ease-in-out;
    }

    .project-name{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: var(--primary-color);
        padding: 1rem 2rem;
    }

    h3{
        font-size: 1.2em;
        letter-spacing: 1px;
    }
</style>