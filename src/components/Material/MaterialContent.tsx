import { Material } from "@/utils/supabase"
import clsx from "clsx";
import Link from "next/link";

type Props = {
    material: Material['Row'],
    single: boolean
}

export function MaterialContent({
    material,
    single = false
}: Props) {
    return <div
        className={`w-full h-full ${clsx(single && material.type !== 'txt' ? 'max-w-96' : '')}`}
    >{material.type.startsWith('image')
        ? <Link className="w-full h-full flex-wrap flex max-w-96"
            target="_blank"
            href={material.content}>
            <img className='w-full h-full object-contain'
                src={material.content}>
            </img>
        </Link>

        : <p className={clsx(single
            ? ''
            : 'line-clamp-10'
        )}
        >
            {material.content}
        </p>
        }</div>
}