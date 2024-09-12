export default function LiComponent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="hover:cursor-pointer w-40 h-10 mb-2 shadow hover:shadow-lg shadow-blue-500/50 hover:bg-blue-400 hover:text-white font-bold text-blue-500 text-center border border-solid border-blue-500 rounded-md p-2">
            {children}
        </div>
    )
};
