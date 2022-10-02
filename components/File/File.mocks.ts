import { IFile } from './File'

let selected = false

const base: IFile = {
  name: 'Folder',
  onClick: () => (selected = !selected),
  isSelected: selected,
}

export const mockFileProps = {
  base,
}
