"use client"
import { MaterialCard } from "@/components/Material/MaterialCard";
import { Material, supabase } from "@/utils/supabase"
import { useEffect, useState } from "react"

type Props = { params: { id: string } }

export default function Page({ params }: Props) {
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [material, setMaterial] = useState<Array<Material['Row']> | null>(null);

    useEffect(() => {
        const fetchMaterial = async () => {
            const { data, error } = await supabase
                .from('material')
                .select('*')
                .eq("id", params.id)
                .limit(1);

            if (error) {
                setMaterial(null);
                setFetchError('Couldn\'t fetch this material.');
            }
            if (data) {
                setMaterial(data);
                setFetchError(null);
            }
        }

        fetchMaterial();
    }, [])

    return <div className="flex justify-center">
        {fetchError && <p>{fetchError}</p>}
        {material &&
            <MaterialCard
                material={material[0]}
                single={true}
            ></MaterialCard>}
    </div>
}