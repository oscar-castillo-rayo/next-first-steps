"use client";

import Link from "@/node_modules/next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

//Como lo que espera recibir es un path y un text se le coloca el tipo de dato en la interfas
interface Props {
  path: string;
  text: string;
}

//Va a recibir en props el path y el text entonces se desestrucuta para recibir dichos elementos
export const ActiveLink = ({ path, text }: Props) => {
  //usePathname me permite tomar el path actual
  const pathName = usePathname();
  return (
    <Link
      //tomo el pathName y lo comparo para aplicarle la clase al path donde me encuentre
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};
