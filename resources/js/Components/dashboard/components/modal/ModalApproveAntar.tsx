import React from "react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApprove: () => void;
    onRejected: () => void;
}

const ModalApproveAntar: React.FC<DeleteConfirmationModalProps> = ({
    isOpen,
    onClose,
    onApprove,
    onRejected,
}) => {
    return (
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
                                    Approval Confirmation
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-black dark:text-slate-400">
                                        Are you sure you want to approve this
                                        Items?
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-end items-center">
                                    <button
                                        className="text-red-700 dark:text-red-500 hover:text-white hover:bg-red-800 border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
                                        onClick={onRejected}
                                    >
                                        Reject
                                    </button>
                                    <button
                                        className="text-white bg-green-700 hover:bg-green-800 border border-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
                                        onClick={onApprove}
                                    >
                                        Approve
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalApproveAntar;
