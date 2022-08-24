import styles from "./pianokey.module.scss";

export default function PianoKey({ children, color }) {
	return (
		<div className={color ? styles.colorKey : styles.blackKey}>
			<p className={styles.letterBox}>{children}</p>
		</div>
	);
}
