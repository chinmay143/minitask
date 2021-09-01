import React, { Component } from "react"

export default class button extends Component {
    render()
    {
        let {title,task} = this.props;
        return(
            <button onClick = {task}>
                {title}
            </button>
        )
    }
}

