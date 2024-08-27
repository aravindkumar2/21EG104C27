import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProductsPage from "./pages/AllProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;

const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f4f4f4',
    text: '#333',
    lightText: '#777',
    border: '#ddd',
  },
  breakpoints: {
    mobile: '768px',
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
