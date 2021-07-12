import styles from './Mobile.module.css'

function Mobileos({name,type}){
    var listStyle = type == "os"? styles.list1:styles.list2
    return (
        <div>
            
            <ul className={listStyle}>
                <li>{name[0]}</li>
                <li>{name[1]}</li>
                <li>{name[2]}</li>
                <li>{name[3]}</li>
            </ul>
        </div>
    )
}
export default Mobileos