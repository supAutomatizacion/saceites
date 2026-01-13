
import CarouselPlugin from "@/components/carrouselTest";
import { getTasks } from "@/lib/call-task";
import { getWorkwers } from "@/lib/call-worker";

export default async function Workers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
      const tasks = await getTasks();
      const workers = await getWorkwers();
    return (
        <div>
            <CarouselPlugin workers={workers} tasks={tasks} />
            {children}
        </div>
    );
}
