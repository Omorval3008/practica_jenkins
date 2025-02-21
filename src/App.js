import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
	<h1>TEST SINCRONIZACIÓN AUTOMÁTICA CON GIT</h1> //Se ha cambaido el titulo para ver 
	//si se refleja el cambio
      <div className='tareas-lista-principal'>
        <h1>Mi lista de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
