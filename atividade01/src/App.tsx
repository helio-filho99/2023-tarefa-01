import './App.css'


const BarraDePesquisa = () => {
  return(
    <>
    <form action="javascript:void(0);">
      <input
      type="text"
      className="form-control add-task"
      placeholder="Nova Atividade"
    />
  </form> 
    </>
  );
}
const ItensDaLista = () =>{
  let lista = [
    "Todas",
    "Ativas",
    "Completadas"
  ];
  return(
    <>
    {lista.map((nome, index) => <li role="presentation"
				className="nav-item all-task active"> <a href="#" className="nav-link">{nome}</a> </li> )}
    </>

  )
} 

const CriarToDo = () =>{
  let lista = [
    "Criar tema",
    "Trabalhar no wordpress",
    "Organizar o departamento principal do escritório",
    "Resolução de erro no modelo HTML"
  ];
  return(
    <>
     {lista.map((nome, index) => 
     <div className="todo-item">
     <div className="checker">
       <span><input type="checkbox" /></span>
     </div>
     <span>{nome}</span>
     <a
       href="javascript:void(0);"
       className="float-right remove-todo-item"
       ><i className="icon-close"></i>
     </a>
   </div>
        )}
    </>
  );
}
function App() {
  return (
    <>
    <div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card card-white">
						<div className="card-body">
              <BarraDePesquisa/>
              <ul className="nav nav-pills todo-nav">
                <ItensDaLista/>
              </ul>
              <div className="todo-list">
                <CriarToDo/> 
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default App;