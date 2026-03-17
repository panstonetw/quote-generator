"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { CustomCheckbox } from "@/components/form/CustomCheckbox";

export default function QuoteExtraInfoSection({ inputBg, borderColor }) {
  return (
    <Box mt={2} borderRadius="2xl" border="1px" borderColor={borderColor} shadow="sm">
      <Flex
        justify="space-between"
        align="center"
        px={6}
        py={5}
        borderBottom="1px"
        borderColor="gray.100"
      >
        <HStack spacing={3}>
          <Flex w={11} h={11} align="center" justify="center" bg="gray.100" borderRadius="full">
            <LuShoppingCart />
          </Flex>
          <Heading size="xl">其他資訊</Heading>
        </HStack>
      </Flex>

      <VStack spacing={6} p={6} align="stretch">
        <Box p={5} borderRadius="2xl">
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                付款條件
              </Text>
              <Textarea
                bg={inputBg}
                placeholder="例: 簽約 30% 完工 60% 驗收 10%"
                borderRadius="xl"
              />
            </Box>

            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                備註
              </Text>
              <Textarea
                bg={inputBg}
                placeholder="請輸入備註"
                borderRadius="xl"
              />
            </Box>

            <Box p={1}>
              <CustomCheckbox
                label="是否顯示簽章欄位"
                variant="outline"
                colorPalette="cyan"
                defaultChecked={true}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}