import styles from './styles.module.css'
export default function Video() {
    return(
        <>
            <div className={styles.video}>
                <img src="/images/video/portada/deditos.jpg" alt=""/>

                <div className={styles.play}>
                    <i className='bx bx-play'></i>
                </div>
            </div>
        </>
    )
}