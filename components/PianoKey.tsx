import styles from "./pianokey.module.scss";
import { pianoKeyData } from "../data/pianoKeyData.tsx";

export default function PianoKey() {
	const pianoKeys = pianoKeyData.map((key, index) => {
		return (
			<div
				key={index}
				className={key.isColor ? styles.colorKey : styles.blackKey}
				style={{ backgroundColor: key.backgroundColor }}
			>
				<p className={styles.letterBox}>{key.letter}</p>
			</div>
		);
	});

	return pianoKeys;
}
