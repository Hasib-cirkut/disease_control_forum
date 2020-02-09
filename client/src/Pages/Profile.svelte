



<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "monserrat", sans-serif;
    }

    .body{
        background: rgb(240, 240, 240);
        height: 100vh;
    }

    .intro {
    grid-area: intro;
    }

    .profilepic {
    grid-area: profilepic;
    }

    .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "intro profilepic"
        "intro profilepic"
        "intro profilepic";
    }

    .intro{
        margin-top: 20vh;
        margin-left: 10vw;
    }

    .profilepic{
        margin-top: 20vh;
        margin-left: 15vw;
    }

    h3{
        margin-top: 6vh;
        margin-bottom: 2vh;
    }

</style>


<div class="body">

        <div class="intro">
            <p style="font-size: x-large">Hello</p>

            <h3 style="font-weight: 100">My name is Bill Gates</h3>

            <h3 style="font-weight: 100">I am an Entrepreneur</h3>

            <h3 style="font-weight: 50">Here are all the posts I’ve made since I joined the community</h3>
        </div>

        <div class = "profilepic">
            <img src="dummyMale.png" alt="dummyMale" width="210" height="200">
        </div>
</div>


    