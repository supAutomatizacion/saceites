import FrequencyTrendChart from '@/components/plotly/Tendency';
import { FrecuencyCilindersData } from '@/utils/generatedata'

export default function Page() {
  return (
    <div>
      <main >
        <div className="flex justify-center text-center h-full w-full">
            <FrequencyTrendChart {...FrecuencyCilindersData} />
        </div>
      </main>
    </div>
  );
}
