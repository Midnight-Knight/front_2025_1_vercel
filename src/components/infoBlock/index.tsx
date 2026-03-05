interface Props {
    heading: string | number;
}

export default function InfoBlock({heading}:Props) {
    return (
        <div className={'InfoBlock'}>
            <h4>{heading}</h4>
        </div>
    )
}