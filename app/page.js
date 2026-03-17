"use client";

import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    VStack,
    Text,
    Input,
    SimpleGrid,
    Icon,
    Separator,
    Alert,
    Collapsible,
    FileUpload,
    InputGroup,
    Tabs,
    Stack,
    NativeSelect,
    Link,
    Textarea
} from '@chakra-ui/react';
import {
    Building2,
    ChevronDown,
    ChevronUp,
    Copy, DollarSign,
    Eye,
    FileText,
    Mail,
    MapPin,
    PanelRightClose,
    Phone,
    Plus,
    ScrollText,
    Trash2,
    User
} from "lucide-react";
import { LuGithub, LuShoppingCart, LuUpload } from "react-icons/lu";
import { CustomDatePicker } from "@/components/form/CustomDatePicker";
import { FloatingInput } from "@/components/form/FloatingInput";
import { CustomNumberInput } from "@/components/form/CustomNumberInput";
import { CustomTable } from "@/components/data/CustomTable";
import { CustomCheckbox } from "@/components/form/CustomCheckbox";
import { CustomTooltip } from "@/components/text/CustomTooltip";
import QuotePageHeader from "@/components/quote/QuotePageHeader";
import QuotePreviewPanel from "@/components/quote/QuotePreviewPanel";
import QuoteBasicInfoSection from "@/components/quote/QuoteBasicInfoSection";
import QuoteItemsSection from "@/components/quote/QuoteItemsSection";
import QuoteExtraInfoSection from "@/components/quote/QuoteExtraInfoSection";

export default function QuoteGeneratorChakra() {
    const [open, setOpen] = useState(false);
    // 色彩配置
    const formBg = {base: 'gray.200'};
    const inputBg = {base: 'white'};
    const borderColor = {base: 'gray.200', _dark: 'gray.700'};

    const columns = [
        { key: "category", name: "類別" },
        { key: "item", name: "項目" },
        { key: "price", name: "單價" },
        { key: "quantity", name: "數量" },
        { key: "amount", name: "金額" }
    ];

    const data = [
        { category: "-", item: "網站設計與開發", price: 36000, quantity: 1, amount: 36000 },
        { category: "-", item: "版面客製與 PDF 匯出", price: 12000, quantity: 1, amount: 12000 }
    ]

    return (
        <Box minH="100vh" bg="gray.50" py={8} color="gray.800">
            <Container maxW="1400px">
                <QuotePageHeader />

                {/* Tab Switcher */}
                <HStack mb={4} p={1} bg="white" border="1px" borderColor="gray.200" borderRadius="xl" shadow="sm"
                        w="fit-content">
                    <Tabs.Root defaultValue="quote">
                        <Tabs.List>
                            <Tabs.Trigger value="quote">
                                報價單
                            </Tabs.Trigger>
                            <Tabs.Trigger value="logs">
                                更新紀錄
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="quote" p={2}>
                            <SimpleGrid columns={{base: 1, lg: 2}} spacing={6} templateColumns={{lg: '1.2fr 1fr'}}
                                        gap={6}>
                                <VStack spacing={6} align="stretch" flex={1}>
                                    <QuoteBasicInfoSection
                                        open={open}
                                        setOpen={setOpen}
                                        formBg={formBg}
                                        inputBg={inputBg}
                                        borderColor={borderColor}
                                    />

                                    <QuoteItemsSection />

                                    <QuoteExtraInfoSection inputBg={inputBg} />                                                             
                                </VStack>

                                {/* 報價單預覽 */}
                                <QuotePreviewPanel columns={columns} data={data} />
                            </SimpleGrid>
                        </Tabs.Content>
                    </Tabs.Root>
                </HStack>
            </Container>
        </Box>
    );
}