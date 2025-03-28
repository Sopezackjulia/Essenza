// Importação do react router
import { Routes, Route} from 'react-router-dom'

import Home from '../home/index';
import Form from '../form/index';

// Definição dos componentes de rotas
function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/Form' element={ <Form/> } />
        </Routes>
    )
}

export default RoutesApp;