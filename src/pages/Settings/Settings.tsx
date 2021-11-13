import { Checkbox } from "@components/Checkbox/Checkbox";
import { InputNumeric } from "@components/InputNumeric/InputNumeric";
import { RolesEnum } from "@utils/enums";
import { ACTIVE_ROLES, iActiveRole } from "@utils/roles";
import { FC, useEffect, useState } from "react";
import "./Settings.styles.scss";

const DEFAULT_CONFIG = {
    totalPlayers: 6,
    citizens: 5,
    mafias: 1,
    activeRoles: [],
};

interface iGameConfig {
    totalPlayers: number;
    citizens: number;
    mafias: number;
    activeRoles: iActiveRole[];
}

interface iProps {
    onSubmit: (roles: RolesEnum[]) => void;
}

export const Settings: FC<iProps> = ({ onSubmit }) => {
    const [config, setConfig] = useState<iGameConfig>(DEFAULT_CONFIG);
    const [isActiveRolesDisabled, setIsActiveRolesDisabled] = useState(false);

    const updateConfig = <T extends keyof iGameConfig>(field: T, value: iGameConfig[T]) => {
        setConfig(prevCfg => ({ ...prevCfg, [field]: value }));
    };

    const onChangeTotalPlayers = (totalPlayers: number) => {
        updateConfig("totalPlayers", totalPlayers);
        updateConfig("citizens", totalPlayers - 1);
        updateConfig("mafias", 1);
        updateConfig("activeRoles", []);
        setIsActiveRolesDisabled(totalPlayers <= 4);
    };

    const onChangeTotalMafias = (totalMafias: number) => {
        const totalCitizens = config.totalPlayers - totalMafias - config.activeRoles.length;
        updateConfig("mafias", totalMafias);
        updateConfig("citizens", totalCitizens);
    };

    const onChangeTotalCitizens = (totalCitizens: number) => {
        const totalMafias = config.totalPlayers - totalCitizens - config.activeRoles.length;
        updateConfig("citizens", totalCitizens);
        updateConfig("mafias", totalMafias);
    };

    const onChangeActiveRoles = (role: iActiveRole) => {
        const { activeRoles, citizens, mafias, totalPlayers } = config;
        const currentIndex = activeRoles.findIndex(({ id }) => id === role.id);
        const isRemoving = currentIndex >= 0;

        const totalCitizens = citizens + (isRemoving ? 1 : -1);
        if (
            !isRemoving &&
            citizens === 0 &&
            citizens + mafias + activeRoles.length >= totalPlayers
        ) {
            updateConfig("mafias", mafias - 1);
        } else {
            updateConfig("citizens", totalCitizens);
        }

        updateConfig(
            "activeRoles",
            isRemoving
                ? [...activeRoles].filter(item => item.id !== role.id)
                : [...activeRoles, role],
        );
    };

    useEffect(() => {
        if (isActiveRolesDisabled) {
            updateConfig("activeRoles", []);
            updateConfig("citizens", config.totalPlayers - config.mafias);
        }
    }, [config.mafias, config.totalPlayers, isActiveRolesDisabled]);

    const handleSubmitSettings = () => {
        const { citizens, mafias, activeRoles } = config;

        onSubmit([
            ...Array.from(Array(citizens).fill(RolesEnum.Citizen)),
            ...Array.from(Array(mafias).fill(RolesEnum.Mafia)),
            ...activeRoles.map(({ title }) => title),
        ]);
    };

    return (
        <div className="Settings">
            <div className="Settings__content">
                <div className="Settings__row">
                    <InputNumeric
                        label="Всего игроков"
                        value={config.totalPlayers}
                        min={3}
                        onChange={onChangeTotalPlayers}
                    />
                </div>
                <div className="Settings__row">
                    <div>
                        <div>
                            <InputNumeric
                                label="кол-во мирных"
                                value={config.citizens}
                                min={0}
                                onChange={onChangeTotalCitizens}
                                isDisabledInc={
                                    config.citizens + config.activeRoles.length >=
                                    config.totalPlayers - 1
                                }
                                isDisabledDec={
                                    config.citizens + config.activeRoles.length <= config.mafias
                                }
                            />
                        </div>
                        <br />
                        <br />
                        <div>
                            <InputNumeric
                                label="кол-во мафий"
                                value={config.mafias}
                                min={1}
                                isDisabledInc={
                                    config.mafias >= config.citizens + config.activeRoles.length ||
                                    config.citizens === 0
                                }
                                onChange={onChangeTotalMafias}
                            />
                        </div>
                    </div>
                </div>

                {!isActiveRolesDisabled && (
                    <div className="Settings__row">
                        <div className="Settings__title">Активные роли</div>
                        <div className="Settings__roles">
                            {ACTIVE_ROLES.map(role => (
                                <Checkbox
                                    onChange={() => onChangeActiveRoles(role)}
                                    label={role.title}
                                    key={role.id}
                                    isChecked={
                                        !!config.activeRoles.find(item => item.id === role.id)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="Settings__action">
                <button onClick={handleSubmitSettings}>ОК</button>
            </div>
        </div>
    );
};
