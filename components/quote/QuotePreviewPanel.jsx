import {
  Alert,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Separator,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Eye } from "lucide-react";
import { CustomTable } from "@/components/data/CustomTable";

export default function QuotePreviewPanel({ columns, data, borderColor }) {
  return (
    <Box
      as="aside"
      position="sticky"
      top={6}
      h="fit-content"
      flex={1}
      borderRadius="2xl"
      border="1px"
      borderColor={borderColor}
      shadow="sm"
    >
      <Box px={6} py={5} borderBottom="1px" borderColor="gray.100">
        <HStack spacing={2}>
          <Flex
            w={11}
            h={11}
            align="center"
            justify="center"
            bg="gray.100"
            borderRadius="full"
          >
            <Eye />
          </Flex>
          <Heading size="xl">即時預覽</Heading>
          <Separator />
        </HStack>
      </Box>

      <VStack spacing={5} p={6} align="stretch">
        <Alert.Root status="warning" title="請先完成必填欄位後才能匯出報價單">
          <Alert.Indicator />
          <Alert.Title>請先完成必填欄位後才能匯出報價單。</Alert.Title>
        </Alert.Root>

        <HStack spacing={2}>
          <Button size="sm" variant="outline" borderRadius="2xl" disabled>
            PDF
          </Button>
          <Button size="sm" variant="outline" borderRadius="2xl" disabled>
            圖片
          </Button>
          <Button size="sm" variant="outline" borderRadius="2xl" disabled>
            Excel
          </Button>
        </HStack>

        <Box>
          <Text mb={3} fontSize="sm" fontWeight="medium" color="gray.500">
            選擇報價單樣式
          </Text>
          <HStack spacing={2}>
            <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="2xl">
              精美版
            </Button>
            <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="2xl">
              詳細版
            </Button>
            <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="2xl">
              並列版
            </Button>
          </HStack>
        </Box>

        <Box p={6} border="1px" borderColor="gray.200" borderRadius="2xl" shadow="inner">
          <Heading size="lg" mb={5}>
            [客戶名稱] - 報價單
          </Heading>
          <Separator />

          <SimpleGrid columns={2} spacingY={2} fontSize="sm" mb={6}>
            <Text fontWeight="bold">報價人員：</Text>
            <Text>-</Text>
            <Text fontWeight="bold">報價日期：</Text>
            <Text>2026-03-17</Text>
          </SimpleGrid>

          <Box borderRadius="xl" border="1px" borderColor="gray.200" overflow="hidden">
            <CustomTable columns={columns} data={data} />
          </Box>

          <Text mt={4} textAlign="right" fontSize="lg" fontWeight="bold">
            未稅：<Text as="span" color="red.600">NT$ 48,000 元</Text>
          </Text>

          <VStack align="stretch" mt={10} spacing={10}>
            <Text fontSize="sm">客戶簽章</Text>
            <Separator />
            <Text textAlign="center" fontSize="xs" color="gray.400">
              使用
              <Link
                href="https://quote-generator-kappa-blond.vercel.app"
                colorPalette="blue"
              >
                報價單產生器
              </Link>
              製作｜https://quote-generator-kappa-blond.vercel.app
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}