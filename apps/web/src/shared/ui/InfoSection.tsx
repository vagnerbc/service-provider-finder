import { Box, Heading, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type InfoSectionProps = {
  title: string;
  children: ReactNode;
};

export function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <Box as="section" borderLeft="4px solid" borderColor="brand.500" pl={5} py={2}>
      <Heading as="h2" size="md" mb={2}>
        {title}
      </Heading>
      <Text color="brand.800" lineHeight="1.7">
        {children}
      </Text>
    </Box>
  );
}
