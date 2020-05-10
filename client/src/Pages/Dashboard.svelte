<script>
  import Navbar from "../Components/Navbar.svelte";
  import { reportStore } from "../Stores/report.js";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { deleteFetch, getFetch } from "../Js/Fetch";
  import ReportCard from "../Components/ReportCard.svelte";
  import AdminshipCard from "../Components/AdminshipCard.svelte";

  import {
    Button,
    Modal,
    ModalBody,
    ButtonGroup,
    ModalHeader
  } from "sveltestrap";

  let showList = [true, false, false];

  let open = false;
  let noReport = false;
  let noAdminshipReq = false;

  const toggle = () => (open = !open);

  let reportData = [];
  let adminshipData = [];

  onMount(async () => {
    reportData = await $reportStore;

    if (reportData.message === "noreportfound") {
      noReport = true;
    }

    adminshipData = await getFetch(
      "http://localhost:3000/users/adminRequests/"
    );

    console.log(adminshipData);

    if (adminshipData.length === 0) {
      noAdminshipReq = true;
    }
  });

  ///Left bar JS

  const handleLeftBar = arg => {
    for (let i = 0; i < showList.length; i++) {
      showList[i] = false;
    }

    showList[arg - 1] = true;
  };
</script>

<style>
  .left,
  .right {
    margin-top: 10vh;
  }

  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
  }

  .right {
    grid-area: right;
    display: flex;
    flex-direction: column;
  }

  .container {
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-template-areas: "left right";
  }

  .left-bar {
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 220px;
    position: fixed;
    z-index: 1;
    background-color: #bdbdbd;
    overflow-x: hidden;
    padding-top: 20px;
  }
</style>

<div class="container">

  <div class="left">

    <div class="left-bar flex-col">

      <button
        class="py-2 px-4 w-full h-12 bg-gray-200 rounded-sm text-gray-700
        font-light focus:outline-none tracking-wider"
        on:click={() => {
          handleLeftBar(1);
        }}>
        Reports
      </button>

      <button
        class="py-2 px-4 w-full h-12 bg-gray-200 rounded-sm text-gray-700
        font-light focus:outline-none tracking-wider mt-4"
        on:click={() => {
          handleLeftBar(2);
        }}>
        Admin request
      </button>

      <button
        class="py-2 px-4 w-full h-12 bg-gray-200 rounded-sm text-gray-700
        font-light focus:outline-none tracking-wider mt-4"
        on:click={() => {
          handleLeftBar(2);
        }}>
        Stats
      </button>

    </div>

  </div>

  <div class="right">
    {#if showList[0]}
      <div
        class="w-7/12 h-16 bg-teal-500 rounded-sm text-gray-800 font-thin
        items-center px-4 py-2">

        <span class="text-3xl">Reports</span>

      </div>

      {#if noReport}
        <div
          class="mt-4 px-8 py-4 bg-blue-700 w-2/6 h-32 text-center rounded-sm">

          <p class="my-4 text-2xl tracking-wider font-hairline text-gray-200">
            No
            <span class="text-orange-500 font-normal">reports</span>
            Hurray. Great adminship
          </p>

        </div>
      {:else}
        {#each reportData as post}
          <ReportCard data={post} />
        {/each}
      {/if}
    {/if}

    {#if showList[1]}
      <div
        class="w-7/12 h-16 bg-teal-500 rounded-sm text-gray-800 font-thin
        items-center px-4 py-2">

        <span class="text-3xl">Adminship</span>

      </div>

      {#if noAdminshipReq}
        <div
          class="mt-4 px-8 py-4 bg-blue-700 w-2/6 h-32 text-center rounded-sm">

          <p class="my-4 text-2xl tracking-wider font-hairline text-gray-200">
            No one want to be Admin
          </p>

        </div>
      {:else}
        {#each adminshipData as data}
          <AdminshipCard {data} />
        {/each}
      {/if}
    {/if}

  </div>

</div>
