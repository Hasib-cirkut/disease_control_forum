
<script>
import Navbar from '../Components/Navbar.svelte'
import Login from '../Pages/Login.svelte'

let userloggedin

if(localStorage.length === 0){
    userloggedin = false;
}else{
    userloggedin = true;
}
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

    #follow{
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


</style>

{#if userloggedin === true}
<Navbar />

<div class="body">

        <div class="left-block"></div>

        <div class="middle-block">
            <div class="profile-card">
                <img src="avatar.jpg" alt="Avatar">
                <div class="profile-info">
                    <h4 id="username">Lorem Ipsum</h4>
                    <button id="follow">Follow</button>
                    <p id="bio">Passionate about programming, photography and gaming. Author of 'The complete guide to modern JavaScript'</p>
                </div>

                <div class="additional-info">

                    <h4 id="work">Work</h4>
                    <span id="workInfo">XYZ company</span>

                    <h4 id="location">Location</h4>
                    <span id="locationInfo">Brooklyn, NY</span>

                    <h4 id="join">Joined</h4>
                    <span id="joinInfo">20 December, 2019</span>
                
                </div>
            </div>
        </div>

        <div class="right-block">

            
        
        </div>
</div>

{:else}
<Login />
{/if}

    