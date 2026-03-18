import styles from '.styles.module.css';
import { Cycles } from 'lucide-react'


export function Cycles(){
    return(
        <>
            <div className= {styles.cycles}>
                <span>Ciclos: </span>    
            </div> 
            <div className= {styles.cycleDots}>
                <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>   
                    <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>    
                    <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>    
                    <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>    
                    <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>    
                    <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>    
                    <span className = {`
                    ${styles.cycleDot} ${styles.workTime}`}> </span>     
            </div> 
        </>
    )
}