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
    const [isTotalLocked, setIsTotalLocked] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);

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
            {!isTotalLocked && (
                <div className="Settings__wrapper">
                    <div className="Settings__total">
                        <InputNumeric
                            label="TOTAL PLAYERS"
                            value={config.totalPlayers}
                            min={3}
                            onChange={onChangeTotalPlayers}
                        />

                        <div className="Settings__next">
                            <div className="Settings__button-next" onClick={() => setIsTotalLocked(true)}>NEXT</div>
                        </div>
                    </div>


                </div>
            )}

            {isTotalLocked && (
                <div className="Settings__content">
                    <div className="Settings__row">
                        <div>
                            <InputNumeric
                                label="Всего мирных"
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
                                className="is-columns"
                            />
                        </div>
                        <br />
                        <br />
                        <div>
                            <InputNumeric
                                label="Всего мафий"
                                value={config.mafias}
                                min={1}
                                isDisabledInc={
                                    config.mafias >= config.citizens + config.activeRoles.length ||
                                    config.citizens === 0
                                }
                                onChange={onChangeTotalMafias}
                                className="is-columns"
                            />
                        </div>
                    </div>

                    {!isActiveRolesDisabled && (
                        <div className="Settings__row">
                            <div className="Settings__title">Активные роли <div className="Settings__title-info" onClick={() => setIsInfoOpen(true)}>?</div></div>
                            <div className="Settings__roles">
                                {ACTIVE_ROLES.map(role => {
                                    const isDoctor = role.title === RolesEnum.Doctor;
                                    const isReanymator = role.title === RolesEnum.Reanymator;
                                    const isDisabled = (isDoctor && config.activeRoles.find(item => item.title === RolesEnum.Reanymator)) || (isReanymator && config.activeRoles.find(item => item.title === RolesEnum.Doctor)) ? true : false;
                                    const isChecked = !!config.activeRoles.find(item => item.id === role.id);
                                    return (
                                        <Checkbox
                                            onChange={() => onChangeActiveRoles(role)}
                                            label={role.title}
                                            key={role.id}
                                            isChecked={isChecked}
                                            isDisabled={isDisabled || (config.totalPlayers - config.activeRoles.length < 3 && !isChecked)}
                                        />
                                    )
                                })}
                            </div>
                            <div className="Settings__action">
                                <button onClick={handleSubmitSettings}>GO</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            {isInfoOpen && (
                <div className="Settings__info">
                    <div className="Settings__info-close" onClick={() => setIsInfoOpen(false)}>x</div>
                    <div className="Settings__info-list">
                        {ACTIVE_ROLES.map(role => {
                            return <div className="Settings__info-item">
                                <div className="Settings__info-item-title">{role.title}</div>
                                <div className="Settings__info-item-desc">{role.desc}</div>
                            </div>
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
