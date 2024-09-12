export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
        <h1>layout estudiantes</h1>
            {children}
        </>
    )
};
