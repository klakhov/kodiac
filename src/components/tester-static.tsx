import React from "react"

interface Props {
    id: number
}

export default function TesterStatic(props: Props): JSX.Element {
    const { id } = props;
    return (
        <div>
            Hello im static tester #{id}
        </div>
    )
}