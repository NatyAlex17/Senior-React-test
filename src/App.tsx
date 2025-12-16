import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/layout';
import { MatchView } from './pages/MatchView';
import { Fixtures } from './pages/Fixtures';

function App() {
  
  
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Fixtures />} />
          <Route path="/match/:eventId" element={<MatchView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
