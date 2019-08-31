import React from 'react';

function InputForm(props) {
    const myRef = React.createRef();
    function handleSubmit(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        props.onChangeAmount(myRef.current.value);
    }

    return (
        <div className="input-form">
            <div className="title">Welcome to ATM</div>
            <form onSubmit={handleSubmit}>
                <p>
                    <div>Enter the Amount</div>
                    <input type="number" ref={myRef}/>
                </p>
                <input type="submit" value="Get Money"/>
            </form>
        </div>
    )
}

export default InputForm;
