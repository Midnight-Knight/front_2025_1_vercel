import Style from "../../App.module.css";

interface Props {
    heading: string | number;
}

export default function InfoBlock({heading}:Props) {
    return (
        <div className={Style.InfoBlock}>
            <h4>{heading}</h4>
        </div>
    )
}