import React, {useState} from 'react';
import {TestComp} from 'be_smile_v_test-lib'

function App() {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div>
            <TestComp label={'test'} active={active}/>
            <button onClick={() => setActive(prevState => !prevState)}>enable</button>
        </div>
    );
}

export default App;
