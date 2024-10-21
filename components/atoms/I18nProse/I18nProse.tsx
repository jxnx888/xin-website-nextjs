'use client'
import { useTranslation } from 'react-i18next';

type I18nProseProps = {
  value: string, nameSpace?: string
}
export const I18NProse = ({
                            value, nameSpace = 'common'
                          }: I18nProseProps) => {
  const {t} = useTranslation(nameSpace);
  return t(value);
};
