This is a Portfolio project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


run :
```bash

git clone https://github.com/Yunight/newportfolio.git

cd your folder

npm install

npm run dev
# or
yarn dev
# or
pnpm dev
```
```bash
FOLDERS CONTENTS:
 - Components : all layout components
 - Context : Context providing Theme and Active section for the whole app
 - email : Email template
 - lib : Datas, hooks, types and utils functions
 - public : pictures and pdf
 - actions : server side action to handle email 

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In order to use the contact form you have to create an account on [`ReSend`](https://resend.com/overview]).

then create an local file .env.local so it doesnt get pushed to github and finally add your secret key there in this variable

RESEND_API_KEY = YOUR_API_KEY

## Deployed on Vercel


