import React from "react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { TbSearch } from "react-icons/tb";

interface IInputProps {
    type: HTMLInputTypeAttribute;
    minNumber?: number;
    name?: string;
    label?: string;
    prefixIcon?: React.ReactNode;
    value?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IInputProps> = ({
    type,
    minNumber,
    name,
    label,
    prefixIcon,
    value,
    placeholder,
    required,
    onChange,
    onFocus,
}) => {
    return (
        <Field>
            {label && (
                <Label className="text-sm/6 font-medium text-black dark:text-white">
                    {label}
                </Label>
            )}
            <div className="relative">
                {prefixIcon && (
                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                        {/* {prefixIcon ? prefixIcon : <TbSearch />} */}
                    </span>
                )}
                <Input
                    type={type}
                    min={minNumber}
                    name={name}
                    placeholder={placeholder}
                    value={type !== 'file' ? value : undefined} // Avoid setting value for file inputs
                    onChange={onChange}
                    onFocus={onFocus}
                    className={clsx(
                        `${prefixIcon ? "!pl-16" : ""}`,
                        "block w-full rounded-lg border border-black/25 bg-white dark:bg-graydark dark:text-white py-2.5 px-3 text-sm text-black dark:border-slate-400",
                        "focus:border-transparent focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25 dark:data-[focus]:outline-white"
                    )}
                    required={required}
                />
            </div>
        </Field>
    );
};

export default FormInput;
