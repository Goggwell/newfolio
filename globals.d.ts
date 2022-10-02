declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const content: string | any

  export { ReactComponent }
  export default content
}
