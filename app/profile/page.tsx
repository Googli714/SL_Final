import { auth } from '@/auth';
import NavBar from '../ui/NavBar'
import { GetUserByEmail } from '../lib/data';
import { EnvelopeIcon, EnvelopeOpenIcon, IdentificationIcon } from '@heroicons/react/24/outline';

export default async function LoginPage() {
    const session = await auth();
    const user = await GetUserByEmail(session?.user?.email!);

    return (
        <>
            <NavBar></NavBar>
            <div className="flex justify-center items-center min-h-screen bg-red-200">
                <div className="max-w-sm w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-200 hover:scale-105">
                    <div className="flex flex-col items-center px-6 py-8 bg-gradient-to-r from-purple-400 to-indigo-500">
                        <img className="mx-auto block rounded-full sm:rounded-lg" src={user!.image} alt="User profile" />
                        <div className="flex flex-col items-start mt-4 w-full text-center">
                            <p className="text-2xl font-semibold leading-snug text-gray-800">{user!.email}</p>
                            <div className="mt-2 flex items-center justify-center text-gray-600">
                                <EnvelopeOpenIcon className="h-6 w-6 text-gray-500 mr-2" />
                                <span>{user!.email}</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-2xl font-semibold leading-snug text-gray-800">ID:</p>
                                <div className="mt-2 flex items-center justify-center text-gray-600">
                                    <IdentificationIcon className="h-6 w-6 text-gray-500 mr-2" />
                                    <span>{user!.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};