import { careLogo } from "./Nav"

const Footer = ()=>{
    return(
        <footer>
            <img width='88px' src={careLogo} alt="care tech logo" />
            <p>&copy;copy right 2024 CARE TECH HUB. All rights reserved.
                <a href="../Legal/~$IVACY_POLICY[1].docx"> Privacy Policy</a> | <a href="">Terms of Service</a></p>
        </footer>
    )
}

export default Footer