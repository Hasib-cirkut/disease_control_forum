<script>
    import Navbar from '../Components/Navbar.svelte'
</script>

<style>

    .left-bar{
        grid-area: left-bar;
    }

    .main-input{
        grid-area: main-input;
        display: flex;
        flex-direction: column;
        height: 70%;
        margin-top: 13vh;

        background: #FFFFFF;
        border: 1px solid #FF00A8;
        box-sizing: border-box;
        box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.3);
    }

    .main-input > *{
        margin-left: 2vw;
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
        margin-top: 10vh;
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

</style>

<Navbar />

<div class="body">

    <div class="left-bar"></div>

    <div class="main-input">
        <input type="text" id="title" placeholder="Title">
        <input type="text" id="tags" placeholder="4 Tags max. space separated.">
        <textarea id="body" cols="30" rows="30"></textarea>
    </div>

    <div class="right-bar"></div>

    <footer>
        <button>Publish</button>

        <p>developed by hasib</p>
    </footer>

</div>