import { useEffect } from "react";
import { getTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { ALL, ACTIVE, COMPLETED } from "../redux/actions/type";
import Todo from "./Todo";
import Tabs from "./Tabs";

const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getTodos());
    } , []);

    const filtertodos = () => {
        if (currentTab === ALL) {
            return todos;
        }
        else if (currentTab === ACTIVE) {
            return todos.filter((todo) => !todo.done);
        }
        else if (currentTab === COMPLETED) {
            return todos.filter((todo) => todo.done);
        }
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
            </div>
            <ul>
                {
                    filtertodos().map((todo) => (
                        <Todo 
                            id={todo.id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    );
}

export default Todos;
