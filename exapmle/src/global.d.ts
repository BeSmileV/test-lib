declare module '*.module.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.scss'
declare module '*.module.scss' {
    const content: { [key: string]: string | undefined };
    export default content;
}

interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {
}

declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: SvgrComponent;
    export default svgUrl;
    export {svgComponent as ReactComponent};
}

