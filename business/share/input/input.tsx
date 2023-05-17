import styles from './styles.module.css'

interface Props {
    id: string
    type: string
    placeholder: string
    name: string
    value: string
    onChange: (e: any) => void

}

const Input: React.FC<Props> = ({id,type, placeholder, name, value, onChange}) => {
    return (
        <>
            <input id={id} className={styles.input} type={type} placeholder={placeholder} name={name} value={value}
                   onChange={onChange}/>
        </>
    )
}

export default Input