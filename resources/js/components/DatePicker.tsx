'use client';

import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

type DatePickerProps = {
    label?: string;
    name?: string;
    value?: Date;
    onChange?: (value: Date) => void;
};
export function DatePicker({ label, name, value, onChange }: DatePickerProps) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    React.useEffect(() => {
        setDate(value);
    }, [value]);
    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setOpen(false);
        if (selectedDate && onChange) onChange(selectedDate); // only call parent if date exists
    };
    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="date" className="px-1">
                {label || 'Select Date'}
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString() : 'Select date'}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                >
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        required={false}
                        onSelect={handleSelect} // now matches Date | undefined
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
