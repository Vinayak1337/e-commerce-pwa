import { ChangeEvent, FC } from 'react';
import {
	FormInputGroup,
	FormInputLabel,
	FormInputMain
} from './FormInput.styled';

const FormInput: FC<FormInputProps> = ({
	handleChange,
	label,
	...inputProps
}) => {
	return (
		<FormInputGroup>
			<FormInputMain {...inputProps} onChange={handleChange} />
			{label ? (
				<FormInputLabel
					shrink={Boolean(inputProps.value.length)}
					htmlFor={label}>
					{label
						.split(' ')
						.map(l => l.charAt(0).toUpperCase() + l.slice(1))
						.join(' ')}
				</FormInputLabel>
			) : null}
		</FormInputGroup>
	);
};

export default FormInput;

interface FormInputProps {
	id: string;
	name: string;
	type: string;
	value: string;
	label: string;
	required?: boolean;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
