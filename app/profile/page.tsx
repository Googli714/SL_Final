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
            <div className="flex justify-center items-center min-h-screen">
                <div className="h-70 w-60 bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="flex flex-col items-center px-4 py-4">
                        <img className="block mx-auto rounded-full sm:rounded-lg" src={user!.image} alt="User profile" />
                        <div className="text-center">
                            <p className="text-xl leading-tight">{user!.email}</p>
                            <div className="mt-2 flex items-center justify-center text-gray-600">
                                <EnvelopeOpenIcon className="h-5 w-5 text-gray-500 mr-2" />
                                <span>{user!.email}</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl leading-tight">{user!.email}</p>
                            <div className="mt-2 flex items-center justify-center text-gray-600">
                                <IdentificationIcon className="h-5 w-5 text-gray-500 mr-2" />
                                <span>Id: {user!.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};