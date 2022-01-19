import React,{createContext, useState} from "react";
import classNames from "classnames";
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback=(selectedIndex: string) => void;

export interface MenuProps{
    defaultIndex?:string;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];  
}

interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode; 
    defaultOpenSubMenus?: string[];  
  }

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu:React.FC<MenuProps>=(props)=>{
    const {style,className,mode,children,defaultIndex,onSelect,defaultOpenSubMenus}=props
    const [ currentActive, setActive ] = useState(defaultIndex)
    const classes=classNames('jiangye-menu',className,{
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    })
    const handleClick = (index: string) => {
        setActive(index)
        if(onSelect) {
          onSelect(index)
        }
      }
    const passedContext: IMenuContext = {
        index: currentActive ?currentActive:'0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
      }
const renderChildren=()=>{
  return React.Children.map(children,(child,index)=>{
    const childElement=child as React.FunctionComponentElement<MenuItemProps>
    const {displayName} =childElement.type
    if(displayName==='MenuItem'|| displayName==='SubMenu'){
      return React.cloneElement(childElement,{
        index:index.toString()
      })
    }else{
      console.error("Warning: Menu has a child which is not a MenuItem component")
    }
  })
}

    return <ul className={classes} style={style} data-testid="test-menu">
        <MenuContext.Provider value={passedContext}> 
        {renderChildren()}
        </MenuContext.Provider>
        </ul>
}

Menu.defaultProps = {
    mode: 'horizontal',
    defaultIndex:'0',
    defaultOpenSubMenus:[]
  }

export default Menu