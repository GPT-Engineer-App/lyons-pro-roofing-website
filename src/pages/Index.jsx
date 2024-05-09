import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Image src="https://images.unsplash.com/photo-1657195721935-e73e545a2aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb29maW5nJTIwY29tcGFueXxlbnwwfHx8fDE3MTUyMjQ1NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lyons Pro Roofing" boxSize="200px" objectFit="cover" borderRadius="full" />
        <Heading as="h1" size="2xl" textAlign="center">
          Lyons Pro Roofing
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Professional Roofing Solutions for Residential and Commercial Properties
        </Text>
        <Text textAlign="center" maxW="container.md">
          At Lyons Pro Roofing, we pride ourselves on delivering top-quality roofing services tailored to your needs. Whether you need a new roof installation, repair, or maintenance, our team of experienced professionals is here to ensure your roof is in perfect condition.
        </Text>
        <Button leftIcon={<FaPhoneAlt />} colorScheme="blue" size="lg" variant="solid">
          Call Us Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
