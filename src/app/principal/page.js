"use client";
import { useState } from "react";
import Sidemenu from "../components/sidemenu/sidemenu";
import Telapontuacao from "../components/telapontuacao/telapontuacao";

export default function Page() {
  return (
    <div className="flex">
        <Sidemenu />
        <div className="w-[85%] h-screen">
          <Telapontuacao />
        </div>
        </div>
    );
}