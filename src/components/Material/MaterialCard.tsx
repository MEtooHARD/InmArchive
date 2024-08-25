import { Material } from "@/utils/supabase";
import Link from "next/link";
import clsx from "clsx";
import { MaterialContent } from "./MaterialContent";
import { MaterialName } from "./MaterialName";

type Props = {
    key?: number;
    material: Material['Row'];
    single?: boolean
}

export function MaterialCard({
    key, material, single = false
}: Props) {
    return <>
        <div key={key}
            className={`bg-pureBlue
            m-4 p-4 gap-4
            ${clsx(single
                ? 'w-fit h-fit max-w-fit'
                : 'max-w-80 min-w-60 aspect-7/8')}
            flex-1 flex-col
            rounded-md
            `}>
            <MaterialName material={material}></MaterialName>
            {material.content &&
                (<MaterialContent material={material}
                    single={single}
                ></MaterialContent>)}
        </div>
    </>
}