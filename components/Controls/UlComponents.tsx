export default function UlComponent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <ul className="h-auto w-full flex flex-col items-center justify-center">
            {children}
        </ul>
    )
}