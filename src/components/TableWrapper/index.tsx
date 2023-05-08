import React from "react"
import styles from "./styles.module.css"

export default function TableWrapper(props): JSX.Element {
	return (
		<div className={styles.wrapper}>
			
			<div className={styles.colWrapper}>
					<span> cols = {props.cols}</span>
				</div>
			<div className={styles.mainRowWrapper}>
				<div className={styles.rowWrapper}>
					<span> rows = {props.rows}</span>
				</div>
				<div>{props.children}</div>
			</div>
		</div>
	)
}
