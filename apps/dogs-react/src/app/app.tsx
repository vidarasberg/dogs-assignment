import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.module.scss';
import { DogDetails } from './components/dogDetails/dogDetails';
import { DogList } from './components/dogList/dogList';
import { Layout } from './components/layout';
import { NoPage } from './components/noPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dogs" element={<DogList />} />
          <Route path="/dogs/:dogId" element={<DogDetails />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;