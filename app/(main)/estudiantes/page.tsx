import Link from "next/link";

interface estudiantes {
    nombre: string;
    apellido: string;
    edad: number;
    sexo: string;
    fecha: string;
    grado: number;
}

export default function Page() {

    const data: estudiantes[] = [
        {
            nombre: "Juan",
            apellido: "Perez",
            edad: 20,
            sexo: "Masculino",
            fecha: "2023-01-01",
            grado: 10
        },
        {
            nombre: "Maria",
            apellido: "Gomez",
            edad: 22,
            sexo: "Femenino",
            fecha: "2023-01-02",
            grado: 11
        },
        {
            nombre: "Pedro",
            apellido: "Lopez",
            edad: 25,
            sexo: "Masculino",
            fecha: "2023-01-03",
            grado: 12
        },
        {
            nombre: "Ana",
            apellido: "Rodriguez",
            edad: 30,
            sexo: "Femenino",
            fecha: "2023-01-04",
            grado: 13
        },
        {
            nombre: "Luis",
            apellido: "Martinez",
            edad: 35,
            sexo: "Masculino",
            fecha: "2023-01-05",
            grado: 14
        },
        {
            nombre: "Carlos",
            apellido: "Gonzalez",
            edad: 40,
            sexo: "Masculino",
            fecha: "2023-01-06",
            grado: 15
        },
        {
            nombre: "Laura",
            apellido: "Sanchez",
            edad: 28,
            sexo: "Femenino",
            fecha: "2023-01-07",
            grado: 16
        },
        {
            nombre: "Diego",
            apellido: "Ramirez",
            edad: 32,
            sexo: "Masculino",
            fecha: "2023-01-08",
            grado: 17
        },
    ];

    return (
        <>
            <div className="box shadow-2xl shadow-gray-500/50 rounded-md border-2 border-solid border-blue-500">
                <div className="bg-blue-500 text-white  p-2 font-bold">
                    Estudiantes
                </div>
                <div className="border border-solid p-4  h-auto">
                    <table className="table-auto xl:table-fixed 2xl:table-fixed  border border-collapse  border-slate-500  border-spacing-4 w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">Nombre</th>
                                <th className="border border-slate-600">Apellido</th>
                                <th className="border border-slate-600">Edad</th>
                                <th className="border border-slate-600">Sexo</th>
                                <th className="border border-slate-600">Fecha</th>
                                <th className="border border-slate-600">Grado</th>
                                <th className="border border-slate-600">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border border-slate-600 text-center">{item.nombre}</td>
                                        <td className="border border-slate-600 text-center">{item.apellido}</td>
                                        <td className="border border-slate-600 text-center">{item.edad}</td>
                                        <td className="border border-slate-600 text-center">{item.sexo}</td>
                                        <td className="border border-slate-600 text-center">{item.fecha}</td>
                                        <td className="border border-slate-600 text-center">{item.grado}</td>
                                        <td className="border border-slate-600 flex justify-center gap-2">
                                            <Link href={`estudiantes/${item.nombre}`} className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 font-bold">Detalles</Link>
                                            <button className="bg-green-600 hover:bg-green-700 text-white rounded-md p-2 font-bold">Editar</button>
                                            <button className="bg-red-600 hover:bg-red-700 text-white rounded-md p-2 font-bold">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-400 p-2 font-bold text-white">
                    footer
                </div>
            </div>
        </>
    )
};