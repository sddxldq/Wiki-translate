import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Convert = ({text,language}) => {
    const [debouncedText, setDebouncedText] = useState(text)
    const [translated, setTranslated] = useState('')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000);
        console.log(debouncedText)
        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        // if (debouncedText) return null;

        const doTranslation = async()=>{
            const{data}=await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
                }
            )
            setTranslated(data.data.translations[0].translatedText)
        }
        doTranslation()
    }, [language,debouncedText])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert
