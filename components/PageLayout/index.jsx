import Head from 'next/head'

export default function PageLayout({children, title = "NewApp"}){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="New project with next js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
            <style>{`
                header {
                    padding: 20px;
                }
            `}</style>
        </>
    );
}