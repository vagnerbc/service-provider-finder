import { ChakraProvider } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { theme } from "../shared/design-system/theme";

export function AppProvider({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
