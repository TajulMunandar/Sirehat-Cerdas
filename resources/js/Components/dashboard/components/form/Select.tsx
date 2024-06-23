import { Field, Label, Select } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { TbChevronDown } from "react-icons/tb";

export interface ISelectItemProps {
    text: string;
    value: string;
}

interface ISelectProps {
    name?: string;
    label?: string;
    value?: any;
    items: ISelectItemProps[];
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect: React.FC<ISelectProps> = ({
    name,
    label,
    value,
    items,
    disabled,
    onChange,
}) => {
    return (
        <Field>
            {label && (
                <Label className="text-sm/6 font-medium text-black dark:text-white">
                    {label}
                </Label>
            )}
            <div className="relative">
                <Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={clsx(
                        "block w-full appearance-none rounded-lg bg-white dark:bg-graydark border border-black/25 dark:border-slate-400 py-2.5 px-3 text-sm/6 text-black dark:text-white",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    disabled={disabled}
                    required
                >
                    <option value="default" disabled selected={!value}>
                        Select one
                    </option>
                    {items.map((item, idx) => (
                        <option key={idx} value={item.value}>
                            {item.text}
                        </option>
                    ))}
                </Select>
                <TbChevronDown
                    className="group pointer-events-none absolute top-3.5 right-3.5 size-4.5 text-graydark dark:text-slate-300"
                    aria-hidden="true"
                />
            </div>
        </Field>
    );
};

export default FormSelect;
