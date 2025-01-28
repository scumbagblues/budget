import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreateBudget from '@/Pages/Budget/Partials/CreateBudget';
import DangerButton from '@/Components/DangerButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import { Head } from '@inertiajs/react';

const Index = ({ budgets, categories }) => {
    const [confirmingBudgetDeletion, setConfirmingBudgetDeletion] = useState(false);
    const [budgetToDelete, setBudgetToDelete] = useState(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({});

    const confirmBudgetDeletion = (budget) => {
        setBudgetToDelete(budget);
        setConfirmingBudgetDeletion(true);
    };

    const deleteBudget = (e) => {
        e.preventDefault();

        destroy(route('budgets.destroy', budgetToDelete.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const getCategoryName = (categoryId) => {
        const category = categories.find(category => category.id === categoryId);
        return category ? category.name : 'Unknown';
    };

    const closeModal = () => {
        setConfirmingBudgetDeletion(false);
        setBudgetToDelete(null);
        clearErrors();
        reset();
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Budget
                </h2>
            }
        >
            <Head title="Budget" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <CreateBudget className="max-w-xl" categories={categories} />
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <thead>
                                        <tr>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Amount
                                            </th>
                                            <th>
                                                Category
                                            </th>
                                            <th>
                                                Extra Spent
                                            </th>
                                            <th>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {budgets.map(budget => (
                                            <tr key={budget.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {budget.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {budget.amount}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {getCategoryName(budget.category_id)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {budget.extra_spent ? 'Yes' : 'No'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    <Link href={`/budgets/edit/${budget.id}`} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600">
                                                        Edit
                                                    </Link>
                                                    <span className="mx-2"></span>
                                                    <DangerButton onClick={() => confirmBudgetDeletion(budget)}>
                                                        Delete Budget
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
            <Modal show={confirmingBudgetDeletion} onClose={closeModal}>
                <form onSubmit={deleteBudget} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete this budget?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once this budget is deleted, you cannot restore it. You will need to create a new budget again.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Budget
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default Index;