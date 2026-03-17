"use client";

import {
  Box,
  Button,
  Collapsible,
  FileUpload,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Building2,
  ChevronDown,
  ChevronUp,
  FileText,
  Mail,
  MapPin,
  PanelRightClose,
  Phone,
  ScrollText,
  User,
} from "lucide-react";
import { LuUpload } from "react-icons/lu";
import { CustomDatePicker } from "@/components/form/CustomDatePicker";

export default function QuoteBasicInfoSection({
  open,
  setOpen,
  formBg,
  inputBg,
  borderColor,
}) {
  return (
    <Box borderRadius="2xl" border="1px" borderColor={borderColor} shadow="sm" overflow="hidden">
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
            <FileText />
          </Flex>
          <Heading size="xl">基本資料</Heading>
        </HStack>

        <Button variant="link" size="sm" color="gray.500">
          <PanelRightClose />
          隱藏預覽
        </Button>
      </Flex>

      <VStack spacing={6} p={6} align="stretch">
        {/* 客戶資料 */}
        <Box bg={formBg} p={5} borderRadius="2xl">
          <HStack mb={5} fontSize="lg" fontWeight="semibold">
            <User />
            <Text>客戶資料</Text>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                客戶名稱
                <Text as="span" color="red.500">*</Text>
              </Text>
              <InputGroup startElement={<Building2 size={16} />}>
                <Input bg={inputBg} placeholder="請輸入客戶名稱" borderRadius="xl" />
              </InputGroup>
            </Box>

            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                統一編號
              </Text>
              <InputGroup startElement={<FileText size={16} />}>
                <Input bg={inputBg} placeholder="請輸入統一編號" borderRadius="xl" />
              </InputGroup>
            </Box>
          </SimpleGrid>

          <Collapsible.Root>
            <Collapsible.Trigger padding="2">
              <HStack
                mb={5}
                fontSize="lg"
                fontWeight="semibold"
                onClick={() => setOpen(!open)}
              >
                {open ? <ChevronUp /> : <ChevronDown />}
                <Text>LOGO、聯絡人、電話、地址</Text>
              </HStack>
            </Collapsible.Trigger>

            <Collapsible.Content>
              <SimpleGrid spacing={4}>
                <Box>
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    客戶 Logo
                    <Text as="span" color="red.500">*</Text>
                  </Text>

                  <FileUpload.Root maxW="4xl" alignItems="stretch" maxFiles={10}>
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone>
                      <Icon size="md" color="fg.muted">
                        <LuUpload />
                      </Icon>
                      <FileUpload.DropzoneContent>
                        <Text color="fg.muted">上傳客戶 Logo</Text>
                        <Text color="fg.muted">支援 PNG、JPG、GIF</Text>
                      </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                    <FileUpload.List />
                  </FileUpload.Root>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box p={1}>
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    聯絡人
                  </Text>
                  <InputGroup startElement={<User size={16} />}>
                    <Input bg={inputBg} placeholder="請輸入聯絡人" borderRadius="xl" />
                  </InputGroup>
                </Box>

                <Box p={1}>
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    連絡電話
                  </Text>
                  <InputGroup startElement={<Phone size={16} />}>
                    <Input bg={inputBg} placeholder="請輸入連絡電話" borderRadius="xl" />
                  </InputGroup>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <Box p={1}>
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    Email
                  </Text>
                  <InputGroup startElement={<Mail size={16} />}>
                    <Input bg={inputBg} placeholder="請輸入Email" borderRadius="xl" />
                  </InputGroup>
                </Box>

                <Box p={1}>
                  <Text mb={2} fontSize="sm" fontWeight="medium">
                    地址
                  </Text>
                  <InputGroup startElement={<MapPin size={16} />}>
                    <Input bg={inputBg} placeholder="請輸入地址" borderRadius="xl" />
                  </InputGroup>
                </Box>
              </SimpleGrid>
            </Collapsible.Content>
          </Collapsible.Root>
        </Box>

        {/* 報價人員資料 */}
        <Box bg={formBg} p={5} borderRadius="2xl">
          <HStack mb={5} fontSize="lg" fontWeight="semibold">
            <ScrollText />
            <Text>報價人員資料</Text>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                報價公司/人員
                <Text as="span" color="red.500">*</Text>
              </Text>
              <InputGroup startElement={<User size={16} />}>
                <Input bg={inputBg} placeholder="請輸入報價人員" borderRadius="xl" />
              </InputGroup>
            </Box>

            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                統一編號
              </Text>
              <InputGroup startElement={<FileText size={16} />}>
                <Input bg={inputBg} placeholder="請輸入統一編號" borderRadius="xl" />
              </InputGroup>
            </Box>

            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                Email
                <Text as="span" color="red.500">*</Text>
              </Text>
              <InputGroup startElement={<Mail size={16} />}>
                <Input bg={inputBg} placeholder="請輸入Email" borderRadius="xl" />
              </InputGroup>
            </Box>

            <Box p={1}>
              <Text mb={2} fontSize="sm" fontWeight="medium">
                聯絡電話
              </Text>
              <HStack>
                <InputGroup startElement={<Phone size={16} />}>
                  <Input bg={inputBg} placeholder="請輸入聯絡電話" borderRadius="xl" />
                </InputGroup>
                <Input bg={inputBg} placeholder="分機" w="24" borderRadius="xl" />
              </HStack>
            </Box>

            <Box p={1}>
              <CustomDatePicker label="報價日期" bg={inputBg} borderRadius="xl" />
            </Box>

            <Box p={1}>
              <CustomDatePicker label="有效日期" bg={inputBg} borderRadius="xl" />
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}