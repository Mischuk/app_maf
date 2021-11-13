import { RolesEnum } from "@utils/enums";
import { FC, useState } from "react";
import "./Card.styles.scss";

interface iProps {
    title: string;
    onNextRole: () => void;
    position: number;
}

export const Card: FC<iProps> = ({ title, onNextRole, position }) => {
    const [showRole, setShowRole] = useState(false);
    const [isLock, setIsLock] = useState(false);

    const handleChangeCard = () => {
        if ( isLock ) return;
        setIsLock(true);
        setTimeout(() => {
            setIsLock(false);
        }, 500);

        if (showRole) {

            setShowRole(false);

            setTimeout(() => {
                onNextRole();
            }, 500);
        } else {
            setShowRole(true);
        }
    };

    return (
        <div className="Card">
            <div className={`flipcard ${showRole ? "is-open" : ""}`} onClick={handleChangeCard}>
                <div className="flipcard__inner">
                    <div className="flipcard__front">Игрок {position}</div>
                    <div className={`flipcard__back ${title === RolesEnum.Mafia ? "is-black" : "is-red"}`}>
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
