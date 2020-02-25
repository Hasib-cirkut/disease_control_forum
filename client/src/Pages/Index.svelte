<script>
    import Navbar from '../Components/Navbar.svelte'
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
</style>

<Navbar />

<div class="index">

    <div class="leftleft" />

    <div class="left">
    
    </div>

    <div class="middle">
    
    </div>

    <div class="right">
    
    </div>

    <div class="rightright" />
    
</div>