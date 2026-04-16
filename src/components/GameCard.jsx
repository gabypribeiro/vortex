import './GameCard.css';
import { Play } from "lucide-react";

export function GameCard({ title, category, banner, index }) {
    return (
        <div className="vortex-card"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" //define efeito
        data-aos-delay = {index * 50} // define o tempo de animação de cada card 
        
        >

            <img src={banner} alt={title} className='card-img' />

            <div className="card-info">
                <h4>{title}</h4>
                <p>{category}</p>
                <button className="play-btn"><Play size={14} fill="white" /></button>
            </div>



        </div>
    )
}