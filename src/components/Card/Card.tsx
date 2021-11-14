import { RolesEnum } from "@utils/enums";
import { FC, useState } from "react";
import cn from "classnames";
import "./Card.styles.scss";

interface iProps {
    title: string;
    onNextRole: () => void;
    position: number;
}

export const Card: FC<iProps> = ({ title, onNextRole, position }) => {
    const [showRole, setShowRole] = useState(false);

    const handleChangeCard = () => {
        if (showRole) {
            setShowRole(false);

            onNextRole();
        } else {
            setShowRole(true);
        }
    };

    return (
        <div
            className={cn(
                "Card",
                !showRole && "is-closed",
                (title === RolesEnum.Mafia || title === RolesEnum.Maniac) && showRole ? "is-black" : "is-red",
            )}
            onClick={handleChangeCard}
        >
            {!showRole && <div className="Card__text">Игрок {position}</div>}
            {showRole && <div className="Card__text">{title}</div>}
        </div>
    );
};
