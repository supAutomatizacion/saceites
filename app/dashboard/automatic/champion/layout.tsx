
import FrequencyTrendChart from "@/components/plotly/Tendency";
import { FrecuencyCilindersData } from '@/utils/generatedata'

export default function Champions({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
        <div className="flex justify-center text-center h-full w-full">
          PAGINA DE LOS DOS MEJORES DESDE SUBCARPETA DE DASHBOARD
        </div>
            {children}
        </div>
    );
}
