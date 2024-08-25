"use client"
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error logging out:", error);
        }
        // router.replace('/');
    };

    useEffect(() => {
        handleLogout();

    }, []);
}