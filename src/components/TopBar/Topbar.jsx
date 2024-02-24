import "./Topbar.css";

export default function TopBar(){
    return(
        <section className="topbar">
            <div>
                <div className="title">
                    <h1>Instituto Gabriel Pimenta de Direitos Humanos</h1>
                </div>
                <div className="links">
                    <h1>links</h1>
                </div>
            </div>
            <div>
                <div className="filter">
                    <div>filtro1</div>
                </div>
                <div className="filter">
                    <div>filtro2</div>
                </div>
                <div className="filter">
                    <div>filtro3</div>
                </div>
                <div className="filter">
                    <div>filtro4</div>
                </div>
                <div className="filter">
                    <div>filtro5</div>
                </div>
            </div>
        </section>
    )
}