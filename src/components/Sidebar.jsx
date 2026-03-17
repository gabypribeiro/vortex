import './Sidebar.css'
import { LayoutDashboard, User, Gamepad2 } from 'lucide-react';

export function Sidebar (){
    return(
        <aside className="vortex-sidebar">
           <h2 className='logo'>VORTEX_</h2>

           <nav>

            <div className="nav-item active"><LayoutDashboard size={20}/>Dashboard</div>
            <div className="nav-item"><Gamepad2 size={20}/>Meus jogos</div>
            <div className="nav-item"><User size={20}/>Perfil</div>
           </nav>
        </aside>
    )
}
export default Sidebar;