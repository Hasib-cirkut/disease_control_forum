

<style>

    .left-bar{
        grid-area: left-bar;
    }

    .main-input{
        grid-area: main-input;
    }

    .right-bar{
        grid-area: right-bar
    }

    .body{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        grid-template-areas:
        "left-bar main-input right-bar"
        "left-bar main-input right-bar"
        "left-bar main-input right-bar";

        height: 100vh;
        width: 100vw;
    }

</style>


<div class="body">

    <div class="left-bar"></div>

    <div class="main-input">
        <input type="text" id="title">
        <input type="text" id="tags">
        <textarea id="body" cols="30" rows="10"></textarea>
    </div>

    <div class="right-bar"></div>

</div>