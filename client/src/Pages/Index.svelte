<script>
    import Navbar from '../Components/Navbar.svelte'
    import {Link, navigate} from 'svelte-routing'
    import readableDate from '../Js/readableDate.js'

    import {onMount} from 'svelte'

    let viewData = []
    let date;

    let userType;

    onMount(async()=>{
    let reData = await fetch(`http://localhost:3000/posts/`)

    viewData = await reData.json()


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
</script>

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

    .post > *{
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
        position: absolute;
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
    #delete-btn{
        border-radius: 3px;
    }
</style>

<Navbar />

<div class="index">

    <div class="leftleft" />

    <div class="left">
    
    </div>

    <div class="middle">

    
    {#each viewData as post}
        <Link to={`/posts/${post._id}`}>
                <div class="post" name={post._id}>

                    <h3>{post.title}</h3>
                    <div id="usernameANDdate">
                        <h4>@{post.author}</h4>
                        <p>{post.date}</p>
                    </div> <br>
                    
                    <span>{post.tags}</span>
                </div>
            </Link>
            {#if userType === 'root' || userType === 'admin'}
                <button id="delete-btn" name={post._id} on:click={handleDelete}>delete</button>
            {/if}
    {/each}

    
    </div>

    <div class="right">
    
    </div>

    <div class="rightright" />
    
</div>