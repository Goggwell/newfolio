declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const content: React.FC<React.SVGProps<SVGSVGElement>>

  export { ReactComponent }
  export default content
}
