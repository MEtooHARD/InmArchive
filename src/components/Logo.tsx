import Typography from "@/atoms/typography";
import Link from "next/link";

export function Logo() {
    return <Link href='/' className="flex flex-row gap-2 ml-2">
        <img className="h-8"
            src="https://media.discordapp.net/attachments/849152795852668949/1276372182582165607/LinQin.png?ex=66c949ba&is=66c7f83a&hm=f816c9ad775fad27f50521504cf47db65c7f250cff27b3cafb705ba97b7435e1&=&format=webp&quality=lossless&width=266&height=266"
            alt="LinQin">
        </img>
        <Typography variant="h3">
            Inm Archive
        </Typography>
    </Link>
};