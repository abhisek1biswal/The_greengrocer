import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography>
            "The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life
            in Barcelona."
          </Typography>
          <Typography className="font-bold">
            - Martha, San Francisco
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }