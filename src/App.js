import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';


function App() {
 const showUi =  useSelector(state => state.UiSlice.showUi)
  return (
    <Layout>
      {showUi && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
