import { useId } from 'react'
import { useFormContext, get } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { TProps } from './type'
import { cn, Input } from '@nextui-org/react'

export const TextInput = <TFormValues extends Record<string, unknown>>(
  props: TProps<TFormValues>
) => {
  const {
    id,
    label,
    rules,
    className,
    type,
    name,
    hint,
    labelClassName,
    inputClassName,
    containerClassName,
    leftNodeClassName,
    rightNodeClassName,
    rightNode,
    leftNode,
    readOnly,
    maxLength,
    onClick,
    isRequired,
    min,
    max,
    value,
    ...rest
  } = props

  const generatedId = useId()

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = get(errors, name)

  return (
    <div className={twMerge(containerClassName)}>
      <div
        className={twMerge(
          className
        )}
      >
        {leftNode && (
          <div
            className={twMerge(leftNodeClassName)}
          >
            {leftNode}
          </div>
        )}

        <Input
            id={id ?? generatedId}
            min={min}
            max={max}
            type={type}
            readOnly={readOnly}
            maxLength={maxLength}
            value={value}
            className={cn(
                inputClassName
            )}
            onClick={onClick}
            isInvalid={true}
            errorMessage={"test"}
            label={label}
            labelPlacement='outside'
            {...register(name, rules)}
            {...rest}
        />

        {rightNode && (
          <div
            className={twMerge(rightNodeClassName)}
          >
            {rightNode}
          </div>
        )}
      </div>
    </div>
  )
}