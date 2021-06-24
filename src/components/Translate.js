import React, {useState} from 'react'
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
      label: 'French',
      value: 'fr',
    },
    {
      label: 'Japanese',
      value: 'ja',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
    {
      label: 'Spanish ',
      value: 'es',
    },
    {
        label: 'Chinese',
        value: 'zh',
      },
  ];

const Translate = () => {
    const [text, setText] = useState('')
    const [lang, setLang] = useState(options[0])

    return (
        <div>
          <div className="ui form">
            <div className="field">
              <label>Enter Text</label>
              <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
          </div>
          <Dropdown
            label="Select a Language"
            setLang={setLang}
            selected={lang}
            options = {options}

          />
          <hr />
          <h3 className="ui header">Output</h3>
          <Convert text={text} language={lang} />
        </div>
      );
}

export default Translate
