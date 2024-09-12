import LiComponent from "@/components/Controls/LiComponents";
import UlComponent from "@/components/Controls/UlComponents";
import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-cols">
            <nav className="items-center py-4 bg-blue-200 h-screen w-48">
                <div className="h-10 w-auto text-center text-4xl font-bold bg-blue-300 text-blue-800 m-2 rounded-md">
                    <h1>Acatech</h1>
                </div>
                <UlComponent>
                    <LiComponent>
                        <Link href="/">Home</Link>
                    </LiComponent>
                    <LiComponent>
                        <Link href="/estudiantes">Estudiantes</Link>
                    </LiComponent>
                    <LiComponent>
                        <Link href="/profesores">Profesores</Link>
                    </LiComponent>
                </UlComponent>
            </nav>
            <div className="w-auto flex-1 p-4">
                {children}
            </div>

        </div>
    )
};
