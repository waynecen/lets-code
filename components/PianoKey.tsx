/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./pianokey.module.scss";
import { pianoKeyData } from "../data/pianoKeyData";
import ConditionalWrapper from "./ConditionalWrapper";
import useSound from "use-sound";
import { useEffect, useCallback } from "react";

export default function PianoKey(): any {
	const pianoKeys = pianoKeyData.map((key) => {
		const [play] = useSound(`/music${key.audioSource}`, {
			volume: 0.5,
			playbackRate: 0.7,
			interrupt: true,
		});

		const handleKeyDown = useCallback(
			(e: any) => {
				if (e.key === key.letter) {
					play();
				}
			},
			[key.letter, play]
		);

		useEffect(() => {
			document.addEventListener("keydown", handleKeyDown, true);
			return () => {
				document.removeEventListener("keydown", handleKeyDown, true);
			};
		}, [handleKeyDown]);

		return (
			<ConditionalWrapper
				key={key.id}
				condition={key.isColor}
				wrapper={(children: any) => (
					<div className={styles.wrapper}>{children}</div>
				)}
			>
				<div
					style={{ backgroundColor: key.backgroundColor }}
					className={`${key.isColor ? styles.colorKey : styles.blackKey}`}
					onClick={() => play()}
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
