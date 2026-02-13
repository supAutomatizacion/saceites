import WindowsWrapper from "@/components/wrappers/WindowsWrapper";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="px-3">
            <WindowsWrapper />
            {children}
        </div>
    );
}
