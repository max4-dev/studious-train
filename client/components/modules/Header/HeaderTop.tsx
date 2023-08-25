'use client'

import CityButton from '@/components/elements/CityButton/CityButton';
import { $mode } from '@/context/mode';
import styles from '@/styles/header/header.module.scss'
import { useStore } from 'effector-react';
import Link from 'next/link';
import { ProfileDropdown } from './ProfileDropdown';
import { withClickOutside } from '@/utils/withClickOutside';

const HeaderTop = () => {
  const mode = useStore($mode);
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : '';

  return (
    <div className={styles.header__top}>
      <div className={`container ${styles.header__top__container}`}>
        <CityButton />
        <nav
          className={`${styles.header__nav}`}
        >
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link className={`${styles.header__nav__list__item__link} ${darkModeClass}`} href="/shipping-payment" passHref legacyBehavior>
                  Доставка и оплата
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={`${styles.header__nav__list__item__link} ${darkModeClass}`} href="/about" passHref legacyBehavior>
                О компании
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={`${styles.header__nav__list__item__link} ${darkModeClass}`} href="/catalog" passHref legacyBehavior>
                Каталог
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={`${styles.header__nav__list__item__link} ${darkModeClass}`} href="/contacts" passHref legacyBehavior>
                Контакты
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                href="/wholesale-buyers"
                passHref
                legacyBehavior
              >
                Оптовым покупателям
              </Link>
            </li>
          </ul>
        </nav>
        {/* {withClickOutside(<ProfileDropdown) />} */}
      </div>
    </div>
  );
}
 
export default HeaderTop;