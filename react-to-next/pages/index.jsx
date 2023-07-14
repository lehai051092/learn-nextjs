import {useState} from 'react';

function Header({title}) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="Develop. Preview. Ship. 🚀"/>
            <ul>
                {
                    names.map((name, key) => (
                        <li key={key}>{name}</li>
                    ))
                }
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}