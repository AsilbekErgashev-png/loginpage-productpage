import Head from "next/head";
import styles from '../styles/signIn.module.css'
import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";
const raleway = Raleway({ weight: "500", subsets: ["latin"] });

export default function signIn() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={raleway.className}>
                <div className={styles['form-div']}>
                    <form className={styles['form']}>
                        <h3>Вход</h3>
                        <div style={{ width: '100%', color: 'gray', fontSize: '12px'}}>
                            <p>Телефон</p>
                            <div style={{ display: 'flex', color: 'gray', width: '100%' }}>
                                <span style={{ marginTop: '10px', fontSize: '16px' }}>+7</span>
                                <input className={styles['loginInp']} type="number" />
                            </div>
                            <hr style={{ width: '100%', backgroundColor: 'gray', top: '0'}} />
                        </div>
                        <button className={styles['form-button']}>ПОЛУЧИТЬ КОД</button>
                        <p className={styles['loginFooter']}><Link className={styles['link']} href='#'>Нажимая на кнопку, вы соглашаетесь </Link>на обработку ваших персональных данных</p>
                        <p>Haven`t account? <Link href='./sign-up'>Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
