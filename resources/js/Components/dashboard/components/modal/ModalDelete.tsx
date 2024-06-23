import React from 'react'
import Modal from './Modal'

interface DeleteConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirmDelete: () => void
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirmDelete,
}) => {
    return (
        <Modal
            title="Confirm Delete"
            isOpen={isOpen}
            onClose={onClose}
            footer={
                <>
                    <button
                        className="text-white bg-red-700 hover:bg-red-800 border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
                        onClick={onConfirmDelete}
                    >
                        Delete
                    </button>
                </>
            }
        >
            <p className='text-black dark:text-slate-400'>Are you sure you want to delete this item?</p>
        </Modal>
    )
}

export default DeleteConfirmationModal