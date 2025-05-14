export default {
  order: [
    'custom-properties',
    'dollar-variables',
    'declarations',
    // Mixins generales primero
    { type: 'at-rule', name: 'include', hasBlock: false, parameter: '/^(?!.*-bp).*/' },
    // Mixins *-bp (breakpoints) al final
    { type: 'at-rule', name: 'include', hasBlock: false, parameter: '/.*-bp/' },
    'at-rules',
    { type: 'at-rule', name: 'media' },
    'rules'
  ],
  'properties-order': [
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',
    'display',
    'flex',
    'flex-direction',
    'justify-content',
    'align-items',
    'width',
    'height',
    'margin',
    'padding',
    'font-size',
    'font-weight',
    'line-height',
    'text-align',
    'color',
    'background',
    'border',
    'border-radius',
    'box-shadow',
    'transition',
    'animation'
  ],
  'unspecified-properties-position': 'bottom'
}
