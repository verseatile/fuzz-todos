import React from "react"
import { bulmaish, dark, macos, mango, berry, ColorTile } from "../styles"


const ThemePicker = ({setTheme}) => {
    return (
        <div style={{ display: 'flex' }}>
            {/* Swatch 1 */}
            <ColorTile color={"#50E3C2"} onClick={() => setTheme(bulmaish)} />
            <ColorTile color={"#333"} onClick={() => setTheme(dark)} />
            <ColorTile color={"#FEFEFE"} onClick={() => setTheme(macos)} />
            <ColorTile color={"#F5A623"} onClick={() => setTheme(mango)} />
            <ColorTile color={"#C40061"} onClick={() => setTheme(berry)} />


            {/* Swatch 2 */}
            {/* Swatch 3 */}

        </div>
    )
}

export default ThemePicker