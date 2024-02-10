import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function CustomCard({
  title = "Title",
  description = "Description Here",
  image = "/images/sample.jpg",
  onClick = () => {},
}) {
  return (
    <Card>
      <CardBody>
        <Stack spacing={4} direction="column">
          <Image
            objectPosition="center"
            objectFit="cover"
            borderRadius="12px"
            height="280px"
            src={image}
            alt="Sample Image"
          />
          <Heading size="md">{title}</Heading>
          <Text fontSize="sm">{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button onClick={onClick}>Change</Button>
      </CardFooter>
    </Card>
  );
}
