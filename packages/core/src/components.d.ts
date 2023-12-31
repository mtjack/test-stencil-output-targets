/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Component1 {
    }
    interface Component2 {
    }
    interface Component3 {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLComponent1Element extends Components.Component1, HTMLStencilElement {
    }
    var HTMLComponent1Element: {
        prototype: HTMLComponent1Element;
        new (): HTMLComponent1Element;
    };
    interface HTMLComponent2Element extends Components.Component2, HTMLStencilElement {
    }
    var HTMLComponent2Element: {
        prototype: HTMLComponent2Element;
        new (): HTMLComponent2Element;
    };
    interface HTMLComponent3Element extends Components.Component3, HTMLStencilElement {
    }
    var HTMLComponent3Element: {
        prototype: HTMLComponent3Element;
        new (): HTMLComponent3Element;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "component-1": HTMLComponent1Element;
        "component-2": HTMLComponent2Element;
        "component-3": HTMLComponent3Element;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface Component1 {
    }
    interface Component2 {
    }
    interface Component3 {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "component-1": Component1;
        "component-2": Component2;
        "component-3": Component3;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-1": LocalJSX.Component1 & JSXBase.HTMLAttributes<HTMLComponent1Element>;
            "component-2": LocalJSX.Component2 & JSXBase.HTMLAttributes<HTMLComponent2Element>;
            "component-3": LocalJSX.Component3 & JSXBase.HTMLAttributes<HTMLComponent3Element>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
