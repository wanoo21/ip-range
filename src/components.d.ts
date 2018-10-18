/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface IpRange {
    'disabled': boolean;
    'max': number;
    'min': number;
    'step': number;
    'value': number;
  }
  interface IpRangeAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'max'?: number;
    'min'?: number;
    'onInput'?: (event: CustomEvent) => void;
    'step'?: number;
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'IpRange': Components.IpRange;
  }

  interface StencilIntrinsicElements {
    'ip-range': Components.IpRangeAttributes;
  }


  interface HTMLIpRangeElement extends Components.IpRange, HTMLStencilElement {}
  var HTMLIpRangeElement: {
    prototype: HTMLIpRangeElement;
    new (): HTMLIpRangeElement;
  };

  interface HTMLElementTagNameMap {
    'ip-range': HTMLIpRangeElement
  }

  interface ElementTagNameMap {
    'ip-range': HTMLIpRangeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
