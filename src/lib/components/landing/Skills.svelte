<script>

</script>

<section class="skills">
    <div class="skills-content">
        <h1>Skills</h1>
        <div class="skills-container">
            <p>PHP</p>
            <p>Express</p>
            <p>CSS</p>
            <p>Node</p>
            <p>SQL</p>
            <p>EJS</p>
            <p>Bootstrap</p>
            <p>Python</p>
            <p>UI Design</p>
            <p>Concepts</p>
            <p>Javascript</p>
            <p>HTML</p>
            <p>Java</p>
            <p>Jquery</p>
            <p>Figma</p>
        </div>
    </div>
</section>

<style>
    .skills{
        width: 100%;
        display: flex;
        flex-direction: column;
        background: var(--faded-black);
    }

    .skills-content{
        width: 80%;
        margin-inline: auto;
        margin-top: 5em;
    }

    h1{
        font-size: 1.9em;
        letter-spacing: 1px;
        text-align: right;
    }

    .skills-container{
        /* display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        grid-gap: 0.3em; */
        display: flex;
        flex-flow: row-reverse wrap;
        gap: 0.4em;
        width: 100%;
        margin-inline: auto;
        margin-top: 1em;
        align-items: center;
        /* justify-items: center; */
    }

    p{
        padding: 0.2em 0.9em;
        border-radius: 0.5em;
        text-align: center;
        font-size: 1.05em;
    }

    p:nth-child(odd){
        background: var(--secondary-color);
        color: var(--primary-color);
    }

    p:nth-child(even){
        background: var(--third-color);
    }

</style>