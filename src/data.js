import {v4} from "uuid";

const toDoListData = [
    {
        id: v4(),
        name: 'Learn more about React',
        //completed: true
    },
    {
        id: v4(),
        name: 'Write a new Component',
        //completed: false
    },
    {
        id: v4(),
        name: 'Add some style',
        //completed: false
    },
    {
        id: v4(),
        name: 'Killing the CSS game',
        //completed: true
    }
];

module.exports = toDoListData;