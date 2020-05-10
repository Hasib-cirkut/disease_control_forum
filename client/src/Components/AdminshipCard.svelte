<script>
  export let data;
  import { deleteFetch } from "../Js/Fetch";
  import { navigate } from "svelte-routing";

  const handleAccept = async e => {
    e.preventDefault();

    let reData = await deleteFetch(
      `http://localhost:3000/reports/${e.target.name}`
    );

    if (reData.message === "deleted") {
      window.location.reload();
    }
  };

  const handleDecline = async event => {
    event.preventDefault();

    let reData = await deleteFetch(
      `http://localhost:3000/posts/delete/${event.target.name}`
    );

    if (reData.message === "deleted") {
      deleteManyReport(event.target.name);

      window.location.reload();
    }
  };

  const handleModalWarn = e => {
    e.preventDefault();
  };
</script>

<div class="card w-4/12 bg-gray-200 h-auto rounded-md hover:shadow-lg mt-8">
  <div class="card-body p-4 pb-2">
    <h5
      class="card-title text-center font-thin text-3xl text-orange-500
      tracking-wider">
      Adminship Request
    </h5>

    <div class="w-full text-center text-md mt-2">
      <a href={`/profile/${data.username}`}>

        <span class="font-medium text-md text-gray-700">{data.username}</span>
      </a>
    </div>

    <div class="flex justify-around my-4">

      <button
        class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300 mr-2 bg-green-500
        border-b-4 hover:border-yellow-600 transition duration-700 ease-in-out"
        on:click={handleAccept}
        name={`${data._id}`}>
        Accept
      </button>

      <button
        class=" shadow w-2/6 h-8 rounded-sm p-1 text-gray-300 bg-red-500
        border-b-4 hover:border-red-600 transition duration-700 ease-in-out"
        on:click={handleDecline}
        name={`${data.post_id}`}>
        Decline
      </button>
    </div>

  </div>
</div>
