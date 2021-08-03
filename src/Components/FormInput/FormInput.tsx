import { FC } from 'react'
import './FormInput.scss'

const FormInput: FC<FormInputProps>= ({ handleChange, label, ...inputProps }) => {
    return (
        <div className="group">
            <input {...inputProps} className="form-input" onChange={handleChange} />
            {
                label ? <label className={`${inputProps.value.length ? 'shrink' : ''} form-input-label`} htmlFor={label}>{ label.split(' ').map((l) => (l.charAt(0).toUpperCase()) + l.slice(1)).join(' ')}</label> : null
            }
        </div>
    )
}

export default FormInput
