'use client';

import { useRouter , useSearchParams} from "next/navigation";
import { signInWithGoogle} from "@/lib/firebase/auth";

export default async function SignInPage() {
    
    const router = useRouter();
    const buttonStyle = "bg-slate-500 mt-2 px-2 py-1 rounded-md text-slate-50";
    const searchParams = useSearchParams()
  
    const callbackUrl = searchParams.get('callbackUrl');

    const handleSignIn = async () => {
        const isOk = await signInWithGoogle();
        if (!isOk) return;

        router.push( callbackUrl || '/dashboard')
    };

    return (
        <main className="container">
            <>
                <h1>Sing In Page</h1>
                <button className={buttonStyle} onClick={handleSignIn}>
                    Sign In with Google
                </button>
            </>
        </main>
    );
}
