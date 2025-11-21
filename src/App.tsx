import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComingSoonPopup from './components/ComingSoonPopup';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerService from './pages/CustomerService';
import Flight from './pages/Flight';
import Index from './pages/Index';
import LocalEvents from './pages/LocalEvents';
import NotFound from './pages/NotFound';
import Parking from './pages/Parking';
import Shopping from './pages/Shopping';
import Travel from './pages/Travel';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ComingSoonPopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/local-events" element={<LocalEvents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
