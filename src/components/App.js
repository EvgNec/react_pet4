import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar.js';
import SignupForm from './SignupForm/SignupForm.js';
import ColorPicker from './ColorPicker/ColorPicker.js';
import Counter from './Counter/Counter.js';
import Clock from './Clock/Clock.js';
import PokemonView from '../views/PokemonView.js';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <AppBar/>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/colorpicker" element={<ColorPicker options={colorPickerOptions} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/pokemon" element={<PokemonView />} />
        </Routes>
      </Router>
    </div>
  );
}