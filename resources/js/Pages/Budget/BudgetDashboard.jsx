import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    BanknotesIcon, 
    UserPlusIcon, 
    CurrencyDollarIcon,
    TagIcon 
} from '@heroicons/react/24/solid'

export default function BudgetDashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Budget Dashboard
                </h2>
            }
        >
            <Head title="Budget Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className="flex justify-center items-center mb-4">
                                            <CurrencyDollarIcon className="size-12 text-orange-900" />
                                        </div>
                                        <h2 className="card-title">Add a new expense </h2>
                                        <p>Here you can add your expenses based on budgets and categories previously created</p>
                                        <div className="card-actions justify-end">
                                        <Link href={route('expenses')} className="btn btn-primary">
                                                    Add Expense
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className="flex justify-center items-center mb-4">
                                            <BanknotesIcon className="size-12 text-orange-900" />
                                        </div>
                                        <h2 className="card-title">
                                            Add a new budget type
                                        </h2>
                                        <p>Here you can add, edit or delete a previous budget record</p>
                                        <div className="card-actions justify-end">
                                            <Link href={route('budgets')} className="btn btn-primary">
                                                    Add Budget
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className="flex justify-center items-center mb-4">
                                            <TagIcon className="size-12 text-orange-900" />
                                        </div>
                                        <h2 className="card-title">
                                            Add a new category type
                                        </h2>
                                        <p>Here you can add, edit or delete a previous category record</p>
                                        <div className="card-actions justify-end">
                                            <Link href={route('categories')} className="btn btn-primary">
                                                    Add Category
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className="flex justify-center items-center mb-4">
                                            <UserPlusIcon className="size-12 text-orange-900" />
                                        </div>
                                        <h2 className="card-title">
                                            Add a new budget owner
                                        </h2>
                                        <p>Here you can add, edit or delete a new owner for the main budget</p>
                                        <div className="card-actions justify-end">
                                            <Link href={route('owners')} className="btn btn-primary">
                                                    Add Budget Owner
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
