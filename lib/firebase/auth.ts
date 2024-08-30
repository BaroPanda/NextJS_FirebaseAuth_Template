// 'use server';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {createSessionCookieToFirebase} from "@/app/action/auth/firebase_action";

// import { APIResponse } from "@/types";
import { auth } from "@/lib/firebase/firebase-client";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    // 구글 자동 로그인 비활성화 
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    const userCreds = await signInWithPopup(auth, provider);
    const idToken = await userCreds.user.getIdToken();
    return await createSessionCookieToFirebase(idToken);
    
  } catch (error) {
    console.error("Error signing in with Google", error);
    return false;
  }
}
