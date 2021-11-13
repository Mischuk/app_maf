import { PlayerRoles } from "@pages/PlayerRoles/PlayerRoles";
import { Results } from "@pages/Results/Results";
import { Settings } from "@pages/Settings/Settings";
import { GameStep, RolesEnum } from "@utils/enums";
import { shuffle } from "@utils/helpers";
import { useEffect, useState } from "react";
import "./App.styles.scss";

export const App = () => {
    const [step, setStep] = useState<GameStep>(GameStep.Settings);
    const [selectedRoles, setSelectedRoles] = useState<RolesEnum[]>([]);

    const onSubmitSettings = (roles: RolesEnum[]) => {
        setSelectedRoles(shuffle(roles));
        setStep(GameStep.Roles);
    };

    const onShowResult = () => {
        setStep(GameStep.Final);
    };

    useEffect(() => {
        const html = document.documentElement;

        if (step === GameStep.Roles) {
            html.classList.add("is-fixed");
        } else {
            html.classList.remove("is-fixed");
        }
    }, [step]);

    return (
        <div className="App">
            {step === GameStep.Settings && (
                <Settings onSubmit={onSubmitSettings} />
            )}
            {step === GameStep.Roles && (
                <PlayerRoles
                    roles={selectedRoles}
                    onShowResult={onShowResult}
                />
            )}
            {step === GameStep.Final && (
                <Results roles={selectedRoles} />
            )}
        </div>
    );
};
