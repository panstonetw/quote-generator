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
  VStack,
} from "@chakra-ui/react";
import { DollarSign, Plus } from "lucide-react";
import { LuShoppingCart } from "react-icons/lu";
import { CustomNumberInput } from "@/components/form/CustomNumberInput";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { QuoteItem } from "@/components/quote/QuoteItem";
import { useEffect, useMemo } from "react";
import { FloatingInput } from "@/components/form/FloatingInput";

export default function QuoteItemsSection({ borderColor }) {
  const { register, control, getValues, setValue } = useFormContext();
  const { fields, insert, remove } = useFieldArray({
    control,
    name: "items",
  });

  const [items, discountType, discount, taxType, otherTaxType, taxRate] = useWatch({
    control,
    name: ['items', 'discountType', 'discount', 'taxType', 'otherTaxType', 'taxRate']
  });

  const subTotalAmt = useMemo(() => {
    return items.reduce((acc, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return acc + price * quantity;
    }, 0);
  }, [items]);


  const discountNumber = Number(discount) || 0;

  const discountAfterAmt =
    discountType === 'fixed'
      ? subTotalAmt - Math.min(discountNumber, subTotalAmt)
      : subTotalAmt * (discountNumber > 10 ? discountNumber / 100 : discountNumber / 10);

  const discountValue = subTotalAmt - discountAfterAmt;

  const taxTypes = ['免稅 (0%)', '營業稅 (5%)', '二代健保 (2.11%)', '自訂稅率'];

  const taxAmt = Math.round(discountAfterAmt * (taxRate / 100));

  const finalTotalAmt = discountAfterAmt + taxAmt;

  useEffect(() => {
    if (taxType !== '3') {
      setValue('otherTaxType', '');
    }
    switch (taxType) {
      case '1':
        setValue('taxRate', 5);
        break;
      case '2':
        setValue('taxRate', 2.11);
        break;
      default:
        setValue('taxRate', 0);
        break;
    }
  }, [taxType]);

  const addItem = (index) => {
    const item = getValues(`items.${index}`);
    if (item) {
      const { id, ...rest } = item;
      insert(fields.length, rest);
    } else {
      insert(fields.length, { category: '', name: '' , price: 0, quantity: 1, amount: 0 });
    }
  }

  const removeItem = (index) => {
    if (fields.length > 1) {
      remove(index);
    }
  }

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

        <Button variant="outline" colorPalette="cyan" borderRadius="xl" onClick={() => addItem(null)}>
          <Plus />
          新增項目
        </Button>
      </Flex>

      <Box p={6} overflowX="auto">
        <VStack align="stretch" gap={4}>
          { fields.map((field, index) => (
              <QuoteItem key={field.id} index={index} handleCopy={addItem} handleRemove={removeItem} />
          )) }

          <HStack alignItems="flex-start" justifyContent="space-between">
            <Stack gap="4" width="60%">
              {/* 折扣設定 */}
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb="2">
                  折扣設定
                </Text>

                <HStack>
                  <NativeSelect.Root width="150px">
                    <NativeSelect.Field {...register('discountType')}>
                      <option value="fixed">固定金額</option>
                      <option value="percent">折數</option>
                    </NativeSelect.Field>
                  </NativeSelect.Root>

                  <CustomNumberInput
                      defaultValue={0}
                      min={0}
                      startElement={
                        discountType === 'fixed'
                          ? <DollarSign size={16} />
                          : undefined
                      }
                      {...register('discount')}
                  />
                </HStack>
              </Box>

              {/* 稅別 */}
              <Box>
                <Text fontSize="sm" fontWeight="bold" mb="2">
                  稅別
                </Text>

                { taxType !== '3' ?
                    <NativeSelect.Root>
                      <NativeSelect.Field placeholder="請選擇稅別" {...register('taxType')}>
                        { taxTypes.map((item, index) => (
                            <option key={index} value={index}>{item}</option>
                        )) }
                      </NativeSelect.Field>
                    </NativeSelect.Root>
                    :
                    <HStack>
                      <NativeSelect.Root w={130}>
                        <NativeSelect.Field placeholder="請選擇稅別" {...register('taxType')}>
                          { taxTypes.map((item, index) => (
                              <option key={index} value={index}>{item}</option>
                          )) }
                        </NativeSelect.Field>
                      </NativeSelect.Root>
                      <Box>
                        <FloatingInput
                            label="稅別"
                            width={130}
                            {...register('otherTaxType')}
                        />
                      </Box>
                      <Box>
                        <FloatingInput
                            label="稅率"
                            width={100}
                            {...register('taxRate')}
                        />
                      </Box>
                    </HStack>
                }
              </Box>
            </Stack>

            {/* 右側金額統計 */}
            <Stack width="200px" gap="4" textAlign="right">
              <HStack justifyContent="space-between">
                <Text color="gray.500">小計</Text>
                <Text fontWeight="bold" fontSize="lg">
                  $ {subTotalAmt.toLocaleString()}
                </Text>
              </HStack>

              { Number(discount) > 0 &&
                <>
                  <HStack justifyContent="space-between">
                    <Text color="gray.500">
                      { discountType === 'fixed' ? '折扣' : `折扣 (${discount}折)` }
                    </Text>
                    <Text fontWeight="bold" fontSize="lg">
                      -$ {discountValue.toLocaleString()}
                    </Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text color="gray.500">折扣後</Text>
                    <Text fontWeight="bold" fontSize="lg">
                      $ {discountAfterAmt.toLocaleString()}
                    </Text>
                  </HStack>
                </>
              }

              { taxType &&
                  <HStack justifyContent="space-between">
                    <Text color="gray.500">
                      { (otherTaxType ? (otherTaxType + (taxRate > 0 ? ` (${taxRate}%)` : '')) : taxTypes[taxType]) }
                    </Text>
                    <Text fontWeight="bold" fontSize="lg">
                      $ { taxAmt.toLocaleString() }
                    </Text>
                  </HStack>
              }

              <Separator />

              <HStack justifyContent="space-between">
                <Text fontWeight="bold" fontSize="lg">
                  總計
                </Text>
                <Text fontWeight="bold" fontSize="2xl" color="red.500">
                  $ { finalTotalAmt.toLocaleString() }
                </Text>
              </HStack>
            </Stack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}