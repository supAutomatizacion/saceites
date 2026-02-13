'use client'

import { Task } from "@/types/table/schema"
import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"


type searchComponentProps = {
    datos : Task[],
    params : string,
}

export default function SearchPageComponent ( { datos, params } : searchComponentProps) {
    return (
        <div className="px-3">
            <DataTable data={[]} columns={columns} pagination={true} filter={{exist : true, palabra : params}} />
        </div>
    )
}