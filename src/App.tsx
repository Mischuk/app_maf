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

    const handleReset = () => {
        setStep(GameStep.Settings);
        setSelectedRoles([]);
    }

    return (
        <div className="App">
            <div className="App__orientation">ROTATE <br/><br/>DEVICE</div>


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
                <Results roles={selectedRoles} reset={handleReset} />
            )}
        </div>
    );
};
