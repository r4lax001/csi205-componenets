import { useState, useEffect } from "react";

const mockTodos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Todo item ${i + 1}`,
    completed: Math.random() > 0.5
}));

const initialData = mockTodos.map((t) => ({
    id: t.id,
    title: t.title,
    status: t.completed ? "done" : "waiting",
}));

function Todo() {
    const [todos, setTodos] = useState([]);
    const [showOnlyWaiting, setShowOnlyWaiting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setTodos(initialData);
    }, []);

    const filteredTodos = showOnlyWaiting
        ? todos.filter((t) => t.status === "waiting")
        : todos;

    const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentTodos = filteredTodos.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    useEffect(() => {
        if (page > totalPages && totalPages > 0) {
            setPage(totalPages);
        } else if (totalPages === 0 && todos.length > 0) {
            setPage(1);
        }
    }, [page, totalPages, todos.length]);


    const toggleStatus = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        status: todo.status === "waiting" ? "done" : "waiting",
                    }
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = () => {
        if (newTitle.trim() === "") return;
        
        const newTodo = {
            id: Date.now(),
            title: newTitle,
            status: "waiting",
        };

        setTodos([newTodo, ...todos]);
        setShowModal(false);
        setNewTitle("");
        
        setPage(1); 
        if (showOnlyWaiting) {
            setShowOnlyWaiting(false);
        }
    };

    return (
        <div className="mt-10 mb-20">
            <div className="max-w-[1050px] mx-auto">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 border-2 border-zinc-500 rounded-2xl shadow-lg p-6 mb-6">
                    
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={showOnlyWaiting}
                                    onChange={() => {
                                        setShowOnlyWaiting(!showOnlyWaiting);
                                        setPage(1);
                                    }}
                                />
                                <div className="w-14 h-7 bg-slate-300 rounded-full peer-checked:bg-green-500 transition-colors"></div>
                                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7 shadow-md"></div>
                            </div>
                            <span className="text-white font-medium">
                                Show only <span className="inline-flex items-center mx-2 gap-1 bg-white text-black px-2 py-1 rounded-md text-sm font-semibold">waiting</span>
                            </span>
                        </label>

                        <select
                            className="px-4 py-2 border-2 border-slate-300 rounded-lg bg-white text-black font-medium focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(Number(e.target.value));
                                setPage(1);
                            }}
                        >
                            <option value={5}>5 items per page</option>
                            <option value={10}>10 items per page</option>
                            <option value={50}>50 items per page</option>
                            <option value={100}>100 items per page</option>
                        </select>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-br from-zinc-800 to-zinc-700 border-2 border-zinc-500 text-white">
                                    <th className="px-6 py-4 text-left font-semibold w-24">ID</th>
                                    <th className="px-6 py-4 text-left font-semibold">Title</th>
                                    <th className="px-6 py-4 text-right font-semibold">
                                        <div className="flex items-center justify-between">
                                            <span>Actions</span>
                                            <button
                                                className="ml-4 bg-zinc-500 hover:bg-zinc-600 text-black font-bold w-8 h-8 rounded-lg transition-colors shadow-md flex items-center justify-center"
                                                onClick={() => setShowModal(true)}
                                                title="Add New Todo"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTodos.map((todo, index) => (
                                    <tr 
                                        key={todo.id}
                                        className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                                            index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                                        }`}
                                    >
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center justify-center bg-slate-200 text-slate-700 font-semibold px-3 py-1 rounded-md text-sm">
                                                {todo.id.toString().slice(-6)} 
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-700">{todo.title}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-sm min-w-[100px] text-center ${ 
                                                        todo.status === "waiting"
                                                            ? "bg-amber-500 hover:bg-amber-600 text-white"
                                                            : "bg-green-500 hover:bg-green-600 text-white"
                                                    }`}
                                                    onClick={() => toggleStatus(todo.id)}
                                                >
                                                    {todo.status === "waiting" ? "⏳ Waiting" : "✓ Done"}
                                                </button>
                                                <button
                                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-sm"
                                                    onClick={() => deleteTodo(todo.id)}
                                                    title="Delete Todo"
                                                >
                                                    🗑
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredTodos.length === 0 && (
                        <div className="text-center p-10 text-slate-500 font-medium">
                            {todos.length === 0 ? "Loading data..." : "No items match your filter."}
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="bg-slate-50 px-6 py-4 flex items-center justify-center flex-wrap gap-2 border-t border-slate-200">
                            <button
                                className="px-4 py-2 rounded-lg border-2 border-zinc-500 text-zinc-500 font-medium hover:bg-zinc-500 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                onClick={() => setPage(1)}
                                disabled={page === 1}
                            >
                                First
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg border-2 border-zinc-500 text-zinc-500 font-medium hover:bg-zinc-500 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 font-semibold text-slate-700 bg-white rounded-lg border-2 border-slate-300">
                                Page {page} / {totalPages}
                            </span>
                            <button
                                className="px-4 py-2 rounded-lg border-2 border-zinc-500 text-zinc-500 font-medium hover:bg-zinc-500 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg border-2 border-zinc-500 text-zinc-500 font-medium hover:bg-zinc-500 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                onClick={() => setPage(totalPages)}
                                disabled={page === totalPages}
                            >
                                Last
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-800">Add New Todo</h2>
                            <button
                                className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-6">
                            <label className="block text-slate-700 font-semibold mb-2">Title:</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border-2 border-slate-300 text-black rounded-lg "
                                placeholder="Type your todo title here..."
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                                autoFocus
                            />
                        </div>
                        <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200">
                            <button
                                className="px-6 py-2 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                                onClick={addTodo}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todo;

