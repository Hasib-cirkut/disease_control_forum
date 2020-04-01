<script>
    export let id;

    import Navbar from '../Components/Navbar.svelte'
    import {onMount} from 'svelte'
    import {getFetch, postFetch} from '../Js/Fetch.js'


    let loved = false;
    let data;
    let title = '', author='', body=''
    let name,username, bio, joined, location, work= ''

    onMount(async ()=>{

        let reData = await getFetch(`http://localhost:3000/posts/${id}`)

        let authorData = await getFetch(`http://localhost:3000/users/bypost/${reData[0].author}`)

        title = reData[0].title
        author = reData[0].author
        body = reData[0].body

        name = authorData[0].name
        bio = authorData[0].bio
        work = authorData[0].work
        location = authorData[0].location

    })
</script>



<Navbar />

<div class="body bg-blueishblack">

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

    <div class="main-post flex-col px-8 py-16 text-gray-200">

        <div class="pb-8">

            <div class="bg-gray-800 min-h-16 text-center border-b-4 border-orange-500">
            
                <h2 class="text-2xl">{title}</h2>
            
            </div>

            <div class="mt-4">
                
                <span>written by</span><a class="inline-block ml-4" href={`/_profile/${author}`}><span class="text-orange-400">@{author}</span></a>
            
            </div>

            <div class="mt-8 text-lg tracking-wide font-normal">
            
                <p>
                    {body}
                </p>
            
            </div>
        
        </div>

        <hr>


        <div class="pt-4">

            <h1>This is the commnets section</h1>
        
        </div>

    
    </div>

    <div class="right-bar">
        <div id="userIntro">
            <h3>{name}</h3>
            <a href={`/_profile/${author}`}><h4>@{author}</h4></a>

            <p>{bio}</p>
            <button>Follow</button><br>

            <span>Work</span><br>
            <h6>{work}</h6>
            <span>location</span>
            <h6>{location}</h6>
        </div>
    </div>
</div>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    *{
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

        min-height: 100vh;
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


</style>