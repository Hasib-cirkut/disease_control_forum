
<script>
export let currentUsername;

import Navbar from '../Components/Navbar.svelte'
import { Link } from "svelte-routing";
import Login from '../Pages/Login.svelte'

import {onMount} from 'svelte'

import readableDate from '../Js/readableDate'

let name, bio, joined, location, work, username= ''

let userloggedin
let viewData = []
let userData = []
let followButton;

if(localStorage.length === 0){
    userloggedin = false;
}else{
    userloggedin = true;
}

onMount(async()=>{
    let reData = await fetch(`http://localhost:3000/posts/byuser/${currentUsername}`)

    viewData = await reData.json()


    let localUserData = JSON.parse(localStorage.userdata)

    name = localUserData.name
    username = localUserData.username
    joined = readableDate(localUserData.joined)
    location = localUserData.location
    work = localUserData.work
    bio = localUserData.bio
    

    if(currentUsername === username){
        followButton = false
    }else{
        followButton = true;
    }
})

</script>


<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "monserrat", sans-serif;
    }

    .body{
        background: #F9FCFF;
        height: 100vh;
    }

    .middle-block {
    grid-area: middle-block;
    }

    .left-block {
    grid-area: left-block;
    }

    .right-block {
    grid-area: right-block;
    }

    .body {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "left-block middle-block right-block"
        "left-block middle-block right-block"
        "left-block middle-block right-block"
    }

    .profile-card{
        background: #FFFFFF;
        border: 2.5px solid #F9003C;
        box-sizing: border-box;
        box-shadow: 5px 5px 0px #EB00FF;
        height: 45vh;
        margin-top: 5vh;
        margin-bottom: 40px;
    }

    img{
        border-radius: 50%;
        width: 70%;
        margin-left: 3vw;
        margin-top: 9vh;
        border: 3px solid #040404;
}


    .profile-card{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: 
        "img profile-info additional-info"
    }

    .profile-info{
        grid-area: profile-info;
        margin-top: -2vh;
    }

    img{
        grid-area: img;
    }

    .additional-info{
        grid-area: additional-info;

    }

    #username{
        margin-top: 13vh;
        font-size: -webkit-xxx-large;
        font-family: "Monserrat";
    }

    #follow, #editprofile{
        margin-left: 4.5vw;
        margin-top: 4vh;
        padding: 11px 22px;
        border-radius: 3px;
        cursor: pointer;
        color: violet;
        border: none;
        background-color: #151556;
}

    #follow:hover{
        background-color: #4ba05d;
        color: #ffffff;
}

    #bio{
        margin-top: 4vh;
        width: 22vw;
    }

    #work, #location, #join{
        font-size: x-large;
        font-family: "Montserrat", "Roboto";
    }

    #location, #join{
        margin-top:2vh;
    }

    #work{
        margin-top: 13vh;
    }

    .middle-block{
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        "profile-card profile-card profile-card"
        "userInterest userPosts adds"
    }

    .profile-card{
        grid-area: profile-card
    }

    .userInterest{
        grid-area: userInterest;
    }

    .userPosts{
        grid-area: userPosts;

        display: flex;
        flex-direction: column;
    }

    .post{
        background: #FFFFFF;
        border: 3px solid #000000;
        box-sizing: border-box;
        box-shadow: -3px 4px 0px rgba(0, 56, 255, 0.74);

        height: 180px;
        margin-bottom: 30px;
    }

    .adds{
        grid-area: adds
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



</style>

{#if userloggedin === true}
<Navbar />

<div class="body">

        <div class="left-block">
        </div>

        <div class="middle-block">
            <div class="profile-card">
                <img src="/avatar.jpg" alt="avatar">
                <div class="profile-info">
                    <h4 id="username">{name}</h4>
                    {#if  followButton}
                        <button id="follow">Follow</button>
                    {:else}
                        <Link to={"/editprofile"}><button id="editprofile">Edit Profile</button></Link>
                    {/if}


                    {#if work === undefined}
                        <p id="bio"><Link to={"/editprofile"}>Update Bio+</Link></p>
                    {:else}
                        <p id="bio">{bio}</p>
                    {/if}
                </div>

                <div class="additional-info">

                    <h4 id="work">Work</h4>
                    {#if work === undefined}
                        <span id="workInfo"><Link to={"/editprofile"}>Update Work+</Link></span>
                    {:else}
                        <span id="workInfo">{work}</span>
                    {/if}
                    

                    <h4 id="location">Location</h4>
                    {#if location === undefined}
                        <span id="locationInfo"><Link to={"/editprofile"}>Update Location+</Link></span>
                    {:else}
                        <span id="locationInfo">{location}</span>
                    {/if}

                    <h4 id="join">Joined</h4>
                    <span id="joinInfo">{joined}</span>
                
                </div>
            </div>

            <div class="userInterest">
            
            </div>

            <div class="userPosts">

            {#each viewData as post}
            <Link to={`/posts/${post._id}`}>
                <div class="post" name={post._id}>

                    <h3>{post.title}</h3>
                    <div id="usernameANDdate">
                        <h4>@{post.author}</h4>
                        <p>{post.date.slice(0, 10)}</p>
                    </div> <br>
                    
                    <span>{post.tags}</span>

                </div>
            </Link>
            {/each}
            
                
            
            </div>

            

            <div class="adds">
            
            </div>
        </div>

        <div class="right-block">

            
        
        </div>
</div>

{:else}
<Login />
{/if}

    