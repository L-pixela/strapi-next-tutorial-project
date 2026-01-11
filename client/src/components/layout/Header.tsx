import NavBar from "./Navbar";
import {SecondaryButton} from "../ui/Button";

export default function Header(){
    return (
        <header className="flex flex-row items-center justify-between m-4">
            <h4>Logo</h4>
            <NavBar />
            <SecondaryButton text="Login"/>
        </header>
    )
}