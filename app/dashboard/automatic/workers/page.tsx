import  CarouselPlugin  from "@/components/carrouselTest";
import { getTasks } from "@/lib/call-task";
import { getWorkwers } from "@/lib/call-worker";


export default async function Page() {
  const tasks = await getTasks();
  const workers = await getWorkwers();

  return (
    <div>
      <main >
          <CarouselPlugin tasks={tasks} workers={workers}/>
      </main>
    </div>
  );

}
