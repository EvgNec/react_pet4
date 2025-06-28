import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import SignupForm from './SignupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import Clock from './Clock/Clock';
import PokemonView from '../views/PokemonView';
import { Feedback } from './FeedbackClass/Feedback';
import { PhoneBook } from './PhoneBook/PhoneBook';

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

// Простий компонент для головної сторінки
function Home() {
  return <h2>Welcome to the Home page!</h2>;
}

// Простий компонент для 404
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}
export default function App() {
  return (
    <div style={containerStyles}>
      <AppBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/colorpicker" element={<ColorPicker options={colorPickerOptions} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/pokemon" element={<PokemonView />} />
        <Route path="/phoneBook" element={<PhoneBook />} />
        <Route path="/feedbackClass" element={<Feedback />} />
        {/* 404: має бути останнім */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}