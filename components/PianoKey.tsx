import styles from "./pianokey.module.scss";
import { pianoKeyData } from "../data/pianoKeyData.tsx";

export default function PianoKey() {
	const pianoKeys = pianoKeyData.map((key, index) => {
		return key.isColor ? (
			<div
				key={index}
				className={styles.colorKey}
				style={{ backgroundColor: key.backgroundColor }}
			>
				<p className={styles.letterBox}>{key.letter}</p>
			</div>
		) : (
			<div className={styles.wrapper}>
				<div
					key={index}
					className={styles.blackKey}
					style={{ backgroundColor: key.backgroundColor }}
				>
					<p className={styles.letterBox}>{key.letter}</p>
				</div>
			</div>
		);
	});

	return pianoKeys;
}
