import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'

import SideMenu from './SideMenu'
import Fullbody from './Fullbody'

import '../stylesheets/main.scss'
import data from '../data.json'

import entries from 'core-js/fn/object/assign';
if (!Object.entries) {
    Object.entries = entries;
}
//<link rel="preload" href="/static/fonts/montserrat-v14-latin_cyrillic-700.woff2" as="font" type="font/woff2" crossOrigin="true" />
export default () => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="preload" href="/static/fonts/montserrat-v14-latin_cyrillic-300.woff2" as="font" type="font/woff2" crossOrigin="true" />
            <link rel="preload" href="/static/fonts/montserrat-v14-latin_cyrillic-regular.woff2" as="font" type="font/woff2" crossOrigin="true" />
            <link rel="preload" href="/static/fonts/montserrat-v14-latin_cyrillic-500.woff2" as="font" type="font/woff2" crossOrigin="true" />
            <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />

            <title>1SmartMedia - рекламное агентство полного цикла. Реклама в интернете</title>
            <meta name="description" content="SmartMedia - рекламное агентство полного цикла. Все виды рекламы на любой вкус: SEO, SMM, создание сайтов, контекстная реклама, медийная реклама. Звоните: +7 (495) 663-15-15!" />
            <meta name="keywords" content="SmartMedia, рекламное агентство полного цикла, все виды рекламы на любой вкус, SEO, SMM, создание сайтов, контекстная реклама, медийная реклама" />
            <meta property="og:url" content="/static/img/sm_logo_color.png" />
            <meta property="og:title" content="SmartMedia - рекламное агентство полного цикла. Реклама в интернетей" />
            <meta property="og:site_name" content="SmartMedia" />
            <meta property="og:description" content="SmartMedia - рекламное агентство полного цикла. Все виды рекламы на любой вкус: SEO, SMM, создание сайтов, контекстная реклама, медийная реклама. Звоните: +7 (495) 663-15-15!" />
            <meta property="og:image" content="/static/img/sm_logo_color.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="278" />
            <meta property="og:image:height" content="278" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@2wit1" />
            <meta name="twitter:image:alt" content="SmartMedia - рекламное агентство полного цикла. Все виды рекламы на любой вкус: SEO, SMM, создание сайтов, контекстная реклама, медийная реклама. Звоните: +7 (495) 663-15-15!" />
            <meta name="twitter:title" content="SmartMedia" />
            <meta name="twitter:description" content="SmartMedia - рекламное агентство полного цикла. Все виды рекламы на любой вкус: SEO, SMM, создание сайтов, контекстная реклама, медийная реклама. Звоните: +7 (495) 663-15-15!" />
            <meta name="twitter:image" content="/static/img/sm_logo_color.png" />
        </Head>
        <SideMenu />
        <Fullbody />
        <div dangerouslySetInnerHTML={{__html: data.counters}} />
    </div>
)