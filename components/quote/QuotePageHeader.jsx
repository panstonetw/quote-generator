import { Button, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { LuGithub } from "react-icons/lu";

export default function QuotePageHeader() {
  return (
    <Flex justify="space-between" align="start" mb={6}>
      <Heading size="2xl" letterSpacing="tight">
        報價單產生器
      </Heading>

      <HStack spacing={3}>
        <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="xl">
          <Icon size="lg">
            <LuGithub />
          </Icon>
          <Text>Star</Text>
        </Button>

        <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="xl">
          登入
        </Button>
      </HStack>
    </Flex>
  );
}
