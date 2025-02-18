import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';


const EditBudgetOwner = ({owner}) => {
    const { data, setData, post, processing, errors } = useForm({
        name: owner.name,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('owners.update', owner.id), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Edit Budget Owners
            </h2>
        }
    >
        <Head title="Edit Owners" />
        <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">    
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />
                                    <InputError className="mt-2" message={errors.name} />
                                </div>
                                <div className="flex mt-4 items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        Update Owner
                                    </PrimaryButton>
                                </div>
                                
                            </form>
                        </div>
                    </div>    
                </div>
            </div>
    </AuthenticatedLayout>
    );
};

export default EditBudgetOwner;