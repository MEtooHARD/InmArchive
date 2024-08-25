"use client"

import { UserCard } from "@/components/User/UserCard";
import { supabase } from "@/utils/supabase";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Page() {
    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data, error } = await supabase.auth.getUser();

            if (data.user) {
                setUser(data.user);
                setMessage(null);
            } else {
                setUser(null);
                setMessage('Cannot Fetch User Data');
            }
        }

        checkUser();
    }, []);

    return <>
        <center className="m-8">
            {message && message}
            {user && <UserCard user={user}></UserCard>}
        </center>
    </>;
};