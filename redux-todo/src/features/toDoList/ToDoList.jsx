import { useDispatch, useSelector } from "react-redux";
import BasicCard from "../../components/BasicCard";
import randomFutureDate from "../../util/randomFutureDate";
import { toDoListActions } from "./toDoListSlice";

export default function ToDoList() {
    const dispatch = useDispatch();

    const toDoList = useSelector((state) => state.toDoList);

    const createHandler = () => {
        dispatch(
            toDoListActions.create({
                key: toDoList.toDoList.length + 1,
                date: randomFutureDate().toLocaleString(),
                msg: `Test message #${toDoList.toDoList.length + 1}.`,
            })
        );
    };

    return (
        <div>
            <button onClick={createHandler}>Create New</button>
            <hr></hr>
            {toDoList.toDoList.map((toDo) => (
                <BasicCard key={toDo.key} date={toDo.date} msg={toDo.msg} />
            ))}
        </div>
    );
}
