import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';

import './global.css';

export function App() {
  return (
    <div className='App'>
      <Header />
      <Post
        author='Guilherme Fujita'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat nulla ad vero beatae, aspernatur, aperiam dicta praesentium voluptatum temporibus qui minima modi cumque explicabo, possimus quam quidem sapiente quasi?'
      />
    </div>
  );
}
