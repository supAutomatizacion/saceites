
import FrequencyTrendChart from "@/components/plotly/Tendency";
import { FrecuencyCilindersData } from '@/utils/generatedata'

export default function Champions({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div>
            <div style={{ height: "100vh", background: "#111", color: "white", padding: 20 }}>
                <h1>DASHBOARD QUE VIENE DE POWER BI</h1>

                <iframe
                    title="test_dashboard"
                    src="https://app.powerbi.com/reportEmbed?reportId=edc2bcda-db6d-4db7-a99a-061cef07603c&autoAuth=true&ctid=cbcbf211-eab4-4808-ad3f-e9b448bd3320&actionBarEnabled=true"
                    style={{ width: "100%", height: "90%", border: "none" }}
                    allowFullScreen
                />
            </div>
            {children}
        </div>
    );
}
