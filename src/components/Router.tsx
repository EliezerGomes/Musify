import { Routes, Route } from "react-router-dom"
import { Musicfy } from "../pages/MusicFy"
import { Login } from "../pages/Login"
import { Increver } from "../pages/Increver"
import { Player } from "../pages/Player"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Musicfy />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/inscrever" element={<Increver />}/>
            <Route path="/player" element={<Player />}/>
        </Routes>
    )
}