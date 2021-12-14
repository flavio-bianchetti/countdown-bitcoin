import Index from './pages/Index';
import CountdownProvider from './context/CountdownProvider';

function App() {
  return (
   <CountdownProvider>
     <Index />
   </CountdownProvider>
  );
}

export default App;
