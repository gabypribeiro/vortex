import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import "./App.css";
import {gamesData} from "./data/Games";
import { GameCard } from "./components/GameCard";
function App() {
  return (
    <div className="vortex-app">
      <Sidebar />

      <main className="vortex-main">
        <Header />
        <div className="vortex-content">
          <h2 className="section-title">Jogos recentes</h2>
          <div className="vortex-grid">
            {
              gamesData.map((g)=> (<GameCard
                key={g.id}
                title = {g.title}
                category={g.category}
                banner={g.banner}
              />))
            }
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;