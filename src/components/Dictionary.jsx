import React, { useEffect, useState } from 'react'
import usePrevious from '../customhook/Useprevious';

const Dictionary = () => {
    const [data, setdata] = useState([]);
    const [input, setinput] = useState("");
    const [error, setError] = useState(null);
    const data1 = useState(["hoho"])

    const olddata = usePrevious(data)

    useEffect(() => {
        if (!input) {
            setdata([]);
            return;
        }

        const time = setTimeout(async () => {
            try {
                setError(null);
                const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
                const item = await res.json();
                if (!res.ok) {
                    setdata([]);
                    setError(item);
                    return;
                }
                setdata(item);
                data1[1](item)
            } catch (error) {
                console.error(error)
                setError({ title: "Network Error", message: error.message });
                setdata([]);
            }
        }, 500);

        return () => clearTimeout(time);
    }, [input]);

    return (
        <>
            <input type="text"
                value={input}
                onChange={(e) => setinput(e.target.value)

                }

            />
            <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '20px auto', color: '#333' }}>
                {!error && data?.map((entry, index) => (
                    <div key={index} style={{ marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>


                        <header style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                            <h1 style={{ fontSize: '3rem', margin: 0, color: '#111' }}>{entry.word}</h1>
                            <span style={{ fontSize: '1.2rem', color: '#a344b7', fontWeight: '500' }}>
                                {entry.phonetic}
                            </span>
                        </header>

                        {entry.meanings.map((meaning, mIdx) => (
                            <section key={mIdx} style={{ marginTop: '25px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                    <i style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '1.1rem' }}>
                                        {meaning.partOfSpeech}
                                    </i>
                                    <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid #ddd' }} />
                                </div>

                                <h3 style={{ color: '#757575', fontSize: '1rem', marginBottom: '10px' }}>Meaning</h3>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                                    {meaning.definitions.map((def, dIdx) => (
                                        <li key={dIdx} style={{ marginBottom: '12px', color: '#444' }}>
                                            {def.definition}
                                            {def.example && (
                                                <p style={{ color: '#757575', marginTop: '5px', fontSize: '0.9rem' }}>
                                                    "{def.example}"
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                {meaning.synonyms.length > 0 && (
                                    <p style={{ fontSize: '0.9rem' }}>
                                        <span style={{ color: '#757575', marginRight: '10px' }}>Synonyms</span>
                                        <span style={{ color: '#a344b7', fontWeight: 'bold' }}>
                                            {meaning.synonyms.join(', ')}
                                        </span>
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>
                ))}
                {error && (
                    <div style={{ color: 'red', marginTop: '20px' }}>
                        <h3>{error.title}</h3>
                        <p>{error.message}</p>
                        <small>{error.resolution}</small>
                    </div>
                )}
            </div>
        </>
    )
}

export default Dictionary