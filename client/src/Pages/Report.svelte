<script>
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle, Input
  } from "sveltestrap";

  import {navigate} from 'svelte-routing'

  export let post_id;
  let description = ''

  const handleReport = async (event) =>{
        event.preventDefault()

        let data = {
            post_id,
            description
        }

        data = await JSON.stringify(data)

        let reData  = await fetch('http://localhost:3000/reports/submitReport', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json' 
            },
            body: data
        })

        reData = await reData.json()

        if(reData.message === 'reportsubmitted'){
            navigate('/index')
        }
    }
</script>



<Card class=".col-sm-1 rounded2 .col-md-6 .offset-md-3">
  <CardHeader>
    <CardTitle>Report</CardTitle>
  </CardHeader>
  <CardBody>

  <Input type="textarea" bind:value={description}/>

    
    <Button on:click={handleReport}>Submit Report</Button>
  </CardBody>
  <CardFooter>We will inform the author.</CardFooter>
</Card>