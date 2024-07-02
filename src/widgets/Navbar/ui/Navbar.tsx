import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData, userActions } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import Logo from '@/shared/assets/icons/Logo.svg';
import Folder from '@/shared/assets/icons/Folder.svg';
import Sms from '@/shared/assets/icons/Sms.svg';
import Menu from '@/shared/assets/icons/Menu.svg';
import { Icon } from '@/shared/ui/Icon';
import { Typography } from '@/shared/ui/Text';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { LangSwitcher } from '@/features/LangSwitcher';
import { SearchOnSite } from '@/features/SearchOnSite';
import { Dropdown } from '@/shared/ui/Dropdown';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Suport from '@/shared/assets/icons/Suport.svg';
import Cart from '@/shared/assets/icons/Cart.svg';
import Upload from '@/shared/assets/icons/Upload.svg';
import { Drawer } from '@/shared/ui/Drawer';
import Settings from '@/shared/assets/icons/Settings.svg';
import { Progress } from '@/shared/ui/Progress/Progress';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import cls from './Navbar.module.scss';
import { useGetUserInfoQuery } from '@/entities/User/api/userApi';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPerson, setIsOpenPerson] = useState(false);

    const { data: userInfo, isLoading: userInfoLoading } = useGetUserInfoQuery();

    const handleLogout = () => {
        dispatch(userActions.logout());
    }

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenDrawerPerson = useCallback(() => {
        setIsOpenPerson(true);
    }, []);

    const onCloseDrawerPerson = useCallback(() => {
        setIsOpenPerson(false);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Dropdown
                    gap
                    trigger={(
                        <div className={cls.circle}>
                            <Icon Svg={Settings} className={cls.circleSettings} />
                            {/* <Typography title="A" variant="white" bold /> */}
                        </div>
                    )}
                    items={[
                        {
                            content: t('Настройки'),
                            onClick: () => navigate(RoutePath.SETTINGS()),
                        },
                        {
                            content: t('Выйти'),
                            onClick: handleLogout,
                        }
                    ]}
                    direction="bottom left"
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <HStack justify='between' max gap="16">
                <HStack gap="16">
                    <Button
                        variant="clear"
                        onClick={() => navigate(RoutePath.MAIN())}
                    >
                        <Icon Svg={Logo} className={cls.iconLogo} />
                        <Typography text={t('GainAD')} variant="green" bold size='l' />
                    </Button>
                    <LangSwitcher short />
                </HStack>
                <HStack gap="8">
                    <Button
                        color='grey'
                        circle
                        jump
                        onClick={() => navigate(RoutePath.LOGIN())}
                    >
                        {t('Войти')}
                    </Button>
                </HStack>
            </HStack>
        </header>
    );
});
