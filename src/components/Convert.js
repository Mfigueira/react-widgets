import { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [debouncedText, setDebouncedText] = useState(text);
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      setTranslated('');
      setDebouncedText('');
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    if (!debouncedText) return;

    (async () => {
      try {
        const res = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            },
          }
        );

        if (res.status !== 200) throw new Error(res.statusText);

        const { translatedText } = res.data.data.translations[0];
        setTranslated(translatedText);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [debouncedText, language.value]);

  return (
    <div>
      {!!translated && <h1 className="ui header">{translated}</h1>}
      {!translated && (
        <h1 className="ui header">Enter text to translate! :)</h1>
      )}
    </div>
  );
};

export default Convert;
