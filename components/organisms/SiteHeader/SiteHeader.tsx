import clsx from 'clsx';
import { Link } from '@/components/atoms/Link';
import { Image } from '@/components/atoms/Image';
import { I18NProse } from '@/components/atoms/I18nProse';

import styles from './SiteHeader.module.scss';

export const SiteHeader = () => {
  const menuItems = [
    {
      label: 'HOME',
      link: '/',
    }, {
      label: 'SKILLS',
      link: '/skills',
    }, {
      label: 'PROJECTS',
      link: '/portfolio',
    }, {
      label: 'ABOUT_ME',
      link: '/about',
    }, {
      label: 'CONTACT',
      link: '/contact',
    },
  ];

  return (
    <header className={clsx(styles.header)}>
      <nav className={clsx(styles.nav)}>
        <div className={clsx(styles.left)}>
          <Link
            className={clsx(styles.link, styles.home)}
            href="/"
            variant="unstyled"
            id="logo"
          >
            <span className="visuallyHidden"> <I18NProse value={menuItems?.[0].label}/></span>
            <Image className={clsx(styles.logo)} src="/image/logo.png" alt="Logo" width={75} height={56}/>
          </Link>
        </div>
        <div className={clsx(styles.center)}>
          <ul className={clsx(styles.list, styles.list__primaryDesktop)}>
            {
              menuItems.map(({label, link}) => (
                <Link
                  href={link}
                  title={label}
                  key={label}
                  className={clsx(styles.siteHeaderPrimaryLink, {
                    // [styles.siteHeaderPrimaryLink__current]: isCurrentLink,
                  })}
                >
                  <I18NProse value={label}/>
                </Link>
              ))
            }
          </ul>
        </div>
        <div className={clsx(styles.right)}>
          <div className={clsx(styles.rightFunc)}>
            <div>theme</div>
            <div>switch language</div>
          </div>

        </div>
      </nav>
    </header>
  );
};
