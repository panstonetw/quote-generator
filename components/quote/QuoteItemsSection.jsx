"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  NativeSelect,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DollarSign, Plus } from "lucide-react";
import { LuShoppingCart } from "react-icons/lu";
import { CustomNumberInput } from "@/components/form/CustomNumberInput";
import { useFieldArray, useFormContext } from "react-hook-form";
import { QuoteItem } from "@/components/quote/QuoteItem";

export default function QuoteItemsSection({ borderColor }) {
  const { control   } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: "items",
  });

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
          <Heading size="xl">服務項目</Heading>
        </HStack>

        <Button variant="outline" colorPalette="cyan" borderRadius="xl">
          <Plus />
          新增項目
        </Button>
      </Flex>

      <Box p={6} overflowX="auto">
        { fields.map((field, index) => (
            <QuoteItem key={field.id} index={index}  />
        )) }

        <HStack mt={4} alignItems="flex-start" justifyContent="space-between">
          <Stack gap="4" width="50%">
            {/* 折扣設定 */}
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb="2">
                折扣設定
              </Text>

              <HStack>
                <NativeSelect.Root width="150px">
                  <NativeSelect.Field>
                    <option value="fixed">固定金額</option>
                    <option value="percent">百分比</option>
                  </NativeSelect.Field>
                </NativeSelect.Root>

                <CustomNumberInput
                  defaultValue={0}
                  min={0}
                  startElement={<DollarSign size={16} />}
                />
              </HStack>
            </Box>

            {/* 稅別 */}
            <Box>
              <Text fontSize="sm" fontWeight="bold" mb="2">
                稅別
              </Text>

              <NativeSelect.Root>
                <NativeSelect.Field placeholder="請選擇稅別">
                  <option value="taxed">應稅</option>
                  <option value="zero">零稅率</option>
                  <option value="exempt">免稅</option>
                </NativeSelect.Field>
              </NativeSelect.Root>
            </Box>
          </Stack>

          {/* 右側金額統計 */}
          <Stack width="200px" gap="4" textAlign="right">
            <HStack justifyContent="space-between">
              <Text color="gray.500">小計</Text>
              <Text fontWeight="bold" fontSize="lg">
                $0
              </Text>
            </HStack>

            <Separator />

            <HStack justifyContent="space-between">
              <Text fontWeight="bold" fontSize="lg">
                總計
              </Text>
              <Text fontWeight="bold" fontSize="2xl" color="red.500">
                $0
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
}