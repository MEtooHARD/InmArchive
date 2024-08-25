"use client"
import { ChildrenOnly } from "@/Type";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Layout({
    children
}: ChildrenOnly) {
    // const [error, setError] = useState<AuthError | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        const checkUser = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (!data.user) {
                setMessage('You\'re not Signed-In');
                router.push('/login');
            } else {
                console.log(data.user.aud)
                setMessage(null);
            }
        }

        checkUser();
    }, []);
    return <>
        {message ? <p>{message}</p> : children}
    </>
}