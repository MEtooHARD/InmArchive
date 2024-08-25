import { Material } from "@/utils/supabase";
import Link from "next/link";

type Props = {
    material: Material['Row']
};

export function MaterialName({ material }: Props) {
    return <Link
        className="w-fit font-semibold text-xl
        line-clamp-2 max-w-96"
        href={`/material/${material.id}`}
    >
        <h3>
            {material.name}
        </h3>
    </Link>
};