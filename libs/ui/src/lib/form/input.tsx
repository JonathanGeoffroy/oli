import { JSX } from 'solid-js';
import clsx from 'clsx';

import { ark } from '@ark-ui/solid';
export interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
}

export function Input(props: InputProps) {
  const { class: className, onValueChange, ...rest } = props;

  const handleOnChange = (e: any) => {
    props.onValueChange(e.currentTarget.value);
  };

  return (
    <div>
      <ark.label for={props.id}>{props.label}</ark.label>
      <ark.input
        onChange={handleOnChange}
        class={clsx('oli-ui-input', className)}
        {...rest}
      />
    </div>
  );
}
