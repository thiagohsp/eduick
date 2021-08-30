import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss'
// import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input id={name} {...rest} />
    </div>
  )
}

export default Input;