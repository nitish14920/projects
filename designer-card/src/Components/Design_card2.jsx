import styles from './Design_card2.module.css'
import { Card2_div } from './Card2_div'
export function Design_card2 ({data,skills}){
    return (
        <div className={styles.card}>
            <div className={styles.pro}>PRO</div>
            <img className={styles.img} src="https://64.media.tumblr.com/2d8514363c00651c0d751003cb19e320/3f66dfaf57028d7d-73/s1280x1920/3d71cca4d6ae8cd445458b87de49b58cef6ea772.jpg" alt="" />
            <div className={styles.details}>
                <h1>{data.name}</h1>
                <p>{data.about}</p>
                
            </div>
            <Card2_div skills = {skills[0]}/>
            <Card2_div skills = {skills[1]}/>
            <Card2_div skills = {skills[2]}/>
            
        </div>
    )
}