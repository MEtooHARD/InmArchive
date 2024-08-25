"use client"

import { Material, supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { MaterialCard } from "./MaterialCard";

export function MaterialCardDisplay() {
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [materials, setMaterials] = useState<Array<Material['Row']> | null>(null);

    useEffect(() => {
        const fetchMaterials = async () => {
            const { data, error } = await supabase
                .from('material')
                .select('*')

            if (error) {
                setFetchError('Could not fetch materials.');
                setMaterials(null);
                console.log(error);
            }
            if (data) {
                setFetchError(null);
                setMaterials(data);
                console.log(materials);
            }
        }

        fetchMaterials();
    }, []);
    return <>
        {fetchError && <p>{fetchError}</p>}
        {materials && (
            <center className="p-4 w-full">
                <div className="w-fit flex flex-wrap">
                    {materials.map((material, i) => (
                        <MaterialCard
                            key={i}
                            material={material}>
                        </MaterialCard>
                    ))}
                </div>
            </center>
        )}
    </>;
}