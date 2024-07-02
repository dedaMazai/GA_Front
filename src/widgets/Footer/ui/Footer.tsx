import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import ArrowDown from '@/shared/assets/icons/ArrowDown.svg';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Telegram from '@/shared/assets/icons/Telegram.svg';
import Logo from '@/shared/assets/icons/Logo.svg';
import Email from '@/shared/assets/icons/Email.svg';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { redirectToWebsite } from '@/shared/lib/redirectToWebsite/redirectToWebsite';

import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <VStack gap="16" max>
                <HStack max gap="16" wrap="wrap" justify='between'>
                    <VStack gap="8">
                        <Typography
                            bold
                            title={t('Один инструмент для всей вашей команды, присоединяйтесь прямо сейчас!')}
                            wrap
                        />
                    </VStack>
                    <Button
                        color='green'
                        jump
                        onClick={() => redirectToWebsite('https://t.me/sl0max')}
                    >
                        {t('Telegram')}
                    </Button>
                </HStack>
                <hr />
                <HStack max justify='between' align='start'>
                    <VStack gap="16">
                        <Button
                            variant="clear"
                            onClick={() => navigate(RoutePath.MAIN())}
                        >
                            <Icon Svg={Logo} className={cls.iconLogo} />
                            <Typography text={t('GainAD')} variant="green" bold size='l'/>
                        </Button>
                        <HStack gap="16" max justify='center'>
                            <Button
                                circle
                                onClick={() => redirectToWebsite('https://t.me/sl0max')}
                            >
                                <Icon Svg={Telegram} className={cls.icons} />
                            </Button>
                            <Button
                                circle
                                onClick={() => redirectToWebsite('https://wa.me/+79689847645')}
                            >
                                <Icon Svg={Email} className={cls.icons} />
                            </Button>
                        </HStack>
                    </VStack>
                </HStack>
                <hr />
            </VStack>
            <Typography
                align='center'
                variant="gray"
                text={t('Copyrights © 2023 GainAd')}
            />
        </footer>
    );
};
