import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFileText } from 'react-icons/ai'
import { AiOutlineFolder } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export function MobileIcons(){

    return(
        <section className='mobileicons-container'>
            <NavLink activeclassname="active" to={'/'}><AiOutlineHome className='aioutlinehome' /></NavLink>
            <NavLink activeclassname="active" to={'/articles'}><AiOutlineFileText className='aioutlinefiletext' /></NavLink>
            <NavLink activeclassname="active" to={'/another'}><AiOutlineFolder className='aioutlinefolder' /></NavLink>
        </section>
    )
}