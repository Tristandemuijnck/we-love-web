<script>

</script>

<section class="about">
    <!-- About me -->
    <div class="info-pic">

        <!-- Blob with picture -->
        <div class="image-wrapper">

            <!-- Background svg -->
            <svg class="bg-svg" width="225" height="225" viewBox="0 0 225 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.43462 84.1543C11.5201 60.5603 19.6668 31.5859 40.6355 15.5006C61.9201 -0.697969 96.2289 -4.43688 128.846 5.99281C161.665 15.993 192.905 40.478 207.68 73.7232C222.884 107.171 221.622 149.38 201.164 173.847C181.022 198.201 141.683 204.815 106.549 214.203C71.4139 223.591 40.4828 235.755 23.0362 224.881C5.58964 214.007 1.6276 180.096 0.703164 153.661C-0.221277 127.226 1.46259 108.064 6.43462 84.1543Z" fill="url(#paint0_linear_29_220)" />
                <defs>
                    <linearGradient id="paint0_linear_29_220" x1="242.552" y1="169.85" x2="-38.9096" y2="24.9264" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F87537" />
                        <stop offset="1" stop-color="#FBA81F" />
                    </linearGradient>
                </defs>
            </svg>

            <div class="masking-div">
                <!-- Mask svg -->
                <svg width="225" height="225" viewBox="0 0 225 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.43462 84.1543C11.5201 60.5603 19.6668 31.5859 40.6355 15.5006C61.9201 -0.697969 96.2289 -4.43688 128.846 5.99281C161.665 15.993 192.905 40.478 207.68 73.7232C222.884 107.171 221.622 149.38 201.164 173.847C181.022 198.201 141.683 204.815 106.549 214.203C71.4139 223.591 40.4828 235.755 23.0362 224.881C5.58964 214.007 1.6276 180.096 0.703164 153.661C-0.221277 127.226 1.46259 108.064 6.43462 84.1543Z" fill="url(#paint0_linear_29_220)" />
                    <defs>
                        <linearGradient id="paint0_linear_29_220" x1="242.552" y1="169.85" x2="-38.9096" y2="24.9264" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F87537" />
                            <stop offset="1" stop-color="#FBA81F" />
                        </linearGradient>
                    </defs>
                </svg>
                <!-- Profile picture -->
                <picture class="masked-img">
                    <source srcset="/img/pf2.webp" type="image/webp">
                    <img src="/img/pf2.png" alt="Profile pic" width="225" height="225" >
                </picture>
                
            </div>
            
        </div>
    </div>

    <!-- About me text -->
    <div class="info-text">
        <h2 class="heading">Over mij</h2>
        <p class="sub-heading">App developer & student FDND</p>
        <p class="p-info">
            Ik ben Tristan de Muijnck, applicatieontwikkelaar en student Frontend Design & Development. 
            Ik houd me bezig met het ontwerpen en maken van gebruiksvriendelijke en toegankelijke websites.
            Daarnaast vind ik het leuk om te experimenteren met nieuwe technieken.  
        </p>
        <button>Neem contact op</button>
    </div>
</section>

<style>
    .about{
        width: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */
        padding-top: 6em;
        background: rgba(var(--faded-black-rgb), 0.9);
    }

    /* Profile picture & Mask */
    .info-pic{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        position: relative;
    }

    .image-wrapper{
        position: relative;
        display: flex;
        justify-content: center;
        height: auto;
    }

    .masking-div{
        position: relative;
        display: flex;
        clip-path: path("M6.43462 84.1543C11.5201 60.5603 19.6668 31.5859 40.6355 15.5006C61.9201 -0.697969 96.2289 -4.43688 128.846 5.99281C161.665 15.993 192.905 40.478 207.68 73.7232C222.884 107.171 221.622 149.38 201.164 173.847C181.022 198.201 141.683 204.815 106.549 214.203C71.4139 223.591 40.4828 235.755 23.0362 224.881C5.58964 214.007 1.6276 180.096 0.703164 153.661C-0.221277 127.226 1.46259 108.064 6.43462 84.1543Z");
    }

    .bg-svg{
        position: absolute;
        filter: blur(15px);
        height: auto;
        width: 100%;
        bottom: 0;
        transition: .2s ease-in-out;
    }

    .image-wrapper:hover .bg-svg{
        filter: blur(20px);
    }

    picture{
        position: relative;
    }

    .masked-img{
        position: absolute;
        bottom: 0;
        transform: translateY(16px) translateX(-15px);
    }

    /* About me text */
    .info-text{
        width: 80%;
        margin-inline: auto;
        margin-top: 4em;
    }

    .heading{
        font-size: 1.9em;
        letter-spacing: 1px;
    }

    .sub-heading{
        font-size: 1.3em;
        letter-spacing: 1px;
        margin-top: 0.1em;
    }

    .p-info{
        margin-top: 1.5em;
        font-family: 'Bebas Neue Pro Regular', sans-serif;
        font-size: 1.2em;
    }

    button{
        background: var(--third-color);
        border: solid 2px var(--third-color);
        border-radius: 1em;
        padding: 0.3em 1em;
        color: white;
        font-family: 'Bebas Neue', sans-serif;
        margin-top: 1.2em;
        font-size: 1.2em;
        transition: all 150ms ease-in-out;
    }

    button:hover{
        cursor: pointer;
        background: var(--second-color);
        border: solid 2px var(--third-color);
    }

    /* --------------------------------- Tablet --------------------------------- */
    @media (min-width: 48rem){
        .about{
            flex-direction: row;
        }

        .info-pic{
            width: 100%;
        }

        .info-text{
            width: 100%;
        }

        .p-info{
            width: 80%;
        }
    }

</style>