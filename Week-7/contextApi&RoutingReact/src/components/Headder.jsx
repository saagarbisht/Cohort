import {useNavigate} from 'react-router-dom'

export default function Headder() {
    const navigate = useNavigate();
    return (
        <div style={{backgroundColor : "black", padding : "0.75rem 1.5rem", display : "flex", gap : "1rem"}}>
            <button style={{padding : "0.25rem 0.5rem", fontSize : "1rem"}} onClick={() => {
                navigate("/dashboard")
            }}>Dashboard</button>
            <button style={{padding : "0.25rem 0.5rem" ,fontSize : "1rem"}} onClick={() => {
                navigate("/home")
            }}>Landing</button>
        </div>
    )
}
