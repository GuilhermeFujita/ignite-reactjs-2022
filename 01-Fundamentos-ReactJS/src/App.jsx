import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div className='App'>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Guilherme Fujita'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat nulla ad vero beatae, aspernatur, aperiam dicta praesentium voluptatum temporibus qui minima modi cumque explicabo, possimus quam quidem sapiente quasi?'
          />
        </main>
      </div>
    </div>
  );
}
