//JSX = JavaScript + XML (HTML)
import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App(){

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post  
        author ="Vinicius Sousa" 
        content ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, dicta doloremque deleniti quia exercitationem quam delectus molestiae qui, soluta iste ipsum voluptates? Nobis, nisi expedita. Provident ea ut facilis quam?"
        />
        <Post author="Diego Fernandes"
            content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, dicta doloremque deleniti quia exercitationem quam delectus molestiae qui, soluta iste ipsum voluptates? Nobis, nisi expedita. Provident ea ut facilis quam?"
        />
        </main>
      </div>

    </div>  

  
  )

}


