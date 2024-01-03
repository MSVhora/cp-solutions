import React from "react"
import styles from "./styles.module.css"

export default function SolutionAuthor({ name }): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <span>Written by {name}</span>
        </div>
    )
}
