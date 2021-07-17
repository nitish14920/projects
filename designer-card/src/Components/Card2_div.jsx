import styles from './Design_card2.module.css'
export function Card2_div({skills}){
    return (
            <div id={styles.skill_div}>
                <img className={styles.card2_img} src={skills.img} alt="" />
                <div className={styles.coin_div}>
                    <h2>{skills.title}</h2>
                    <p>{skills.subtitle}</p>
                </div>
                <div className={styles.qrcode_div}>
                    <span>{skills.address}</span>
                    <span>{skills.QRcode}</span>
                </div>
            </div>
    )
}