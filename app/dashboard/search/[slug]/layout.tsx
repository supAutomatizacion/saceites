import { Search } from 'lucide-react';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <div className="flex h-10 bg-muted justify-center align-center items-center">
                <Search />
                Filtros de busqueda de actividades
            </div>
            {children}
        </div>
    );
}
