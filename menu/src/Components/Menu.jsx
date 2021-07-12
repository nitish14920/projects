import styles from './Menu.module.css'

export function Menu({name,col}){
    var div_color = styles[col]

    return (

        <div className={div_color}>{name}</div>

        )
}