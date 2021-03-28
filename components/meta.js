import Head from 'next/head';

const Meta = ({ question }) => {
    return (
        <Head>
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#000000"
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#000" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <title>{question}</title>
            <meta
                name="description"
                content={question}
            />
        </Head>
    );
};

export default Meta;
