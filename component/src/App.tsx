import React, { useState } from 'react';
import Button from './components/Button/button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import Submenu from './components/Menu/subMenu'
import Transition from './components/Transition/transition'
library.add(fas)
function App() {
  const [show,setShow]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
      <Menu defaultIndex='0' onSelect={index=>{alert(index)}}  defaultOpenSubMenus={['3']} >
        <MenuItem >ckk link1</MenuItem>
        <MenuItem  disabled>ckk link2</MenuItem>
        <MenuItem >ckk link3</MenuItem>
        <Submenu title='dropdown'>
        <MenuItem >ckk link1</MenuItem>
        <MenuItem  >ckk link2</MenuItem>
        </Submenu>
      </Menu>
<Button size='lg' onClick={()=>{setShow(!show)}}>Toggle</Button>
<Transition in={show} timeout={300} animation='zoom-in-left'>
<div>
      <Icon icon="coffee" theme="danger" size='10x'/>

        <Button className='cuntom'>fff</Button>
        <Button onClick={e=>{e.preventDefault();alert(123)}}> Default Button </Button>
        <Button disabled> Disabled Button </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size='lg' >fffff</Button>
        </div>
        </Transition>
      </header>
    </div>
  );
}

export default App;
