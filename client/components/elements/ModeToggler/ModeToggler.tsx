import { $mode } from "@/context/mode";
import { useTheme } from "@/hooks/useTheme";
import { useStore } from "effector-react";
import { useEffect } from "react";
import styles from '../../../styles/modeToggler/modeToggler.module.scss'

const ModeToggler = () => {
  const { toggleTheme } = useTheme();
  const mode = useStore($mode);

  const handleToggleMode = () => {
    toggleTheme()
    document.body.classList.toggle('dark_modde')
  }

  useEffect(() => {
    document.body.classList.add(mode === 'dark' ? 'dark_mode' : 'body')
  }, [mode])

  return (
    <div className={styles.theme}>
      <input
        className={styles.theme__input}
        type="checkbox"
        checked={mode === 'light'}
        onChange={handleToggleMode}
      />
    </div>
  );
}
 
export default ModeToggler;