import styles from './Design_card.module.css'

export function Design_card({data,skills}){
    return (
        <div className={styles.card}>
            <div className={styles.pro}>PRO</div>
            <img className={styles.img} src="https://64.media.tumblr.com/2d8514363c00651c0d751003cb19e320/3f66dfaf57028d7d-73/s1280x1920/3d71cca4d6ae8cd445458b87de49b58cef6ea772.jpg" alt="" />
            <div className={styles.details}>
                <h2>{data.name}</h2>
                <p>{data.city}</p>
                <p>{data.designation}</p>
            </div>
            
            <div className={styles.btn}>
                <button>Message</button>
                <button>Following</button>
            </div>
            <div id={styles.skill_div}>
                {
                    skills.map((el)=>(
                        <span className={styles.skills}>{el}</span>
                    ))
                }
            </div>
        </div>
    )
}