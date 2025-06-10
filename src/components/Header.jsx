import chef from "../assets/chef-claude-icon.png"

export default function Header(){
    return (
        <header>
            <img className = "icon" src = {chef} alt="chef" />
            <h1>Chef Claude</h1>
        </header>
    )
}