import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import styles from './styles.module.scss';

interface Props {
  name: string;
  Icon?: React.ComponentType<IconBaseProps>;
}
type InputProps = JSX.IntrinsicElements['input'] & Props

const Input = ({ name, Icon, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <div className={styles.inputContainer}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </div>
  );
};

export default Input;
