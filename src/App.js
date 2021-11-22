import Index from './pages/index';
import Contacto from './pages/contacto';
import './styles/styles.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Layout from './Layout/Layout';

function App() {
    return (
        <div>
            {/* <Layout>
        <Index />
      </Layout> */
            }
            <BrowserRouter>
                <Routes>
                    <Route path="/contacto" element={<Contacto />}/>
                    <Route path="/" element={<Layout > <Index/> <div>Hola</div> </Layout>}/>
                </Routes>
            </BrowserRouter>

        </div>

    );
}

export default App;
