import { FC } from "react";
import "./Checkbox.styles.scss";

interface iProps {
    isChecked: boolean;
    onChange: () => void;
    label: string;
}
export const Checkbox: FC<iProps> = ({ isChecked, onChange, label }) => {
    return (
        <div className={`Checkbox ${isChecked ? "is-checked" : ""}`} onClick={onChange}>
            <div className="Checkbox__label">{label}</div>
        </div>
    );
};
