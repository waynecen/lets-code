import styles from "./pianokey.module.scss";
import { pianoKeyData } from "../data/pianoKeyData";
import ConditionalWrapper from "./ConditionalWrapper";

export default function PianoKey() {
	const pianoKeys = pianoKeyData.map((key, index) => {
		return (
			<ConditionalWrapper
				key={index}
				condition={key.isColor}
				wrapper={(children) => <div className={styles.wrapper}>{children}</div>}
			>
				<div
					className={key.isColor ? styles.colorKey : styles.blackKey}
					style={{ backgroundColor: key.backgroundColor }}
				>
					<p className={styles.letterBox}>{key.letter}</p>
				</div>
			</ConditionalWrapper>
		);
	});
	return pianoKeys;
}
