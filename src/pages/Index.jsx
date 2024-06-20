import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to FitTrack
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate fitness tracking app. Track your workouts, monitor your progress, and achieve your fitness goals.
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
          <Image src="/images/fitness-hero.jpg" alt="Fitness Hero" borderRadius="md" boxShadow="md" />
        </Box>
        <VStack spacing={4} width="100%">
          <Button leftIcon={<FaRunning />} colorScheme="teal" size="lg" width="100%">
            Track Workouts
          </Button>
          <Button leftIcon={<FaDumbbell />} colorScheme="teal" size="lg" width="100%">
            Log Exercises
          </Button>
          <Button leftIcon={<FaHeartbeat />} colorScheme="teal" size="lg" width="100%">
            Monitor Progress
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;