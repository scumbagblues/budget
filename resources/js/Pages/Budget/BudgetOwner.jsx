import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreateBudgetOwner from '@/Pages/Budget/Partials/CreateBudgetOwner';
import DangerButton from '@/Components/DangerButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import { Head } from '@inertiajs/react';

const BudgetOwner = ({ owners }) => {
    const [confirmingOwnerDeletion, setConfirmingOwnerDeletion] = useState(false);
    const [ownerToDelete, setOwnerToDelete] = useState(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({});

    const confirmOwnerDeletion = (owner) => {
        setOwnerToDelete(owner);
        setConfirmingOwnerDeletion(true);
    };

    const deleteOwner = (e) => {
        e.preventDefault();

        destroy(route('owners.destroy', ownerToDelete.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingOwnerDeletion(false);
        setOwnerToDelete(null);
        clearErrors();
        reset();
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Budget Owners
                </h2>
            }
        >
            <Head title="Budget Owners" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <CreateBudgetOwner className="max-w-xl" />
                            <div className="mt-6">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {owners.map(owner => (
                                            <tr key={owner.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {owner.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    <Link href={`/budget/owner/edit/${owner.id}`} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600">
                                                        Edit
                                                    </Link>
                                                    <span className="mx-2"></span>
                                                    <DangerButton onClick={() => confirmOwnerDeletion(owner)}>
                                                        Delete Budgetg Owner
                                                    </DangerButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={confirmingOwnerDeletion} onClose={closeModal}>
                <form onSubmit={deleteOwner} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete this budget owner?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once this owner is deleted, you cannot restore it. You will need to create a new owner again.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Category
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default BudgetOwner;