import { Educacion } from "./educacion";
import { Experiencia } from "./experiencia";
import { Proyectos } from "./proyectos";
import { RedesSociales } from "./redes_sociales";
import { Ubicacion } from "./ubicacion";

export interface Persona{
    id: number;
    nombre: string;
    apellido: string;
    ocupacion: string;
    email: string;
    telefono: number;
    urlImg: string;
    educacion: Array<Educacion>;
    experiencia: Array<Experiencia>;
    proyectos: Array<Proyectos>;
    ubicacion: Array<Ubicacion>;
    redes_sociales: Array<RedesSociales>;

}