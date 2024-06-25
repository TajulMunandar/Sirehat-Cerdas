import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import React from "react";

interface IModalProps {
    title: string;
    isOpen: boolean;
    onClose: any;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}

const ModalObat: React.FC<IModalProps> = ({
    title = "Modal Title",
    isOpen = false,
    onClose,
    children,
    footer,
}) => {
    return (
        <>
            <Transition appear show={isOpen}>
                <Dialog
                    as="div"
                    className="relative z-9999 focus:outline-none"
                    onClose={onClose}
                >
                    <div className="fixed inset-0 z-20 w-screen bg-black/60 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white dark:bg-graydark p-6">
                                    <DialogTitle
                                        as="h3"
                                        className="text-lg font-semibold text-black dark:text-white"
                                    >
                                        {title}
                                    </DialogTitle>
                                    <div className="mt-2">{children}</div>
                                    <div className="mt-4">
                                        {footer ? (
                                            <div className="flex justify-end items-center gap-2">
                                                <button
                                                    type="button"
                                                    className="text-graydark dark:text-black bg-transparent border border-slate-400 hover:!border-slate-400 hover:!bg-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:!bg-slate-400/90 transition-colors duration-200"
                                                    onClick={onClose}
                                                >
                                                    Cancel
                                                </button>
                                                {footer}
                                            </div>
                                        ) : (
                                            <button
                                                type="button"
                                                className="text-black bg-blue-700 hover:!bg-blue-800 focus:!ring-4 focus:!ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:!bg-blue-600 dark:hover:!bg-blue-700 focus:outline-none dark:focus:!ring-blue-800"
                                                onClick={onClose}
                                            >
                                                Close
                                            </button>
                                        )}
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default ModalObat;
