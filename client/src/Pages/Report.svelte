<script>
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle, Input
  } from "sveltestrap";

  import {navigate} from 'svelte-routing'
  import {postFetch} from '../Js/Fetch.js'

  export let post_id;
  let description = ''

  const handleReport = async (event) =>{
        event.preventDefault()

        let data = {
            post_id,
            description
        }

        let reData  = await postFetch('http://localhost:3000/reports/submitReport', data)


        if(reData.message === 'reportsubmitted'){
            navigate('/index')
        }
        navigate('/index')

    }
</script>



<Card class=".col-sm-1 rounded2 .col-md-6 .offset-md-3">
  <CardHeader>
    <CardTitle>Report</CardTitle>
  </CardHeader>
  <CardBody>
      <textarea required bind:value={description}></textarea>
    <Button on:click={handleReport}>Button</Button>
  </CardBody>
  <CardFooter>We will inform the author.</CardFooter>
</Card>