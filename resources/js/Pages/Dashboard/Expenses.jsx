import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';


const Expenses = ({ budget, expenses }) => {
    const [confirmingExpenseDeletion, setConfirmingExpenseDeletion] = useState(false);
    const [expenseToDelete, setExpenseToDelete] = useState(null);

    const {
            data,
            setData,
            delete: destroy,
            processing,
            reset,
            errors,
            clearErrors,
        } = useForm({});
    
        const confirmExpenseDeletion = (expense) => {
            setExpenseToDelete(expense);
            setConfirmingExpenseDeletion(true);
        };
    
        const deleteExpense = (e) => {
            e.preventDefault();
    
            destroy(route('expenses.destroy', expenseToDelete.id), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onFinish: () => reset(),
            });
        };
    
        const closeModal = () => {
            setConfirmingExpenseDeletion(false);
            setExpenseToDelete(null);
            clearErrors();
            reset();
        };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Budget: {budget.name} | Owner: {budget.owner.name}
                </h2>
            }
        >
            <Head title="Particular Expense" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <thead>
                                        <tr>
                                            <th>Expense Amount</th>
                                            <th>Extra Spent</th>
                                            <th>Description</th>
                                            <th>Expense Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {expenses.map((expense) => (
                                            <tr key={expense.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {expense.amount}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {expense.extra_spent
                                                        ? "Yes"
                                                        : "No"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {expense.description}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {expense.expense_date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                                    <Link
                                                        href={`/expenses/edit/${expense.id}`}
                                                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <span className="mx-2"></span>
                                                    <DangerButton
                                                        onClick={() =>
                                                            confirmExpenseDeletion(
                                                                expense
                                                            )
                                                        }
                                                    >
                                                        Delete Expense
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
            <Modal show={confirmingExpenseDeletion} onClose={closeModal}>
                <form onSubmit={deleteExpense} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete this expense?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once this expense is deleted, you cannot restore it. You
                        will need to create a new expense again.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Expense
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
export default Expenses;
