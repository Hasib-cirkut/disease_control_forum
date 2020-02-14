<script>
    import Navbar from '../Components/Navbar.svelte'

    let loved = false;
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "monserrat", sans-serif;
    }

    .left-bar{
        grid-area: left-bar;

        
    

        border-right: 1px solid #000000;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        
    }

    .right-bar{
        grid-area: right-bar;


        border-left: 1px solid #000000;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .main-post{
        grid-area:main-post;
    }

    .body{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        "left-bar main-post right-bar"
        "left-bar main-post right-bar"
        "left-bar main-post right-bar";

        height: 100vh;
    }

    .loveButton{
        position: fixed;
        margin-left: 22vw;
        margin-top: 21vh;
        cursor: pointer;
    }

    .shareButton{
        position: fixed;
        margin-left: 22vw;
        margin-top: 29vh;
        cursor: pointer;
    }

    #userIntro{
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 200px;
        margin-top: 7vh;
        margin-left: 2vw;
        height: 269px;
        background: #FFFFFF;
        border: 1px solid #FF00A8;
        box-sizing: border-box;
        box-shadow: 2px 6px 7px rgba(0, 0, 0, .2)
    }

    #userIntro > h3{
        margin-top: 5px;
    }

    #userIntro > a, .main-post>a{
        font-size: smaller;
        font-weight: 100;
        text-decoration: none;
        color: #FF00A8;
        margin-top: 3px;
    }

    #userIntro > *{
        margin-left: 5px;
    }

    #userIntro > p{
        margin: 1vw 1vh;
        font-family: "Monserrat", sans-serif;
        font-size: smaller;
        font-style: italic;
        text-align: end;
    }

    #userIntro > button{
        width: 50%;
        margin-top: 10px;
       
        align-self: center;
        
    }

    .main-post{
        display: flex;
        flex-direction: column;
        margin-left: 3vw;
        margin-top: 5vh;

        border: #FF00A8;
    }

    .main-post > p {
        margin-top: 5vh;
        margin-right: 5vh;
        font-family: "Monserrat";
        font-size: x-large;
    }
</style>

<Navbar />

<div class="body">

    <div class="left-bar">

        <div class="loveButton" on:click={()=>{loved = !loved}}>
        {#if loved}

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        
        {:else}

        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>    
        
        {/if}
        </div>

        <div class="shareButton" >

        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24"
        viewBox="0 0 300 300">
            <path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003 S232.835,0,149.996,0z M133.314,149.997c0,3.133-0.571,6.111-1.569,8.901l41.868,20.142c4.819-5.275,11.731-8.595,19.436-8.595 c14.553,0,26.353,11.796,26.353,26.348c0,14.555-11.803,26.356-26.359,26.356c-14.553,0-26.359-11.801-26.359-26.356 c0-1.395,0.145-2.757,0.353-4.09l-44.568-21.436c-4.357,3.188-9.71,5.089-15.52,5.089c-14.555,0-26.356-11.796-26.356-26.361 c0-14.55,11.801-26.348,26.356-26.348c5.81,0,11.165,1.901,15.523,5.086l44.571-21.431c-0.21-1.336-0.353-2.692-0.353-4.09 c0-14.558,11.803-26.356,26.359-26.356c14.553,0,26.356,11.798,26.356,26.356c0,14.555-11.803,26.356-26.356,26.356 c-7.7,0-14.617-3.328-19.436-8.598l-41.868,20.134C132.744,143.89,133.314,146.875,133.314,149.997z"/>
        </svg>
        
        
        </div>

    
    </div>

    <div class="main-post" >

        <h2>This is a long title</h2>

        <a href="/profile"><h4>@hasib</h4></a>

        <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. In nibh mauris cursus mattis molestie. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Diam sollicitudin tempor id eu nisl nunc mi. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Non blandit massa enim nec dui. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Laoreet non curabitur gravida arcu ac tortor dignissim. Bibendum ut tristique et egestas quis. Gravida neque convallis a cras semper auctor neque vitae tempus.

            Sit amet nisl purus in mollis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Morbi leo urna molestie at elementum eu. Varius vel pharetra vel turpis nunc. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Lacus viverra vitae congue eu consequat ac. Dui vivamus arcu felis bibendum ut tristique et. Lacus vestibulum sed arcu non. Id consectetur purus ut faucibus pulvinar elementum. Aliquam eleifend mi in nulla. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.

            Faucibus et molestie ac feugiat sed. Diam vulputate ut pharetra sit amet aliquam. Massa eget egestas purus viverra accumsan in nisl nisi. Interdum velit laoreet id donec ultrices. Et tortor consequat id porta nibh venenatis cras. Platea dictumst quisque sagittis purus sit amet. Imperdiet sed euismod nisi porta. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Amet dictum sit amet justo. Vestibulum sed arcu non odio. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Nec feugiat in fermentum posuere urna. Congue mauris rhoncus aenean vel elit scelerisque mauris. Mattis enim ut tellus elementum sagittis. Enim blandit volutpat maecenas volutpat blandit. Suspendisse in est ante in nibh. Vitae turpis massa sed elementum.

            Sem nulla pharetra diam sit amet nisl suscipit. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue mauris augue. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Nibh tellus molestie nunc non blandit massa enim. Cursus mattis molestie a iaculis at erat pellentesque. Viverra tellus in hac habitasse. Odio morbi quis commodo odio aenean sed adipiscing. Senectus et netus et malesuada fames.
        
        </p>
    
    </div>

    <div class="right-bar">
        <div id="userIntro">
            <h3>Hasibul Huda</h3>
            <a href='/profile'><h4>@hasib</h4></a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Follow</button><br>

            <span>work</span><br>
            <span>location</span>
        </div>
    </div>


</div>