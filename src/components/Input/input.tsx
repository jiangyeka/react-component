import React, {InputHTMLAttributes, ReactElement} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import {Icon} from "../icon/icon";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * size
   */
  size?: 'df' | 'lg' | 'sm';
  /**
   * icon
   */
  icon?: IconProp;
  /**
   * prepend
   */
  prepend?: string | ReactElement;
  /**
   * append
   */
  append?: string | ReactElement;

  /**
   * the placeholder
   */
  placeholder?: string;

  /**
   * the child content
   */
  children?: Array<ReactElement> | ReactElement;
  /**
   * icon was clicked
   */
  onIconClick?: () => void;
  /**
   * the input ref
   */
  inputRef?: any;
}

/**
 * .jiangye-input-wrapper .is-disabled .input-size-lg/.input-size-sm
 * .input-group .input-group-append .input-group-prepend .input-inner
 */
export const Input: React.FC<InputProps> = (props) => {
  const {disabled, size, icon, prepend, append, style,placeholder, children,inputRef,
    onIconClick, ...restProps} = props;

  const classes = classNames('jiangye-input-wrapper', {
    'is-disabled': disabled,
    [`input-size-${size}`]: size,
    'input-group': prepend || append,
    'input-group-append': append,
    'input-group-prepend': prepend,
  });

  return (
    <div className={classes} style={style}>
      {prepend && <div className="jiangye-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper" onClick={onIconClick} ><Icon icon={icon}/></div>}
      <input placeholder={placeholder}
             className="jiangye-input-inner" ref={inputRef}
             disabled={disabled} {...restProps} />
      {children}
      {append && 
      <div className="jiangye-input-group-append">{append}</div>
      }
    </div>
  )
}