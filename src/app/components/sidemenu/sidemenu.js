"use client";
import { useState } from "react";
import Button from "../button/button";
const imageSrc = "/camera.svg";

export default function Sidemenu() {
    return (
        <div className="bg-[var(--azulclaro)] flex flex-col items-center justify-between gap-4 h-screen w-[15%]">

            <img src={imageSrc} alt="Camera Icon" className="w-16 h-16 mb-4 mt-4" />

            <div className="flex flex-col justify-between w-full">
                <Button type="submit" variant="secondary" className="w-full py-5">Pontuação</Button>
                <Button type="submit" variant="secondary" className="w-full py-5">Loja de pontos</Button>
                <Button type="submit" variant="secondary" className="w-full py-5">Estatisticas</Button>
            </div>
            
            <Button type="submit" variant="secondary" className="w-full py-5">Perfil</Button>
        </div>

    );
}