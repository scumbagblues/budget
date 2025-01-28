import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function Edit({ budget, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: budget.name || '',
        amount: budget.amount || '',
        extra_spent: budget.extra_spent || false,
        category_id: budget.category_id || '',
    });

    useEffect(() => {
        return () => {
            reset('name', 'amount', 'extra_spent', 'category_id');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('budgets.update', budget.id));
    };

    return (
        <AuthenticatedLayout
                    header={
                        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            Edit Budget
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
                                        id="name"
                                        name="name"
                                        placeholder="Budget Name"
                                        value={data.name}
                                        className="input input-bordered w-full max-w-xs"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="flex items-center mb-4">
                                    <div className="flex-1">
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
                                        <InputError message={errors.amount} className="mt-2" />
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
                                        <InputError message={errors.extra_spent} className="mt-2" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <select
                                        name="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className="select select-bordered w-full max-w-xs"
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.category_id} className="mt-2" />
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton disabled={processing}>
                                        Update Budget
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