import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administration from './pages/Administration/Administration';
import Authorization from './pages/Authorization/Authorization';
import Registration from './pages/Registration/Registration';
import ContentPage from './pages/Content/Content';
import Error from './pages/Error/Error';
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Authorization />} />
                    <Route path="/Authorization" element={<Authorization />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/ContentPage" element={<ContentPage />} />
                    <Route
                        path="/Administration"
                        element={<Administration />}
                    />
                    <Route path="/Error" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
