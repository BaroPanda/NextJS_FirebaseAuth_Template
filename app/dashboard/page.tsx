'use client'
import { redirect, useRouter } from "next/navigation";

import { auth } from '@/lib/firebase/firebase-client';
import { onAuthStateChanged, User } from "firebase/auth";
import { signOut } from "@/app/action/auth/firebase_action";
import { useState , } from "react";

export default function DashboardPage() {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState< User | null>(null);
    const buttonStyle = "bg-slate-500 mt-2 px-2 py-1 rounded-md text-slate-50";

    onAuthStateChanged(auth, (user) => {
        if (!user) return 

        const uid = user.uid;
        setCurrentUser(user);
    });

    const handleSignOut = async () => {
        const isOk = await signOut();

        if (isOk) router.push("/sign-in");
    };

    return (
        <main className="container">
            <>
                <h1>Dashboard Page</h1>
                <p>Welcome, {currentUser?.displayName}</p>
                <button className={buttonStyle} onClick={handleSignOut}>
                    Sign Out
                </button>
            </>
        </main>
    );
}
