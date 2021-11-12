import React, {Fragment, useState} from 'react';
import GlobalStyle from "../styles/globalStyles";
import Content from "./Content";
import TodoListData from "../data";



function App () {

    //useState to create to-do item
    const [todoText, setTodoText] = useState("")

    //useState to create todo status
    const [state, setState] = useState({
        "todo": {
            title: "Todo",
            items: {TodoListData}
        },
        "in-progress": {
            title: "In Progress",
            items: []
        },
        "done": {
            title: "Completed",
            items: []
        }
    })

    return (
        <Fragment>
            <GlobalStyle>
                <Content />
            </GlobalStyle>
        </Fragment>
    )
}

