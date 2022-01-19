import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
library.add(fas)
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu defaultIndex={0} onSelect={index=>{alert(index)}}>
        <MenuItem index={0}>ckk link1</MenuItem>
        <MenuItem index={1} disabled>ckk link2</MenuItem>
        <MenuItem index={2}>ckk link3</MenuItem>
      </Menu>


      <Icon icon="coffee" theme="danger" size='10x'/>

        <Button className='cuntom'>fff</Button>
        <Button onClick={e=>{e.preventDefault();alert(123)}}> Default Button </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank"> Link  </Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com"> Disabled Link  </Button>
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
      </header>
    </div>
  );
}

export default App;
