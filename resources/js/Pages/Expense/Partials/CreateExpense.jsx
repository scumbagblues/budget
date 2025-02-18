import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';


export default function CreateExpense({ className = '', budgets }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        amount: '',
        extra_spent: false,
        budget_id: '',
        description: '',
        expense_date: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('expenses'), {
            onFinish: () => reset('amount', 'budget_id', 'description'),
            forceFormData: true,
        });
    };

    return (
        <section>
            <header>
                <h2>
                    Create Expense
                </h2>
            </header>
             <form onSubmit={submit}>
                <div className="flex items-center mb-4">
                    <div className="flex-3">
                        <TextInput
                            id="amount"
                            name="amount"
                            type="number"
                            placeholder="Amount"
                            value={data.amount}
                            className="input input-bordered w-full max-w-xs"
                            autoComplete="amount"
                            onChange={(e) => setData('amount', e.target.value)}
                            required
                        />
                        {errors.amount && <div className="text-red-600">{errors.amount}</div>}
                    </div>
                    <div className="ml-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="extra_spent"
                                checked={data.extra_spent}
                                onChange={(e) => setData('extra_spent', e.target.checked)}
                                className="checkbox checkbox-primary"
                            />
                            <span className="ml-2">Extra Spent</span>
                        </label>
                        {errors.extra_spent && <div className="text-red-600">{errors.extra_spent}</div>}
                    </div>
                </div>
                <div className="mb-4">
                    <select
                        name="budget_id"
                        value={data.budget_id}
                        onChange={(e) => setData('budget_id', e.target.value)}
                        className="input input-bordered w-full max-w-xs"
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
                <div className="mb-4">
                    <TextInput
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        className="input input-bordered w-full max-w-xs"
                        autoComplete="description"
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div className="mb-4">
                    <TextInput
                        id="expense_date"
                        name="expense_date"
                        type="date"
                        placeholder="Expense Date"
                        value={data.expense_date}
                        className="input input-bordered w-full max-w-xs"
                        autoComplete="expense_date"
                        onChange={(e) => setData('expense_date', e.target.value)}
                        required
                    />
                    <InputError message={errors.expense_date} className="mt-2" />
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton disabled={processing}>
                        Create Expense
                    </PrimaryButton>
                </div>
            </form>
        </section>
    )
}