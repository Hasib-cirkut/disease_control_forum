<script>
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle
  } from "sveltestrap";

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

        console.log(reData)
    }
</script>



<Card class="mb-3">
  <CardHeader>
    <CardTitle>Report</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>Card subtitle</CardSubtitle>
      <textarea required bind:value={description}></textarea>
    <Button on:click={handleReport}>Button</Button>
  </CardBody>
  <CardFooter>Footer</CardFooter>
</Card>