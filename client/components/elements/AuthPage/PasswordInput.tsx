import { AuthPageInput } from "@/types/auth";
import styles from '@/styles/auth/auth.module.scss'
import { useStore } from "effector-react";
import { $mode } from "@/context/mode";

const PasswordInput = ({register, errors}: AuthPageInput) => {
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';
  
  return (
    <label className={styles.form__label} >
      <input
          {...register('password', {
            required: 'password!',
            minLength: 4,
            maxLength: 20,
            pattern: {
              value: /^[A-Za-zа-яА-ЯёЁ0-9._-]*$/,
              message: 'Недопустимое значение'
            }
          })}
          className={`${styles.form__input} ${darkModeClass}`}
          type="password"
          placeholder="password"
        />
        {errors.password && (
          <span className={styles.error_alert}>{errors.password?.message}</span>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <span className={styles.error_alert}>Min length 4 symbols</span>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
          <span className={styles.error_alert}>Max length 20 symbols</span>
        )}
    </label>
   );
}
 
export default PasswordInput;