import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-center text-gray-600 dark:text-gray-400">
                <Link href="/dashboard">
                    HomeBudget
                </Link>    
            </div>           
        </GuestLayout>
    );
}
