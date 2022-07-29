import React, { useEffect, useState } from 'react';

const UnmountText = () => {

    useEffect(() => {
        console.log("Mount!");

        return () => {
            //Unmount 시점에 실행되게 됨 
            console.log("UnMount!");
        }
    }, [])

    return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);

    //첫 마운트 됐을떄만. 
    useEffect(() => {
        console.log("Mount!");
    }, []);

    // State Update순간 리렌더링 
    useEffect(() => {
        console.log("Update!");
    });
    // count state가 변화하는 순간 
    useEffect(() => {
        console.log(`count is update: ${count}`);
        if (count > 5) {
            alert("count가 5를 넘었습니다. 1로 초기화 ");
            setCount(1);
        }
    }, [count])

    useEffect(() => {
        console.log(`text is update ${text}`)
    }, [text])


    return <div style={{ padding: 20 }} >
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountText />}
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    </ div>
}

export default Lifecycle;
