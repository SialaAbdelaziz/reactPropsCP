
import './App.css';
import Profil from "./Profil/Profil "

function App() {
  const styleProfil ={ color: "blue"}
  const  handelName = (fullName) => alert(`${fullName}`)
  return (
    <div className="App" style={styleProfil}>
      <Profil fullName="Abdelaziz Siala" bio="eli yji"  profession="securité electronique" handelName={handelName}>
      <img src ="/profile photo.png"></img>
      </Profil>
    </div>
  );
}

export default App;
