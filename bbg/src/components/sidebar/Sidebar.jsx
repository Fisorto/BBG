import "./Sidebar.scss"
import { useState } from 'react';

function Sidebar (){

    const [isMenuOpen, setMenuOpen] = useState(true) ;
         

    return(
        <>  
            <div className="header">
                    <div className="icon-page"> 
                        <button className="button-menu" onClick={() => setMenuOpen(!isMenuOpen)}>Тут буде іконка</button>
                    </div>
                    {/* <div className="line-page"></div>
                    <div className="name-page"> Назва сторінки</div> */}
                

                <div className={isMenuOpen ? "open-menu":"close-menu"}>
                    <div>
                        <div>BBG</div>
                    </div>
                    <div>
                        <div>Головна</div>
                        <div>Пункт меню</div>
                        <div>Пункт меню</div>
                        <div>Пункт меню</div>
                        <div>Пункт меню</div>
                    </div>
                    <div>
                        <div>Про застосунок</div>
                        <div>Налаштування</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Sidebar