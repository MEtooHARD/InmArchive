import Typography from "@/atoms/typography";
import Link from "next/link";

type Props = {
    items: {
        title: string,
        url: string,
        disabled?: boolean
    }[]
};

export function NavBar({ items }: Props) {
    return <nav className="p-2 gap-4
            flex flex-row justify-center">
        {items.map((item, i) =>
            <Link
                className="font-semibold text-xl text-white/60
                bg-transparent rounded-lg
                transform duration-100
                hover:text-white
                "
                href={item.url}
                key={i}
            >
                {item.title}
            </Link>)}
    </nav>;
};