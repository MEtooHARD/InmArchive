"use client"
import { Material, supabase } from "@/utils/supabase";
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { MaterialCard } from "./Material/MaterialCard";

export function HomeRandomeMaterial() {
    const [material, setMaterial] = useState<Material['Row'] | null>(null);

    useEffect(() => {
        const fetchMaterials = async () => {
            let qresult = await supabase
                .from('material').select('*')
                .limit(1)
                .gt('id', uuidv4())
                .single();

            if (qresult.error) {
                setMaterial(null);
                console.log(qresult.error);
            }
            if (qresult.data) {
                // setFetchError(null);
                setMaterial(qresult.data);
                console.log(material);
            }
        }

        fetchMaterials();
    }, []);

    return <>
        {material && <MaterialCard
            single={true}
            material={material}>
        </MaterialCard>}
    </>
}