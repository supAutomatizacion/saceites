
import { getSearchtasks } from "@/lib/call-search"
import SearchPageComponent from "@/components/dashboard/searchComponent"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const tareasFiltrada = await getSearchtasks();

    const { slug } = await params;

    return (
        <div>
            <SearchPageComponent datos ={tareasFiltrada} params = {slug} />
        </div>
    )
}