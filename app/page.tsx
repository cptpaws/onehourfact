import prisma from '../backend/prisma';
import styles from './fact.module.css';

export const revalidate = 3600;

export default async function Home() {
    const fact = await prisma.fact.findFirst();

    if (!fact) {
        return null;
    }

    return (
        <main className={styles.container}>
            <article className={styles.quote}>
                {fact.content}
                <div className={styles.author}>- {fact.author ?? 'Unknown author'}</div>
            </article>
        </main>
    );
}
