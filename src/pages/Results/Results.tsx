import { FC, useState } from "react";
import "./Results.styles.scss";

interface iProps {
    roles: string[];
}

export const Results: FC<iProps> = ({ roles }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="Results">
            <div className="Results__toggle" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"} all roles
            </div>
            {isVisible && (
                <div className="Results__content">
                    {roles.map((el, idx) => {
                        return (
                            <div key={idx}>
                                Player #{idx + 1}: {el}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
