import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Medusa Store account.",
}

export default function Login({ searchParams }: { searchParams: any }) {

  return <LoginTemplate token={searchParams.token} />
}
