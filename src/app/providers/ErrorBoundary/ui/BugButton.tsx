import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}

export const BugButton: FC<BugButtonProps> = ({ className }) => {
    const [error, setError] = useState(false);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    const handleSetError = () => {
        setError(true);
    };
    const { t } = useTranslation();
    return (
        <button type="button" onClick={handleSetError}>
            {t('Throw error')}
        </button>
    );
};
