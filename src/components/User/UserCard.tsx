"use client"
import { User } from "@supabase/supabase-js";
import { useEffect } from "react";
import { DiscordProfile } from "./DiscordProfile";
import { idetity_data_Discord } from "@/Type";
import { LogoutButton } from "./LogoutButton";

type Props = {
    user: User
}

export function UserCard({
    user
}: Props) {
    const discordProfile = user.identities?.find(ID => ID.provider === 'discord');
    useEffect(() => {
        console.log(discordProfile)
    }, [])

    return <div>
        {discordProfile?.identity_data && <DiscordProfile
            profile={discordProfile.identity_data as idetity_data_Discord} />}
        {user && <LogoutButton />}
    </div>;
}