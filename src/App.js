import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
	<h1>TEST 3 SINCRONIZACIÓN AUTOMÁTICA CON GIT con WEBHOOKS 4</h1>
	{/*Se habian insertado comentarios de forma incorrecta
	Se ha cambiado el titulo para ver si los cambios se reflejan*/}
      <div className='tareas-lista-principal'>
        <h1>Mis tareillas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
