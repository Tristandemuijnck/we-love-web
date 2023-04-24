<script>

</script>

<section class="hero">
    <div class="hero-content">
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
    </div>
</section>

<style>
    .hero{
        width: 100%;
        margin: 0 auto;
        height: calc(100vh - var(--nav-height));
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero-content{
        margin-top: 25vh;
    }

    .hero-text{
        display: flex;
        flex-direction: column;
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
        line-height: 0.77em;
        letter-spacing: 1px;
    }

    .name p:nth-child(1){
        font-size: 5em;
    }

    .name p:nth-child(2){
        font-size: 3.38em;
    }

    .rotated{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-size: 4.1em;
        padding-top: 6px;
        padding-right: 10px;
        color: transparent;
        -webkit-text-stroke: 1px #FFFFFF;
        line-height: 0.85em;
        transition: 500ms ease-in-out;
    }

    .rotated:hover{
        text-shadow: 0 0 5px var(--third-color), 0 0 25px var(--third-color), 0 0 50px var(--third-color), 0 0 100px var(--third-color); 
    }

    .sub-line{
        font-size: 0.664em;
        letter-spacing: 1px;
        line-height: 1;
        margin-bottom: 1.8em;
    }

    a{
        background: var(--secondary-color);
        color: var(--primary-color);
        padding: 0.4em 1em;
        letter-spacing: 5px;
        font-size: 1em;
        border: 2px solid transparent;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        animation: pulsing 1.35s infinite cubic-bezier(0.66, 0, 0, 1);
        transition: all 300ms ease-in-out;
    }

    a:hover{
        animation: none;
        background: transparent;
        color: var(--secondary-color);
        border: solid 2px var(--secondary-color);
    }

    @keyframes pulsing {
        to {
            box-shadow: 0 0 0 10px rgba(232, 76, 61, 0);
        }
    }   


    /* --------------------------------- Tablet --------------------------------- */
    @media (min-width: 48rem){
        .hero{
            width: 80%;
            align-items: unset;
        }

        .hero-content{
            margin-top: 20vh;
        }

        .name p:nth-child(1){
            font-size: 6.5em;
        }

        .name p:nth-child(2){
            font-size: 4.42em;
        }

        .rotated{
            font-size: 5.24em;
        }

        .sub-line{
            font-size: 0.896em;
        }

        a{
            font-size: 1.2em;
        }
    }
</style>