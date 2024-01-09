// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import className from 'classnames'
// to solve the problem of the text-white overriding other colors
import { twMerge } from 'tailwind-merge';

function Button ({ children, primary, secondary, success, danger, warning, outline, rounded }) {
  // Example of usage of the classNames library
  // This condition evaluates that if the primary prop is true, then the bgColor variable will be 'bg-blue-500'
  // let bgColor
  // if (primary) {
  //   bgColor = 'bg-blue-500'
  // }
  // classNames(bgColor, 'px-3', 'p-1.5')

  // Another example
  // For each key-value pair, if the value is true, then the key is returned
  // const primary1 = true
  // const warning1 = false
  // classNames({
  //   'bg-blue-500': primary1,
  //   'bg-yellow-500': warning1
  // })

  const classes = twMerge(
    className('px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger
    })
  )

  return (
    <button className={classes}>
      {children}
    </button>
  )
}

// Doing like this involve a lot of extra code
// Instead of this, we can use the prop-types library -> that check the type of the props
// (actually, is very commonly used, but it's recommended to use TypeScript instead)
// if (primary && secondary) throw new Error('You can not use primary and secondary together')

// This is a way to check the type of the props
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
    // checks if the prop is a boolean
    // Number(!!primary) -> convert the boolean to a number
    // for example, if primary is true, !!primary is true, and Number(true) is 1
    const count = Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!danger) +
    Number(!!warning)

    // And if we have more than one variation, we throw an error
    if (count > 1) {
      return new Error('You cannot use more than one variation at the same time')
    }
  }
}

export default Button
