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
import {Controller, useFormContext} from "react-hook-form";

export default function QuoteExtraInfoSection({ inputBg, borderColor }) {
  const { register, control } = useFormContext();

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
                { ...register("paymentTerms") }
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
                { ...register("note") }
              />
            </Box>

            <Box p={1}>
              <Controller
                  name="displaySignature"
                  control={control}
                  render={({ field: { value, onChange, ...field} }) => (
                      <CustomCheckbox
                          label="是否顯示簽章欄位"
                          variant="outline"
                          colorPalette="cyan"
                          checked={value}
                          onCheckedChange={(details) => onChange(details.checked)}
                          {...field}
                      />
                  )}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}