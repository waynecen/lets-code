import styles from "./pianokey.module.scss";
import { pianoKeyData } from "../data/pianoKeyData";
import ConditionalWrapper from "./ConditionalWrapper";
import useSound from "use-sound";
import { useEffect } from "react";

export default function PianoKey() {
	const pianoKeys = pianoKeyData.map((key) => {
		const handleKeyDown = (e) => {
			if (e.key === key.letter) {
				play();
			}
		};

		const [play] = useSound(`/music/${key.audioSource}`, {
			volume: 0.7,
			playbackRate: 0.7,
			interrupt: true,
		});

		useEffect(() => {
			document.addEventListener("keydown", handleKeyDown, true);
		}, [play]);

		return (
			<ConditionalWrapper
				key={key.id}
				condition={key.isColor}
				wrapper={(children) => <div className={styles.wrapper}>{children}</div>}
			>
				<div
					style={{ backgroundColor: key.backgroundColor }}
					className={`${key.isColor ? styles.colorKey : styles.blackKey}`}
					onClick={play}
				>
					<p className={`${styles.letterBox} ${key.isColor ? "" : styles.black}`}>
						{key.letter}
					</p>
				</div>
			</ConditionalWrapper>
		);
	});
	return pianoKeys;
}
