import React from "react"

interface Props {
    id: number
}

export default function Tester(props: Props): JSX.Element {
    const { id } = props;
    return (
        <div>
            Hello im tester #{id}
            <button onClick={() => {
                window.alert(`Hello $${id}`);
            }}>Click</button>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </div>
    )
}