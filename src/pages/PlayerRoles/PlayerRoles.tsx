import { Card } from "@components/Card/Card";
import { RolesEnum } from "@utils/enums";
import { FC, useState } from "react";
import "./PlayerRoles.styles.scss";

interface iProps {
    roles: RolesEnum[];
    onShowResult: () => void;
}

export const PlayerRoles: FC<iProps> = ({ roles, onShowResult }) => {
    const [playerIndex, setPlayerIndex] = useState(0);

    const onNextRole = () => {
        if (playerIndex + 1 <= roles.length - 1) {
            setPlayerIndex(playerIndex + 1);
        } else {
            onShowResult();
        }
    };

    return (
        <div className="PlayerRoles">
            <div className="PlayerRoles__content">
                <Card
                    title={roles[playerIndex]}
                    onNextRole={onNextRole}
                    position={playerIndex + 1}
                />
            </div>
        </div>
    );
};
