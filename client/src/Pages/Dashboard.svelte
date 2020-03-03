<script>
import Navbar from '../Components/Navbar.svelte'
import {reportStore} from '../Stores/report.js'

let reportData = $reportStore
</script>

<div class="container">

        <div class="left">
        <p>Reports</p>

        <p>Adminship</p>
        </div>

        <div class="right">

        {#await reportData}
            <p>...waiting</p>
        {:then dataList}
            
            {#each dataList as {post_id, description}}
            
                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                  <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                  <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                  <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                  <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                  <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

                <h5>{post_id}</h5>
                <h3>{description}</h3>

            {/each}



        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
        </div>

</div>

<style>

    .left{
        grid-area: left;
        display: flex;
        flex-direction: column;

        height: 100%;
        width: 160px;
        position: fixed;
        z-index: 1;
        background-color: #111;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .right{
        grid-area: right;
        display: flex;
        flex-direction: column;
    }

    .container{
        min-height: 100vh;
        min-width: 100vw;
        display: grid;
        grid-template-columns: 2fr 5fr;
        grid-template-areas:
        "left right" 
    }

</style>