import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';


export default function CreateBudget({ className = '', categories, owners }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        amount: '',
        extra_spent: false,
        category_id: '',
        owner_id: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('budgets'), {
            onFinish: () => reset('name', 'amount', 'extra_spent', 'category_id', 'owner_id'),
            forceFormData: true,
        });
    };

    return (
        <section>
            <header>
                <h2>
                    Create Budget
                </h2>
            </header>
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
                        name="category_id"
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        className="input input-bordered w-full max-w-xs"
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
                <div className="mb-4">
                    <select
                        name="owner_id"
                        value={data.owner_id}
                        onChange={(e) => setData('owner_id', e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                        required
                    >
                        <option value="">Select an owner</option>
                        {owners.map((owner) => (
                            <option key={owner.id} value={owner.id}>
                                {owner.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.owner_id} className="mt-2" />
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton disabled={processing}>
                        Create Budget
                    </PrimaryButton>
                </div>
            </form>
        </section>
    )
}