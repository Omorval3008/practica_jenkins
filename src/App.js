import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
	<h1>TEST 2 SINCRONIZACIÓN AUTOMÁTICA CON GIT</h1>
	{/*Se habian insertado comentarios de forma incorrecta
	Se ha cambiado el titulo para ver si los cambios se reflejan*/}
      <div className='tareas-lista-principal'>
        <h1>Mi lista de tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
