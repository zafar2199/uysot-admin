import { ReactNode } from "react";
import { BuilderIcon, ComplexIcon, JournalIcon } from "@components/icons";

interface IMenuBarData {
    id: number | string;
    title: string;
    path: string;
    icon: ReactNode;
}

export const menuBarData: IMenuBarData[] = [
    {
        id: 1,
        title: "Turar-joy majmualari",
        path: "/",
        icon: <ComplexIcon />,
    },
    {
        id: 8,
        title: "Jurnal",
        path: "/journal",
        icon: <JournalIcon />,
    },
    {
        id: 9,
        title: "Quruvchilar",
        path: "/builder",
        icon: <BuilderIcon />,
    },
];
