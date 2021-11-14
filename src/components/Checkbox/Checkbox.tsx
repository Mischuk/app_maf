import { FC } from "react";
import cn from "classnames";
import "./Checkbox.styles.scss";

interface iProps {
    isChecked: boolean;
    onChange: () => void;
    label: string;
    isDisabled?: boolean;
}
export const Checkbox: FC<iProps> = ({ isChecked, onChange, label, isDisabled }) => {

    const handleChange = () => {
        if (isDisabled) return;
        onChange();
    }
    return (
        <div className={cn("Checkbox", isChecked && "is-checked", isDisabled && "is-disabled")} onClick={handleChange}>
            <div className="Checkbox__icon"></div>
            <div className="Checkbox__label">{label}</div>
        </div>
    );
};
