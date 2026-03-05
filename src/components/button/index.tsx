import '../../index.css';
import type {ReactNode} from "react";

interface Props {
    onClick: () => void;
    children: ReactNode;
}

export default function Button({children, onClick}: Props) {
    return (
        <button className={'Button'} onClick={onClick}>
            {children}
        </button>
    )
}