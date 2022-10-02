import { IFile } from './File'

let selected = false

const base: IFile = {
  name: 'About',
  onClick: () => (selected = !selected),
  isSelected: selected,
}

export const mockFileProps = {
  base,
}
