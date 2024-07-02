import { VStack } from '@/shared/ui/Stack';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';


const MainPage = () => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        if (theme === "app_dark_theme") toggleTheme()
    }, [])

    return (
        <VStack align='center' gap="64" max>
            123
        </VStack>
    );
};

export default MainPage;
