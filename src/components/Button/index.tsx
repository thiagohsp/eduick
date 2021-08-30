import { ButtonHTMLAttributes } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button({ children, ...rest }: IButtonProps) {

  return (
    <button
      type="button"
      className={styles.buttonContainer}
      {...rest}
    >
      {children}
    </button>
  )
}