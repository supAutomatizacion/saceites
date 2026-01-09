import FrequencyTrendChart from '@/components/plotly/Tendency';

export default function Page() {
  return (
    <div>
      <main >
        <div className="flex justify-center text-center h-full w-full">
            <FrequencyTrendChart/>
        </div>
      </main>
    </div>
  );
}
