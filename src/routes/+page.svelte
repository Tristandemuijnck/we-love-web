<script>

</script>

<section class="hero">
    <div class="hero-text">
        <div class="hero-text-upper">
            <div class="name">
                <p>Tristan</p>
                <p>De Muijnck</p>
            </div>
            <p class="rotated">FDND</p>
        </div>
        <p class="sub-line">App developer &amp; student frontend design and development</p>
    </div>
    
    <a href="/projects">Projects</a>
</section>

<style>
    .hero{
        width: 80%;
        margin: 0 auto;
        height: 90vh;
    }

    .hero-text{
        display: flex;
        flex-direction: column;
        padding-top: 20vh;
    }

    .hero-text-upper{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .name{
        display: flex;
        flex-direction: column;
    }

    .name p{
        line-height: 0.75em;
        letter-spacing: 1px;
    }

    .name p:nth-child(1){
        font-size: 9em;
    }

    .name p:nth-child(2){
        font-size: 6.15em;
    }

    .rotated{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-size: 7.35em;
        padding-top: 10px;
        color: transparent;
        -webkit-text-stroke: 1px #FFFFFF;
    }

    .sub-line{
        font-size: 1.34em;
        letter-spacing: 1px;
        line-height: 1;
        margin-bottom: 1.1em;
    }

    a{
        background: var(--secondary-color);
        color: var(--primary-color);
        padding: 0.5em 1.5em;
        letter-spacing: 5px;
        font-size: 1.1em;
    }
</style>