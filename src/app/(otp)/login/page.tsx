"use client"
import { supabase } from "@/utils/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_IN") {
                router.replace("/user");
            }
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, [router]);

    return <div className="flex justify-center">
        <div className="w-72 m-8">
            <div>just sign up/in with dsicord</div>
            <Auth
                supabaseClient={supabase}
                theme="dark"
                appearance={{ theme: ThemeSupa }}
                providers={["discord"]}
            ></Auth>
        </div>
    </div>;
}