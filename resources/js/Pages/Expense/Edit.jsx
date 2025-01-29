import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Edit({ expense, budgets }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        amount: expense.amount || '',
        budget_id: expense.budget_id || '',
        description: expense.description || '',
    });

    useEffect(() => {
        return () => {
            reset('amount', 'description', 'budget_id');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('expenses.update', expense.id));
    };

    return (
        <AuthenticatedLayout
                    header={
                        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            Edit Expense
                        </h2>
                    }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div className='mb-4'>
                                    <TextInput
                                        id="amount"
                                        name="amount"
                                        type="number"
                                        placeholder="Amount"
                                        value={data.amount}
                                        className="input input-bordered w-full max-w-xs"
                                        autoComplete="amount"
                                        isFocused={true}
                                        onChange={(e) => setData('amount', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.amount} className="mt-2" />
                                </div>
                                <div className="mb-4">
                                    <select
                                        name="budget_id"
                                        value={data.budget_id}
                                        onChange={(e) => setData('budget_id', e.target.value)}
                                        className="select select-bordered w-full max-w-xs"
                                        required
                                    >
                                        <option value="">Select a budget</option>
                                        {budgets.map((budget) => (
                                            <option key={budget.id} value={budget.id}>
                                                {budget.name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.budget_id} className="mt-2" />
                                </div>
                                <div className="flex items-center mb-4">
                                    <div className="flex-2">
                                        <TextInput
                                            id="description"
                                            name="description"
                                            placeholder="Description"
                                            value={data.description}
                                            className="input input-bordered w-full max-w-xs"
                                            autoComplete="description"
                                            onChange={(e) => setData('description', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.description} className="mt-2" />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton disabled={processing}>
                                        Update Expense
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>        
                </div>    
            </div>    
            
        </AuthenticatedLayout>
    );
}