<script>
    let isMenuOpen = false

    function toggleMenu() {
        isMenuOpen = !isMenuOpen
    }
</script>

<nav>
    <!-- Logo -->
    <a href="/"><img src="/img/Logo.svg" alt=""></a>

    <!-- Menu button when collapsed -->
    <button on:click={toggleMenu} class="menu-btn" id="menu-btn">Menu</button>

    <!-- Close menu button when uncollapsed -->
    <div class="nav-close">
        <button on:click={toggleMenu} class="close-btn" class:open={isMenuOpen} id="close-btn">Close</button>
    </div>

    <!-- Navigation -->
    <div class="nav-overlay" class:open={isMenuOpen} id="nav-overlay">
        <div class="nav-content">
            <!-- Nav links -->
            <ul>
                <li><a href="/" on:click={toggleMenu}>Home</a></li>
                <li><a href="/projects" on:click={toggleMenu}>Projects</a></li>
                <li><a href="/weloveweb" on:click={toggleMenu}>We<span>🧡</span>Web</a></li>
                <li><a href="/logboek" on:click={toggleMenu}>Logboek</a></li>
            </ul>
        </div>
    </div>
    
</nav>

<style>
    nav{
        width: 80%;
        margin: 0.6em auto 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7vh;
    }

    .menu-btn{
        background: none;
        border: none;
        color: var(--secondary-color);
        font-family: 'Bebas Neue', sans-serif;
        letter-spacing: 3px;
        font-size: 1.2em;
        display: flex;
    }

    .nav-close{
        height: auto;
        position: fixed;
        justify-content: flex-end;
        right: 1em;
        z-index: 30;
    }

    .close-btn{
        display: none;
    }

    .close-btn.open{
        background: none;
        border: none;
        font-family: 'Bebas Neue', sans-serif;
        color: var(--secondary-color);
        letter-spacing: 3px;
        font-size: 1.2em;
        margin-right: 0.6em;
        display: flex;
    }

    /* :global(body.open-menu) .menu-btn{
        display: none;
    }

    :global(body.open-menu) .close-btn, :global(body.open-menu) .nav-overlay{
        display: flex;
    } */

    /* Overlay */
    .nav-overlay{
        display: none
    }

    .nav-overlay.open{
        position: fixed;
        top: 0;
        bottom: 0;
        left: auto;
        right: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 1;
    }

    .nav-content{
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        background: var(--faded-black);
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    a{
        color: var(--secondary-color);
        font-size: 2.1em;
    }
</style>