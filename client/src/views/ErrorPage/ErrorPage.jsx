import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    return (
        <section className={styles.error}>
            <h2>Page not found</h2>
            <h2>ERROR:404</h2>
        </section>
    )
}

export default ErrorPage;