import Link from "next/link";

export default function page({ params }: { params: { estudiante: string } }) {
    const { estudiante } = params;
    return (
        <div className="box shadow-2xl shadow-gray-500/50 rounded-md border-2 border-solid border-blue-500">
            <div className="bg-blue-500 text-white  p-2 font-bold">
                Información estudiante: {estudiante}
            </div>
            <div className="border border-solid p-4  h-auto">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <input type="text" id="floatingInput" className="block px-2.5 pb-2.5 pt-5 w-full text-sm font-semibold text-slate-200 bg-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floatingInput" className="absolute text-sm font-bold text-slate-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-gray-500 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                NOMBRE
                            </label>
                        </div>
                        <div className="relative">
                            <input type="text" id="floatingInput" className="block px-2.5 pb-2.5 pt-5 w-full text-sm font-semibold text-slate-200 bg-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floatingInput" className="absolute text-sm font-bold text-slate-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-gray-500 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                APELLIDO
                            </label>
                        </div>
                        <div className="relative">
                            <input type="text" id="floatingInput" className="block px-2.5 pb-2.5 pt-5 w-full text-sm font-semibold text-slate-200 bg-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floatingInput" className="absolute text-sm font-bold text-slate-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-gray-500 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                EDAD
                            </label>
                        </div>
                        <div className="relative">
                            <input type="text" id="floatingInput" className="block px-2.5 pb-2.5 pt-5 w-full text-sm font-semibold text-slate-200 bg-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floatingInput" className="absolute text-sm font-bold text-slate-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-gray-500 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                SEXO
                            </label>
                        </div>
                        <div className="relative">
                            <input type="text" id="floatingInput" className="block px-2.5 pb-2.5 pt-5 w-full text-sm font-semibold text-slate-200 bg-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floatingInput" className="absolute text-sm font-bold text-slate-200 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-gray-500 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">
                                FECHA
                            </label>
                        </div>
                    </div>
                    <div>
                        Columna 1
                    </div>
                    <div>
                        Columna 1
                    </div>
                </div>
            </div>
            <div className="bg-gray-400 p-2 font-bold text-white">
                <Link href={'/estudiantes'}>Regresar</Link>
            </div>
        </div>
    )
};