import React, { useState } from "react";

export default function States() {
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState(null);

    function handleInputChange(e) {
        const value = e.target.value;
        setInputValue(value);

        if (value.length < 5) {
            setInputError("Input must be at least 5 characters long");
        } else {
            setInputError(null);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.length < 5) {
            setInputError("Input must be at least 5 characters long"); return;
        }
        console.log("Submitted value:", inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Fruit:</p>
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            {inputError && <div style={{ color: "red" }}>{inputError}</div>}
            <button type="submit">Submit</button>
        </form>
    );

};
