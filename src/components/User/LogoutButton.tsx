"use client"

import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();

    const logout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    return <center className="w-24 h-10 m-4
            border rounded-md
            border-red-500/70
            flex items-center justify-center
            text-xl text-white/50
            hover:text-white hover:border-red-500
            transform duration-100
            cursor-pointer"
        onClick={() => { logout() }}>
        Logout
    </center>
};