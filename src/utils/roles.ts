import { RolesEnum } from "./enums";

export interface iActiveRole {
    id: number;
    title: string;
    cardImage: string;
}

export const ACTIVE_ROLES: iActiveRole[] = [
    {
        id: 1,
        title: RolesEnum.Whore,
        cardImage: ""
    },
    {
        id: 2,
        title: RolesEnum.Doctor,
        cardImage: ""
    },
    {
        id: 3,
        title: RolesEnum.Immortal,
        cardImage: ""
    }
];