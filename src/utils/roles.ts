import { RolesEnum } from "./enums";

export interface iActiveRole {
    id: number;
    title: string
    desc: string;
}

export const ACTIVE_ROLES: iActiveRole[] = [
    {
        id: 1,
        title: RolesEnum.Whore,
        desc: "Проститутка просыпается ночью. Выбирает одного игрока. Нельзя выбирать одну и ту же цель две ночи подряд. Если днем цель проститутки хотят казнить на окончательном голосовании, то Ведущий должен объявить, что выбранный игрок имеет алиби. В этом случае голосование тут же заканчивается без результатов и начинается ночь."
    },
    {
        id: 2,
        title: RolesEnum.Doctor,
        desc: "Доктор каждую ночь может посетить одного игрока и спасти его жизнь в случае попытки его убийства мафией или маньяком. Доктор не может два раза подряд лечить одного и того же игрока"
    },
    {
        id: 3,
        title: RolesEnum.Immortal,
        desc: "По сути своей Бессмертный — тот же Мирный Житель, отличающийся лишь тем, что ночью он абсолютно неуязвим. Главное в вашей роли — дать понять, что вы — мирный, и не дать убить себя днем."
    },
    {
        id: 4,
        title: RolesEnum.Comissar,
        desc: "Играет за «честных». После того, как ведущий объявляет: «На расследование выходит комиссар». «Комиссар» открывает глаза и указывает ведущему на одного из игроков. Ведущий показывает знаками «мафия» - большой палец вниз или «честный» - большой палец вверх. После этого ведущий объявляет: «Комиссар провел расследование и уснул». «Комиссар» закрывает глаза. «Комиссар» тоже вынужден скрываться, чтобы мафия не смогла его вычислить и быстро убить."
    },
    {
        id: 5,
        title: RolesEnum.Maniac,
        desc: "Маньяк - одна из самых противоречивых ролей в игре. Несмотря на плохую репутацию среди граждан города, маньяк может помочь мирным жителям, убивая членов мафии по ночам. Однако, пострадать от его действий могут как и простые граждане, так и полиция или доктор. Может победить, только если останется один."
    },
    {
        id: 6,
        title: RolesEnum.Reanymator,
        desc: "Вместо доктора. Может спасти от смерти одного из жителей города. Просыпается последним. Ведущий показывает, кто убиты, и он, по своему выбору, реанимирует убитого или нет."
    },
    {
        id: 7,
        title: RolesEnum.Judge,
        desc: "просыпается ночью. Может выбрать одного игрока. Его цель попадает в тюрьму — этот игрок не может использовать свои способности ночью и голосовать днем, но может участвовать в обсуждениях. После смерти Судьи все заключенные выходят на свободу, то есть снова могут пользоваться своими способностями ночью и голосовать днем. Если Судья хочет, то он может выбрать целью своей способности уже заключенного в тюрьму игрока, чтобы освободить его."
    }
];