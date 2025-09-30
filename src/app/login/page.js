"use client";

import Card from "../components/card";
import LoginForm from "../components/loginform";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-16 h-16" />

        <h1 className="text-2xl font-bold text-blue-800">
          BuyScore Lojista
        </h1>

        <Card className="w-80">
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
