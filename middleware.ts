'use server';

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    // set ignore path
    if (path.startsWith('/sign-in') || path.startsWith('/auth') || path.startsWith('/_next')) {
        // console.log("Path is login or _next");
        return NextResponse.next();
    }
    // check session
    const sessionCookie = cookies().get("__session")?.value;
    // Session Cookie 값이 존재하는 경우 
    // 요청 처리를 계속 진행 합니다.
    if(sessionCookie) 
        return NextResponse.next();

    // Session Cookie 값이 존재하지 않는 경우
    // redirect to login page
    return NextResponse.redirect(
        new URL(
            `/sign-in?callbackUrl=${encodeURIComponent(req.url)}`,
            req.url
        )
    );
    
}


// 전체 경로에 대하여 미들웨어를 적용 합니다, 
export const config = {
    matcher: ["/:path*"]
}