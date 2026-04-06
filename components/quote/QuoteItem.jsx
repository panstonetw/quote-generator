import React, { useEffect } from 'react';
import { FloatingInput } from "@/components/form/FloatingInput";
import { Button, HStack, Separator } from "@chakra-ui/react";
import { CustomTooltip } from "@/components/text/CustomTooltip";
import { Copy, Trash2 } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

export const QuoteItem = ({ index, handleCopy, handleRemove }) => {
    const {
        register,
        control,
        setValue,
        formState: { errors }
    } = useFormContext();

    const [price, quantity] = useWatch({
        control,
        name: [`items.${index}.price`, `items.${index}.quantity`],
    });

    const amount = (Number(price) || 0) * (Number(quantity) || 0);

    useEffect(() => {
        setValue(`items.${index}.amount`, amount);
    }, [amount, index, setValue]);

    return (
        <HStack gap={4} alignItems="flex-start">
            <FloatingInput label="類別" width="20%" {...register(`items.${index}.category`)} />

            <FloatingInput
                label="項目"
                width="20%"
                invalid={!!errors.items?.[index]?.name}
                {...register(`items.${index}.name`, { required: "項目名稱不得為空" })}
            />

            <FloatingInput
                label="單價"
                width="15%"
                invalid={!!errors.items?.[index]?.price}
                {...register(`items.${index}.price`, { required: "單價不得為空" })}
            />

            <FloatingInput label="數量" width="15%" defaultValue={1} {...register(`items.${index}.quantity`)} />

            <FloatingInput label="金額" width="15%" value={amount} disabled />

            <HStack>
                <CustomTooltip
                    trigger={
                        <Button size="sm" variant="outline" colorPalette="cyan" onClick={() => handleCopy(index)}>
                            <Copy />
                        </Button>
                    }
                    content="複製"
                />

                <CustomTooltip
                    trigger={
                        <Button size="sm" variant="outline" colorPalette="red" onClick={() => handleRemove(index)}>
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