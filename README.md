Title
===
Abstract: NextJS 14 버전의 Firebase Auth 템플릿입니다. 


## Install & Dependence
- next 14.2.6
- firebase 10.13.0
- firebase-admin 12.4.0


## Use
- npm run dev


## 환경설정 
.env_sample 파일을  .env 파일로 변경 하여 사용합니다. 


Example) 
```
NEXT_PUBLIC_FIREBASE_API_KEY="XXXXx....."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="........"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="......"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="........."
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="......"
NEXT_PUBLIC_FIREBASE_APP_ID="......"


# Config For Firebase Admin SDK
FIREBASE_SERVICE_ACCOUNT_KEY_PATH=  "firebase-adminsdk.json" 파일 경로 

```



## Directory Hierarchy
```
|—— .env                        <== nextjs 환경설정 
|—— .eslintrc.json
|—— .gitignore
|—— .next
|—— .firebase-adminsdk.json     <== Firebase Console에서 다운받아 사용 
|    |—— app
|         |—— action 
|            |—— auth 
|                |—— firebase_action.ts 
|            |—— dashboard
|                |—— page.tsx
|            |—— sign-in
|                |—— page.tsx
|—— middleware.ts
```

## 설명 
1. 사용자 로그인 검증 
  : middleware 에서 사용자의 쿠키의 "__session" 값의 유무를 확인하여 
    해당 쿠키가 없는 경우 sign-in 화면으로 전환 합니다. 

2. 사용자 로그인 

```

/app/sign-in/page.tsx 

import { signInWithGoogle} from "@/lib/firebase/auth";


const isOk = await signInWithGoogle();

```
