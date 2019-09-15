import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { isEnv } from '@config';

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
// 发送ajax请求，请求translation.json （国际化语言包）
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // 选择用户的语言（通过某种方式来选择当前的默认语言）
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: isEnv,

        interpolation: {
            escapeValue: false, // 不需要要转义，因为react默认已经做了转义
        },
    });
/*
*   国际化
*    1. 定义当前index文件
*    2.在根目录的index文件中引入国际化（即i8n文件夹）
*    3.定义语言包
*    4.用国际化App必须包一个<Suspense></Suspense>
*    5.需要用时引入withTranslation  @withTranslation()
*
* */






export default i18n;