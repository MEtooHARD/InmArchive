import Typography from "@/atoms/typography";
import { MaterialCardDisplay } from "@/components/Material/MaterialCardDisplay";

export default function Page() {


    return <div className="m-4 flex flex-col">
        <Typography variant="h1">
            素材
        </Typography>
        <MaterialCardDisplay></MaterialCardDisplay>
    </div >;
}