'use server';

import { cookies } from "next/headers";
import { revokeAllSessions, createSessionCookie } from "@/lib/firebase/firebase-admin";

/**
 * Cookie에 Authorization 헤더를 추가한다.
 * @param token 
 */
export async function signOut() {
    const sessionCookie = cookies().get("__session")?.value;
    if (!sessionCookie) return false;

    cookies().delete("__session");

    await revokeAllSessions(sessionCookie);
    return true;
}   



/**
 * Cookie에 Authorization 헤더를 추가한다.
 * @param token 
 */
export async function createSessionCookieToFirebase(idToken: string) {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await createSessionCookie(idToken, { expiresIn });

    cookies().set("__session", sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
    });
    return true;
}   