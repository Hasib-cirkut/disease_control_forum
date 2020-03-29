<script>

    export let key;

    import Navbar from '../Components/Navbar.svelte'
    import {Link, navigate} from 'svelte-routing'
    import readableDate from '../Js/readableDate.js'
    import {getFetch} from '../Js/Fetch'

    import {Collapse, Card} from 'sveltestrap'

    import {onMount} from 'svelte'

    let viewData = []
    let date;

    let userType;

    onMount(async()=>{

    viewData = await getFetch(`http://localhost:3000/search/posts/${key}`)

    for(let i=0; i<viewData.length; i++){
        viewData[i].date = readableDate(viewData[i].date)
    }

    let userData = await localStorage.getItem('userdata')
    userData = await JSON.parse(userData)

    userType = userData.type

})

    const handleDelete = async event =>{

        event.preventDefault()

        let reData = await fetch(`http://localhost:3000/posts/delete/${event.target.name}`,  {
            method: 'DELETE', // Method itself
            headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
 
        })
        reData = await reData.json()

        if(reData.message === 'deleted'){
            window.location.reload()
        }
    }

    const handleReport = e =>{
        let {name} = e.target

        navigate(`/report/${name}`)
    }

    

</script>



<Navbar />

<div class="index bg-blueishblack">

    <div class="leftleft" />

    <div class="left">
        <div class="py-4 text-gray-100 tracking-wider text-lg">

            <p>You searched for <span class="text-orange-500">{key}</span></p>

        </div>
    </div>

    <div class="middle pb-8">

    
    {#each viewData as post}
        
                <div class="post pb-3 shadow-lg">
                
                    <h3>{post.title}</h3>
                    <Link to={`/posts/${post._id}`}>
                        <p class="px-4 py-2 text-white shadow-sm rounded-sm tracking-wider bg-teal-500 w-1/5" style="margin-left: 30px">See post...</p>
                    </Link>
                    <div id="usernameANDdate">
                        <h4>@{post.author}</h4>
                        <p>{post.date}</p>
                    </div> <br>
                    
                    <span>{post.tags}</span>

                    <button class="px-2 py-1" id="report-btn" name={post._id} on:click={handleReport}>report</button>
                </div>
            
            {#if userType === 'root' || userType === 'admin'}
                <button class="px-4 py-2 bg-red-600 text-gray-200 tracking-wider shadow-sm" id="delete-btn" name={post._id} on:click={handleDelete}>delete</button>
            {/if}
            
    {/each}

    
    </div>

    <div class="right">
    
    </div>

    <div class="rightright" />
    
</div>

<style>
    .leftleft{
        grid-area: leftleft;
    }

    .left{
        grid-area: left;
    }

    .middle{
        grid-area: middle;
    }

    .right{
        grid-area: right;
    }

    .rightright{
        grid-area: rightright;
    }

    .index{
        display: grid;
        grid-template-columns: 2.5fr 2fr 4fr 2fr 2.5fr;

        grid-template-areas:
        "leftleft left middle right rightright";

        min-height: 100vh;
    }

    .post > * {
        margin-left: 30px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: normal;
    }

    .post > h3{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 34px;
        line-height: 41px;

        color: #000000;
    }
    

    #usernameANDdate{
        margin-bottom: 2vh;
    }

    #usernameANDdate > *{
        font-family: "Montserrat";
        font-style: normal;
        font-weight: normal; 
    }

    #usernameANDdate > h4{
        width: 88px;
        color: #F9003C;
    }

    #usernameANDdate > p{
        margin-left: 9vw;
        color: #12B8AE;
    }

    #usernameANDdate{
        display: inline-block;
    }

    .post{
        margin-top: 2vh;
        background: #FFFFFF;
        border: 3px solid #000000;
        box-sizing: border-box;
        box-shadow: -3px 4px 0px rgba(0, 56, 255, 0.74);

        min-height: 15vh;
        margin-bottom: 2vh;
    }
    #delete-btn, #report-btn{
        border-radius: 3px;
    }

    #report-btn{

        background-color: rgb(255, 56, 102);

        color: rgb(255, 255, 255);

    }
</style>