import { Badge, Box, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { InfoSection } from "../../shared/ui/InfoSection";
import { applyHomeMetadata } from "./homeMetadata";
import { homePageContent } from "./homeContent";

export function HomePage() {
  useEffect(() => {
    applyHomeMetadata();
  }, []);

  return (
    <Box minH="100vh" bg="brand.50">
      <Container maxW="6xl" px={{ base: 5, md: 8 }} py={{ base: 10, md: 16 }}>
        <Stack spacing={{ base: 10, md: 14 }}>
          <Stack as="header" spacing={6} maxW="4xl">
            <Badge
              alignSelf="flex-start"
              colorScheme="green"
              color="brand.800"
              bg="brand.100"
              px={3}
              py={1}
              borderRadius="md"
            >
              Plataforma em preparação
            </Badge>
            <Stack spacing={4}>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="1.05">
                {homePageContent.applicationName}
              </Heading>
              <Heading as="p" size={{ base: "lg", md: "xl" }} color="brand.700" lineHeight="1.25">
                {homePageContent.headline}
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="brand.800" maxW="3xl" lineHeight="1.8">
                {homePageContent.description}
              </Text>
            </Stack>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {homePageContent.principles.map((principle) => (
              <Box
                as="article"
                key={principle.title}
                bg="white"
                border="1px solid"
                borderColor="brand.100"
                borderRadius="lg"
                p={5}
                boxShadow="sm"
              >
                <Heading as="h2" size="md" mb={3}>
                  {principle.title}
                </Heading>
                <Text color="brand.800" lineHeight="1.7">
                  {principle.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Stack spacing={7}>
            <InfoSection title="Para a comunidade">{homePageContent.audienceMessage}</InfoSection>
            <InfoSection title="Próximos passos">{homePageContent.availabilityMessage}</InfoSection>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
