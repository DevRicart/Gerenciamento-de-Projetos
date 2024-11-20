import React, {useState, useEffect} from 'react';
import '../../App.css'

const Home = () => {
  const [Home, setHome] = useState('');
  return (
    <div className='Home-body'> 
      <h1 className='Home-title'>Gerenciamento de Projetos</h1>
      <h2 className='Home-sub-title'>A React Project</h2>
      <p className='Home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur, culpa aliquam quo architecto quam optio beatae. Cupiditate tempora aperiam voluptate soluta autem sequi est nobis, ad voluptatum corporis nemo.</p>
      <a className='Home-link' href=''>Contact me!</a>
    </div>
  );
}

export default Home;