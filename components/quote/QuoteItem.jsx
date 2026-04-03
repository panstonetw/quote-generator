import React from 'react';
import { FloatingInput } from "@/components/form/FloatingInput";
import { Button, HStack, Separator } from "@chakra-ui/react";
import { CustomTooltip } from "@/components/text/CustomTooltip";
import { Copy, Trash2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

export const QuoteItem = ({ index }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <HStack gap={4} alignItems="flex-start">
            <FloatingInput label="類別" width="150px" {...register(`items.${index}.category`)} />

            <FloatingInput
                label="項目"
                width="100px"
                errorText="項目名稱不得為空"
                invalid={!!errors.items?.[index].name}
                {...register(`items.${index}.name`, { required: true })}
            />

            <FloatingInput
                label="單價"
                width="100px"
                errorText="單價不得為空"
                invalid={!!errors.items?.[index].price}
                {...register(`items.${index}.price`, { required: true })}
            />

            <FloatingInput label="數量" width="80px" defaultValue={1} {...register(`items.${index}.quantity`)} />

            {/* <FloatingInput label="單位" width="100px" /> */}

            <FloatingInput label="金額" width="120px" value={0} disabled {...register(`items.${index}.amount`)} />

            <HStack>
                <CustomTooltip
                    trigger={
                        <Button size="sm" variant="outline" colorPalette="cyan">
                            <Copy />
                        </Button>
                    }
                    content="複製"
                />

                <CustomTooltip
                    trigger={
                        <Button size="sm" variant="outline" colorPalette="red">
                            <Trash2 />
                        </Button>
                    }
                    content="刪除"
                />
                <Separator />
            </HStack>
        </HStack>
    );
};