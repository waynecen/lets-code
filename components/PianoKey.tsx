import useSound from 'use-sound'
import { pianoKeyData } from '../data/pianoKeyData'
import styles from '../styles/components/pianokey.module.scss'
import useKeyboardBindings from '../utils/useKeyboardBindings'
import ConditionalWrapper from './ConditionalWrapper'

export default function PianoKey(): any {
  const soundUrl = '/music/lets-code-sprite.mp3'

  const [play] = useSound(soundUrl, {
    sprite: {
      elevator: [0, 1968],
      jingle: [2000, 1768],
      jingleTwo: [4000, 1795],
      jingleThree: [6000, 2299],
      spyOne: [9000, 1929],
      spyTwo: [11000, 2418],
      jujutsu: [14000, 15419],
    },
    volume: 0.8,
    playbackRate: 0.8,
    interrupt: true,
  })

  useKeyboardBindings({
    m: () => play({ id: 'elevator' }),
    u: () => play({ id: 'jingle' }),
    b: () => play({ id: 'jingleTwo' }),
    a: () => play({ id: 'jingleThree' }),
    s: () => play({ id: 'spyOne' }),
    i: () => play({ id: 'spyTwo' }),
    c: () => play({ id: 'jujutsu' }),
  })

  const pianoKeys = pianoKeyData.map((key) => {
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
          onClick={() => play({ id: `${key.audioName}` })}
        >
          <p
            className={`${styles.letterBox} ${key.isColor ? '' : styles.black}`}
          >
            {key.letter}
          </p>
        </div>
      </ConditionalWrapper>
    )
  })
  return pianoKeys
}
