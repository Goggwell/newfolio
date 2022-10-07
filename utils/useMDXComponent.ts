// custom useMDXComponent from next-contentlayer/hooks
import React from 'react'
import ReactDOM from 'react-dom'
// react/jsx-runtime instead of jsx-runtime.cjs module due to import-esm-externals error
import * as _jsx_runtime from 'react/jsx-runtime'

const getMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {}
): React.ComponentType<any> => {
  const scope = { React, ReactDOM, _jsx_runtime, ...globals }
  const fn = new Function(...Object.keys(scope), code)
  return fn(...Object.values(scope)).default
}

export const useMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {}
): React.ComponentType<any> => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals])
}
