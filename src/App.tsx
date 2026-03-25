import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PlaceholderPage from './components/PlaceholderPage';
import CoffeeDatabase from './pages/CoffeeDatabase';
import Login from './pages/Login';
import MemberArea from './pages/MemberArea';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impacto" element={<PlaceholderPage title="Nuestro Impacto" subtitle="Construyendo confianza radical. Transparencia, procesos e historias completas próximamente." />} />
          <Route path="/cafe" element={<CoffeeDatabase />} />
          <Route path="/productores" element={<PlaceholderPage title="Productores" subtitle="Conoce las caras, historias y perfiles individuales detrás de tu taza." />} />
          <Route path="/suscripcion" element={<PlaceholderPage title="Suscripción Premium" subtitle="Planes detallados, beneficios claros y garantía de impacto." />} />
          <Route path="/faq" element={<PlaceholderPage title="Preguntas Frecuentes" subtitle="Resolvemos todas tus dudas y objeciones de forma directa." />} />
          
          {/* Autenticación y Áreas Privadas */}
          <Route path="/login" element={<Login />} />
          <Route path="/privado" element={
            <ProtectedRoute>
              <MemberArea />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
