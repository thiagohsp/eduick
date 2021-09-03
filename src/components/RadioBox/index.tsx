import React, { ButtonHTMLAttributes } from 'react';
import { FaCheckCircle, FaCircle } from "react-icons/fa"
import styles from './styles.module.scss';

interface RadioBoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  //interface RadioBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const RadioBox: React.FC<RadioBoxProps> = ({ isActive, children, ...rest }) => {
  return (
    <button
      className={`${styles.radioBox}`}
      type="button"
      {...rest}
    >
      {isActive
        ? <FaCheckCircle color="#FFD74F" />
        : <FaCircle color="rgb(255,255,255,0.2)" />
      }
      {children}
    </button>
  );
}

export default RadioBox;