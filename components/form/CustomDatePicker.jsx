"use client";

import { useEffect, useState } from "react";
import { DatePicker, InputGroup, Portal } from "@chakra-ui/react";
import { LuCalendar, LuChevronsUpDown } from "react-icons/lu";

export const CustomDatePicker = ({ label, bg, borderRadius, locale }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const period = [
        { view: "day", element: <DatePicker.DayTable /> },
        { view: "month", element: <DatePicker.MonthTable /> },
        { view: "year", element: <DatePicker.YearTable /> }
    ];

    const format = (date) => {
        const day = date.day.toString().padStart(2, "0");
        const month = date.month.toString().padStart(2, "0");
        const year = (date.year).toString();
        return `${year}-${month}-${day}`;
    }

    return (
        <DatePicker.Root
            locale={locale ?? "zh-TW"}
            format={format}
            maxWidth="20rem"
            placeholder="yyyy-mm-dd"
        >
            {label && <DatePicker.Label>{label}</DatePicker.Label>}
            <InputGroup
                as={DatePicker.Control}
                startElement={<LuCalendar />}
                endElement={
                    <DatePicker.Trigger>
                        <LuChevronsUpDown />
                    </DatePicker.Trigger>
                }>
                <DatePicker.Input bg={bg} borderRadius={borderRadius} />
            </InputGroup>
            <Portal>
                <DatePicker.Positioner>
                    <DatePicker.Content>
                        { period.map((item) => (
                            <DatePicker.View key={item.view} view={item.view}>
                                <DatePicker.Header />
                                { item.element }
                            </DatePicker.View>
                        )) }
                    </DatePicker.Content>
                </DatePicker.Positioner>
            </Portal>
        </DatePicker.Root>
    );
}