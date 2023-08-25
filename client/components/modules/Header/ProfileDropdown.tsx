import ProfileSvg from "@/components/elements/ProfileSvg/ProfileSvg";
import { $mode } from "@/context/mode";
import { useStore } from "effector-react";
import { forwardRef } from "react";
import styles from '@/styles/profileDropdown/profileDropdown.module.scss';
import { AnimatePresence, motion } from "framer-motion";
import LogoutSvg from "@/components/elements/LogoutSvg/LogoutSvg";

export const ProfileDropdown = forwardRef<HTMLDivElement, WrappedComponentProps>({{ open, setOpen }, ref}) => {
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';

  return (
    <div className={styles.profile}>
      <button className={styles.profile__btn}>
        <span className={styles.profile__span}>
          <ProfileSvg />
        </span>
      </button>
      <AnimatePresence>
        {open && (<motion.ul>
          <li>
            <span>Max</span>
            <span>Max@gmail.com</span>
          </li>
          <li>
            <span>Выйти</span>
            <span><LogoutSvg /></span>
          </li>
        </motion.ul>)}
      </AnimatePresence>
    </div>
  );
}
 
ProfileDropdown.displayName = 'ProfileDropdown'