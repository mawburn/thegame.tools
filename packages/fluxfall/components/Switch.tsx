interface SwitchProps {
  isOn: boolean
  toggle: () => void
}

const baseClasses = ''

const Switch = ({ isOn = true, toggle }: SwitchProps) => {
  const classes = isOn ? '' : ''

  return (
    <label htmlFor="toggle">
      <input className="input" type="checkbox" id="toggle" />
      <div className="toggle-wrapper">
        <span className="selector"></span>
      </div>
      <p className="notification">
        You have selected <span className="selected"></span>
      </p>
    </label>
  )
}

export default Switch
