import { useState } from "react"
import happyEmoji from './assets/HappyEmoji.jpg'
import sadEmoji from './assets/SadEmoji.jpg'

function EmojiButton () {
    let Emojis = [happyEmoji,sadEmoji]
    let [emojiState,setEmojiState] = useState(1)
    let emojiHandler = () => {
    emojiState === 1 ? setEmojiState(0) : setEmojiState(1)
    }
    return (
        <>
        <button onClick={emojiHandler}>Click Me!</button>
        <img src={Emojis[emojiState]}></img>
        </>
    )
}

export default EmojiButton