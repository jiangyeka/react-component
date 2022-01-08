import React from "react";
import { render,fireEvent } from "@testing-library/react"; 
import Button,{ButtonProps,ButtonType,ButtonSize} from "./button";

const defaultProps={
    onClick:jest.fn()
}

const testProps:ButtonProps={
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'klass'
}

const disableProps:ButtonProps={
    disabled:true,
    onClick:jest.fn()
}

describe('test Button component',()=>{
    it('should render the correct default button',()=>{
        const view=render(<Button {...defaultProps}>Nice</Button>)
        const element=view.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props',()=>{
        const view=render(<Button {...testProps}>Nice</Button>)
        const element=view.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    it('shuld render a link when btnType equals link and href is provided',()=>{
        const utils=render(<Button btnType={ButtonType.Link} href="httpL//baidu.com">Link</Button>)
        const element=utils.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled set to true',()=>{
        const view=render(<Button {...disableProps}>Nice</Button>)
        const element=view.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disableProps.onClick).not.toHaveBeenCalled()
    })

})