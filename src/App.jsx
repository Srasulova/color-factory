import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './components/ColorList';
import ColorDetail from './components/ColorDetail';
import NewColorForm from './components/NewColorForm';
import Nav from './components/Nav';

function App() {
  const initialColors = JSON.parse(localStorage.getItem('colors')) || [
    { name: "red", color: "#FF0000" },
    { name: "green", color: "#00FF00" },
    { name: "blue", color: "#0000FF" }
  ];

  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  function handleAddColor(newColor) {
    setColors(prevColors => [newColor, ...prevColors]);
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={handleAddColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
