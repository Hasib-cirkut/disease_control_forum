<script>
    
    import {onMount, afterUpdate} from 'svelte'
    
    import Navbar from '../Components/Navbar.svelte'
    import Index from '../Pages/Index.svelte'
    import {postFetch, getFetch} from '../Js/Fetch'

    export let id;

    let title = '', tags = '', author = '', body ="";
    let showTitleError = false;
    let postAdded = false;
    let user = localStorage.getItem('user')

    onMount(async ()=>{
        let reData = await fetch(`http://localhost:3000/posts/${id}`)
        
        reData = await reData.json()

        title = reData[0].title
        author = reData[0].author
        tags = reData[0].tags
        body = reData[0].body

        console.log(reData[0])
        
    })


    const handleUpdate = async e =>{
        e.preventDefault()

        console.log(body)
        
    }

    const handleBold = e =>{
        document.execCommand("bold")
    }

    const handleItalic = e =>{
        document.execCommand("italic")
    }
</script>

<svelte:head>

  <link rel="stylesheet" type="text/css" href="/trix/trix.css">
  <script type="text/javascript" src="/trix/trix.js"></script>

</svelte:head>


{#if postAdded}
    <Index />
{:else}
    <Navbar />

<div class="body">

    <div class="left-bar"></div>

    <div class="main-input">

        {#if showTitleError}
            <div class="noTitleError">
                <p>You have to add title</p>
            </div>
        {/if}

        


            <input type="text" id="title" placeholder="Title" required bind:value={title}>
            <input type="text" id="tags" placeholder="4 Tags max. space separated." required bind:value={tags}>
            <!-- <textarea id="x" cols="30" rows="30" required bind:value={body}></textarea> -->

            <div class="mt-4">

                <div id="editable" bind:innerHTML={body} contenteditable="true" class="overflow-y-auto h-72">


                
                </div>
                
                <div class="w-full h-8 mt-4">
                    <div class="flex">

                        <button on:click={handleBold} class="bg-gray-300 w-16 p-1 font-bold rounded-sm">Bold</button>
                        <button on:click={handleItalic} class="ml-2 bg-gray-300 w-16 p-1 italic rounded-sm">Italic</button>
                    
                    </div>
                </div>
            
            </div>


        
    </div>

    <div class="right-bar"></div>

    <footer>
        <button on:click={handleUpdate}>Update</button>

        <p>developed by hasib</p>
    </footer>

</div>
{/if}


<style>


    .left-bar{
        grid-area: left-bar;
    }

    .main-input{
        grid-area: main-input;
        display: flex;
        flex-direction: column;
        height: 80%;
        margin-top: 13vh;

        background: #FFFFFF;
        border: 1px solid #FF00A8;
        box-sizing: border-box;
        box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.3);
    }

    .main-input > *{
        margin-left: 2vw;
        margin-right: 2vw;
    }

    .main-input > input{
        border: 0;
    }

    footer{
        grid-area: footer;
    }

    .main-input > input:focus{
        outline: none;
    }

    #title{
        margin-top: 3vh;
    }

    textarea{
        border: 0;
        resize: none;
    }

    textarea:focus{
        outline: none;
    }

    .right-bar, .left-bar{
        height: 80%;
    }


    .right-bar{
        grid-area: right-bar
    }

    .body{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1.5fr 2fr 1fr;
        grid-template-areas:
        "left-bar main-input right-bar"
        "left-bar main-input right-bar"
        "footer footer footer";

        height: 100vh;
        width: 100vw;
    }

    footer{
        text-align: center;
        background: #FFFFFF;
        border: 1px solid #00FFD1;
        box-sizing: border-box;
        box-shadow: -8px -6px 4px rgb(255, 1, 168, 0.5), 7px 9px 4px rgba(255, 0, 199, 0.25);

        font-family: "Monserrat", sans-serif;

    }

    footer > button{
        align-content: center;
        cursor: pointer;
        margin-top: 30px;
        width: 5%;
    }

    footer > p{
        margin-top: 10vh;
    }

    .noTitleError{
        background: #FF380D;
        margin: 0;
        height: 230px;
        text-align: center;
    }

    .noTitleError > p{
        font-family: fantasy;
        border: 10px black;
        font-size: xx-large;
    }

</style>