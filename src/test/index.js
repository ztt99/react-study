import React, { useContext, useCallback, useState } from 'react'

// const ctx = React.createContext()
// function Child(){
//     const value = useContext(ctx)
//     return <div>{value}</div>
// }

// function Parent(){
//     return (
//         <ctx.Provider value='zt'>
//             <Child/>
//         </ctx.Provider>
//     )
// }


// function Child(props) {
//     console.log('change Child');
//     return (
//         <>
//             <div>{props.text}</div>
//             <button onClick={props.handleClick}>修改text</button>
//         </>
//     )
// }

class Child extends React.PureComponent {
    render() {
        return (
            <>
                <div>{this.props.text}</div>
                <button onClick={this.props.handleClick}>修改text</button>
            </>
        )
    }
}

function Parent() {
    console.log('change Parent');

    const [txt, setText] = useState('test')
    const [n, setN] = useState(0)
    const handleClick = useCallback(()=>{
        setText(Math.random())
    },[])
    return (
        <>
            <Child text={txt} handleClick={handleClick}/>
            <input type='number' value={n} onChange={e => {
                setN(+e.target.value)
            }}></input>
        </>
    )
}

export default Parent
