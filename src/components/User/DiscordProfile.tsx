import Typography from "@/atoms/typography";
import { idetity_data_Discord } from "@/Type";

type Props = {
    profile: idetity_data_Discord
};

export function DiscordProfile({ profile }: Props) {
    return <>
        <div className="flex
        aspect-video
        max-h-48
        bg-slate-700
        rounded-lg
        ">
            <div className="flex flex-row items-center 
            gap-4 m-4 h-fit w-fit">
                <img className="rounded-full max-h-16"
                    draggable={false}
                    src={profile.avatar_url}></img>
                <div className="flex flex-col items-start">
                    <Typography variant="h3">{profile.custom_claims.global_name}</Typography>
                    <Typography variant="h4">{'@' + profile.full_name}</Typography>
                </div>
            </div>
        </div>
    </>
}