
import HeatmapTrendChart from "@/components/plotly/heatmap";
import FrequencyTrendChart from "@/components/plotly/Tendency";
import { FrecuencyCilindersData } from '@/utils/generatedata'

export default function Stadistics({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="p-8 h-[calc(100vh-100px)]">
            {/* Contenido adicional debajo del grid */}
            <div className="grid grid-cols-2 grid-rows-[1fr_1fr] gap-4 h-full">
                <div className="">
                    <HeatmapTrendChart />
                </div>
                <div>
                    HOLA 1
                </div>

                <div className="col-span-2">
                    <FrequencyTrendChart {...FrecuencyCilindersData} />
                </div>
            </div>
            <div className="mt-6">
                {children}
            </div>
        </div>
    );
}
