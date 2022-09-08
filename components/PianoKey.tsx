import styles from "./pianokey.module.scss";
import { pianoKeyData } from "../data/pianoKeyData";
import ConditionalWrapper from "./ConditionalWrapper";
import useSound from "use-sound";

export default function PianoKey() {
	const pianoKeys = pianoKeyData.map((key) => {
		const [play] = useSound(`/music/${key.audioSource}`);

		return (
			<ConditionalWrapper
				key={key.id}
				condition={key.isColor}
				wrapper={(children) => <div className={styles.wrapper}>{children}</div>}
			>
				<div
					className={key.isColor ? styles.colorKey : styles.blackKey}
					style={{ backgroundColor: key.backgroundColor }}
					onClick={play}
				>
					<p className={key.isColor ? styles.letterBox : styles.blackLetterBox}>
						{key.letter}
					</p>
				</div>
			</ConditionalWrapper>
		);
	});
	return pianoKeys;
}
