import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';



const Dashboard = ({ categories }) => {
    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-9xl sm:px-5 lg:px-9">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-10 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            {categories.map((category) => (
                                    <div key={category.id} className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <div className="flex justify-center items-center mb-4">
                                                <h2 className="card-title">
                                                    {category.name}
                                                </h2>    
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                                            {category.budget.map(bud => {
                                                const totalExpenses = bud.expense.reduce((sum, expense) => sum + parseFloat(expense.amount), 0).toFixed(2);
                                                return (
                                                    <div key={bud.id}>
                                                        <div className="justify-center items-center">
                                                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                                                {bud.name} - {" Limit:"}
                                                                {bud.amount}
                                                            </h3>
                                                            <div className='flex justify-center items-center w-full'
                                                                style={{
                                                                    height: "100px",
                                                                    width: "120%",
                                                                }}
                                                            >
                                                                <Gauge
                                                                    value={parseInt(
                                                                        totalExpenses
                                                                    )}
                                                                    valueMax={parseInt(
                                                                        bud.amount
                                                                    )}
                                                                    startAngle={
                                                                        -110
                                                                    }
                                                                    endAngle={
                                                                        110
                                                                    }
                                                                    sx={{
                                                                        [`& .${gaugeClasses.valueText}`]:
                                                                            {
                                                                                fontSize: 12,
                                                                                transform:
                                                                                    "translate(0px, 0px)",
                                                                            },
                                                                    }}
                                                                    text={({
                                                                        value,
                                                                        valueMax,
                                                                    }) =>
                                                                        `${value} / ${valueMax}`
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;
