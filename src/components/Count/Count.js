import { observer } from "mobx-react";
import { action } from "mobx";
import React from "react";

export const Count = observer((props) => {
    const add2 = action(() => {
        props.store.a += 111;
        props.store.b += 111;
    });
    return (
        <div>
            <div>{props.store.a}</div>
            <div>{props.store.b}</div>
            <div>{props.store.ab}</div>
            <button onClick={() => props.store.add()}>按钮</button>
            <button onClick={add2}>按钮2</button>
        </div>
    )
});
