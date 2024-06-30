interface CSSStyleDeclarationWithTransform
    extends Omit<CSSStyleDeclaration, "direction" | "transition"> {
    x: string;
    y: string;
    z: string;
    rotateX: string;
    rotateY: string;
    rotateZ: string;
    scaleX: string;
    scaleY: string;
    scaleZ: string;
    skewX: string;
    skewY: string;
}
