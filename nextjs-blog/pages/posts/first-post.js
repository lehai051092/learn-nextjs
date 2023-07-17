import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost () {
    return (
        <Layout>
            {/*Modify meta*/}
            <Head>
                <title>First Post</title>
            </Head>
            {/*Load third party*/}
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <div>
                    {/*Optimize image*/}
                    <Image src="/images/profile.jpg" height={144} width={144} alt="Profile"/>
                </div>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}