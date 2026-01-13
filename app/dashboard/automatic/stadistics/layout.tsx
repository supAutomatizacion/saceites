
import FrequencyTrendChart from "@/components/plotly/Tendency";
import { FrecuencyCilindersData } from '@/utils/generatedata'

export default function Stadistics({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <div className="flex justify-center text-center h-full w-full">
                <FrequencyTrendChart {...FrecuencyCilindersData} />
            </div>
            {children}
        </div>
    );
}
