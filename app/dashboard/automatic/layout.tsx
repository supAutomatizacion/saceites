
import HeaderComponent from "@/components/headerComponent";
import WindowsWrapper from "@/components/wrappers/WindowsWrapper"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <WindowsWrapper />
            {children}
        </div>
    );
}
