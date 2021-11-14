import { FC } from "react";
import cn from "classnames";
import "./InputNumeric.styles.scss";

interface iProps {
    value: number;
    onChange: (value: number) => void;
    isDisabledDec?: boolean;
    isDisabledInc?: boolean;
    label?: string;
    min?: number;
    max?: number;
    className?: string;
}

export const InputNumeric: FC<iProps> = ({ value, onChange, isDisabledDec, isDisabledInc, label, min, max, className = "" }) => {
    const handleChange = (step: number) => {
        onChange(value + step);
    };
    return (
        <div className={cn("InputNumeric", className)}>
            {label && <div className="InputNumeric__label">{label}</div>}

            <div className="InputNumeric__control">
                <button
                    className="InputNumeric__button is-down"
                    onClick={() => handleChange(-1)}
                    disabled={(value === min) || isDisabledDec}
                >
                    -
                </button>

                <div className="InputNumeric__input">{value}</div>

                <button
                    className="InputNumeric__button is-up"
                    onClick={() => handleChange(1)}
                    disabled={(value === max) || isDisabledInc}
                >
                    +
                </button>
            </div>
        </div>
    );
};
