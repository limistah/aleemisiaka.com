const SelectInput = ({ options, defaultValue, onBlur, disabled }) => {
  return (
    <select onChange={onBlur} defaultValue={defaultValue} disabled={disabled}>
      {options.map(option => {
        return <option value={option.value}>{option.label}</option>
      })}
    </select>
  )
}

const TextInput = ({ type, defaultValue, onBlur, disabled }) => {
  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      onBlur(e)
    }
  }
  const inputRef = React.useRef()
  React.useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])
  return (
    <input
      ref={inputRef}
      type={type}
      defaultValue={defaultValue}
      onBlur={onBlur}
      disabled={disabled}
      onKeyUp={handleKeyUp}
    />
  )
}

// EditDisplay Component

const EditDisplay = ({
  inputType,
  onchange,
  defaultValue,
  selectOptions,
  onBlur,
  disabled,
}) => {
  return (
    <>
      {inputType === "select" && (
        <SelectInput
          options={selectOptions}
          defaultValue={defaultValue}
          onchange={onchange}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}
      {["text", "password"].includes(inputType) && (
        <TextInput
          type={inputType}
          onchange={onchange}
          defaultValue={defaultValue}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}
    </>
  )
}

// Text display component
const TextDisplay = ({ text }) => <span>{text}</span>

function InplaceEdit({
  text,
  inputType,
  defaultValue,
  valueToText,
  updateKey,
  onUpdate,
}) {
  const [showEditor, updateShowEditor] = React.useState(false)
  const [displayText, updateDisplayText] = React.useState(text)

  const handleShowEditor = () => {
    updateShowEditor(true)
  }

  // Callback for the onBlur event handler
  const handleEditorInputChange = React.useCallback(e => {
    const value = e.currentTarget.value
    // Converts the value to a displayable text using a function from the parent consumer
    const text = typeof valueToText === "function" ? valueToText(value) : value
    // Updates the display text for synchronization
    updateDisplayText(text)
    // Hides the editor
    updateShowEditor(false)
    if (defaultValue !== value) {
      // If the value has changed, we need to tell the consumer parents about it
      const handler = typeof onUpdate === "function" ? onUpdate : () => {}
      // Sets the data returning an object containing the value in the updateKey or just the value itself
      const data = updateKey ? { [updateKey]: value } : value
      // Call the update function with the data and resource id
      handler(data, id)
    }
  })

  return (
    <>
      <div onClick={handleShowEditor} style={{ cursor: "pointer" }}>
        {showEditor ? (
          <EditDisplay
            inputType={inputType || "text"}
            defaultValue={defaultValue}
            onBlur={handleEditorInputChange}
            selectOptions={selectOptions}
            disabled={isUpdatingId === id}
          />
        ) : (
          <TextDisplay text={displayText} />
        )}
      </div>
    </>
  )
}
