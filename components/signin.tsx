// app/login/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "@/app/lib/auth-client";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn.email({
      email,
      password,
    });
    console.log(res);
  };
  const handleGithub = async () => {
    const res = await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    console.log(res);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">登录</button>
      </form>
      <button onClick={handleGithub} className="w-full h-50px bg-red-50">GITHUB登录</button>
      <Link href="/signup">注册</Link>
    </>
  );
}
