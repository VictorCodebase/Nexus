
export default function Temp({data}){
    return(
        <ul>
            {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                    {key}: {value}
                </li>
            ))}
        </ul>
    )
}