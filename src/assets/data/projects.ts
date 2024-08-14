import { Project } from "../../types/types";
import adonaImg from "../../assets/images/mockup_adona.png";
import kwateryImg from "../../assets/images/mockup_kwatery.png";

export const projects: Project[] = [
    {
        title: "Restauracja orientalna",
        thumbnail: adonaImg,
        previewUrl: "http://www.adona.net.pl"
    },
    {
        title: "Pokoje gościnne",
        thumbnail: kwateryImg,
        previewUrl: "https://www.kwateryuzosi.pl"
    }
];
