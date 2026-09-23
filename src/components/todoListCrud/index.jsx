import { useMemo, useState, useEffect } from "react";

import {
    FiCalendar,
    FiCheck,
    FiCheckCircle,
    FiDatabase,
    FiEdit2,
    FiList,
    FiPlus,
    FiSearch,
    FiTag,
    FiTrash2,
    FiX,
} from "react-icons/fi";

import ConfirmModal from "../confirmModal";

import { Styled } from "./styled";

const STORAGE_KEY = "todo-list.v1";

const uid = () =>
    `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;

const todayISO = () => {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const formatDate = (iso) => {
    if (!iso) {
        return "No due date";
    }

    const date = new Date(`${iso}T00:00:00`);

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const daysUntil = (iso) => {
    if (!iso) {
        return null;
    }

    const dueDate = new Date(`${iso}T00:00:00`);

    const today = new Date(`${todayISO()}T00:00:00`);

    return Math.round((dueDate - today) / (1000 * 60 * 60 * 24));
};

const loadTodos = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    } catch {
        return [];
    }
};

const TodoListCrud = () => {
    const [todos, setTodos] = useState(loadTodos);

    const [title, setTitle] = useState("");

    const [category, setCategory] = useState("");

    const [due, setDue] = useState("");

    const [query, setQuery] = useState("");

    const [categoryFilter, setCategoryFilter] = useState("All");

    const [sortBy, setSortBy] = useState("created");

    const [editing, setEditing] = useState(null);

    const [confirm, setConfirm] = useState(null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const openCount = todos.filter((todo) => !todo.done).length;

    const completedCount = todos.filter((todo) => todo.done).length;

    const categories = useMemo(() => {
        const values = new Set(
            todos.map((todo) => todo.category).filter(Boolean),
        );

        return [
            "All",
            ...Array.from(values).sort((a, b) => a.localeCompare(b)),
        ];
    }, [todos]);

    const filteredTodos = useMemo(() => {
        let list = todos;

        if (categoryFilter !== "All") {
            list = list.filter(
                (todo) =>
                    (todo.category || "").toLowerCase() ===
                    categoryFilter.toLowerCase(),
            );
        }

        if (query.trim()) {
            const normalizedQuery = query.trim().toLowerCase();

            list = list.filter(
                (todo) =>
                    todo.title.toLowerCase().includes(normalizedQuery) ||
                    (todo.category || "")
                        .toLowerCase()
                        .includes(normalizedQuery),
            );
        }

        if (sortBy === "dueAsc") {
            return [...list].sort((a, b) =>
                (a.due || "9999-12-31").localeCompare(b.due || "9999-12-31"),
            );
        }

        if (sortBy === "dueDesc") {
            return [...list].sort((a, b) =>
                (b.due || "0000-01-01").localeCompare(a.due || "0000-01-01"),
            );
        }

        return [...list].sort((a, b) => b.createdAt - a.createdAt);
    }, [todos, categoryFilter, query, sortBy]);

    const incompleteVisibleCount = filteredTodos.filter(
        (todo) => !todo.done,
    ).length;

    const askConfirm = (options) => {
        setConfirm({
            title: "Are you sure?",
            message: "",
            confirmText: "Confirm",
            cancelText: "Cancel",
            tone: "default",
            ...options,
        });
    };

    const closeConfirm = () => {
        setConfirm(null);
    };

    const handleConfirm = () => {
        const action = confirm?.onConfirm;

        setConfirm(null);

        if (typeof action === "function") {
            action();
        }
    };

    const addTodo = (event) => {
        event.preventDefault();

        const cleanTitle = title.trim();

        const cleanCategory = category.trim();

        if (!cleanTitle) {
            return;
        }

        const timestamp = Date.now();

        const newTodo = {
            id: uid(),
            title: cleanTitle,
            category: cleanCategory || "",
            due: due || "",
            done: false,
            createdAt: timestamp,
            updatedAt: timestamp,
        };

        setTodos((current) => [newTodo, ...current]);

        setTitle("");
        setCategory("");
        setDue("");
    };

    const toggleDone = (id) => {
        setTodos((current) =>
            current.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          done: !todo.done,
                          updatedAt: Date.now(),
                      }
                    : todo,
            ),
        );
    };

    const removeTodo = (id) => {
        setTodos((current) => current.filter((todo) => todo.id !== id));
    };

    const saveEdit = (id, patch) => {
        setTodos((current) =>
            current.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          ...patch,
                          updatedAt: Date.now(),
                      }
                    : todo,
            ),
        );

        setEditing(null);
    };

    const clearCompleted = () => {
        setTodos((current) => current.filter((todo) => !todo.done));
    };

    const markAllVisibleDone = () => {
        const visibleIds = new Set(filteredTodos.map((todo) => todo.id));

        setTodos((current) =>
            current.map((todo) =>
                visibleIds.has(todo.id)
                    ? {
                          ...todo,
                          done: true,
                          updatedAt: Date.now(),
                      }
                    : todo,
            ),
        );
    };

    return (
        <Styled.Page id="tasks">
            <Styled.Container>
                <Styled.Intro>
                    <div>
                        <Styled.Label>Local Task Manager</Styled.Label>

                        <Styled.Title>
                            Plan tasks.
                            <span>Keep moving.</span>
                        </Styled.Title>

                        <Styled.Subtitle>
                            Create, edit, complete, search, filter and organize
                            tasks directly in your browser.
                        </Styled.Subtitle>
                    </div>

                    <Styled.Stats>
                        <div>
                            <strong>{openCount}</strong>

                            <span>Open</span>
                        </div>

                        <div>
                            <strong>{completedCount}</strong>

                            <span>Done</span>
                        </div>

                        <div>
                            <strong>{todos.length}</strong>

                            <span>Total</span>
                        </div>
                    </Styled.Stats>
                </Styled.Intro>

                <Styled.Card as="form" id="add-task" onSubmit={addTodo}>
                    <Styled.CardHeader>
                        <div>
                            <Styled.SectionLabel>New Task</Styled.SectionLabel>

                            <h2>Add something to your list</h2>
                        </div>

                        <FiPlus aria-hidden="true" />
                    </Styled.CardHeader>

                    <Styled.FormRow>
                        <Styled.Input
                            placeholder="Task title *"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            aria-label="Task title"
                            required
                        />

                        <Styled.Input
                            placeholder="Category"
                            value={category}
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                            aria-label="Category"
                            list="category-suggestions"
                        />

                        <datalist id="category-suggestions">
                            {categories
                                .filter((item) => item !== "All")
                                .map((item) => (
                                    <option key={item} value={item} />
                                ))}
                        </datalist>

                        <Styled.Input
                            type="date"
                            value={due}
                            onChange={(event) => setDue(event.target.value)}
                            aria-label="Due date"
                            min="1900-01-01"
                        />

                        <Styled.PrimaryButton
                            type="submit"
                            disabled={!title.trim()}
                        >
                            <FiPlus aria-hidden="true" />
                            Add Task
                        </Styled.PrimaryButton>
                    </Styled.FormRow>
                </Styled.Card>

                <Styled.Toolbar>
                    <Styled.Filters>
                        <Styled.Field>
                            <FiTag aria-hidden="true" />

                            <Styled.Select
                                value={categoryFilter}
                                onChange={(event) =>
                                    setCategoryFilter(event.target.value)
                                }
                                aria-label="Filter by category"
                            >
                                {categories.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </Styled.Select>
                        </Styled.Field>

                        <Styled.Field>
                            <FiList aria-hidden="true" />

                            <Styled.Select
                                value={sortBy}
                                onChange={(event) =>
                                    setSortBy(event.target.value)
                                }
                                aria-label="Sort tasks"
                            >
                                <option value="created">Newest</option>

                                <option value="dueAsc">
                                    Due date ascending
                                </option>

                                <option value="dueDesc">
                                    Due date descending
                                </option>
                            </Styled.Select>
                        </Styled.Field>

                        <Styled.SearchField>
                            <FiSearch aria-hidden="true" />

                            <input
                                type="search"
                                placeholder="Search tasks..."
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                aria-label="Search tasks"
                            />

                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    aria-label="Clear search"
                                    title="Clear search"
                                >
                                    <FiX aria-hidden="true" />
                                </button>
                            )}
                        </Styled.SearchField>
                    </Styled.Filters>

                    <Styled.BulkActions>
                        <Styled.Button
                            type="button"
                            disabled={incompleteVisibleCount === 0}
                            onClick={() =>
                                askConfirm({
                                    title: "Complete visible tasks?",
                                    message: `Mark ${incompleteVisibleCount} visible task(s) as completed?`,
                                    confirmText: "Complete",
                                    onConfirm: markAllVisibleDone,
                                })
                            }
                        >
                            <FiCheckCircle aria-hidden="true" />
                            Complete visible
                        </Styled.Button>

                        <Styled.DangerButton
                            type="button"
                            disabled={completedCount === 0}
                            onClick={() =>
                                askConfirm({
                                    title: "Clear completed tasks?",
                                    message: `Remove ${completedCount} completed task(s) permanently?`,
                                    confirmText: "Clear",
                                    tone: "danger",
                                    onConfirm: clearCompleted,
                                })
                            }
                        >
                            <FiTrash2 aria-hidden="true" />
                            Clear completed
                        </Styled.DangerButton>
                    </Styled.BulkActions>
                </Styled.Toolbar>

                <Styled.ResultsHeader>
                    <div>
                        <Styled.SectionLabel>Task List</Styled.SectionLabel>

                        <h2>
                            {filteredTodos.length} result
                            {filteredTodos.length === 1 ? "" : "s"}
                        </h2>
                    </div>

                    <span>
                        {categoryFilter === "All"
                            ? "All categories"
                            : categoryFilter}
                    </span>
                </Styled.ResultsHeader>

                <Styled.List>
                    {filteredTodos.length === 0 && (
                        <Styled.Empty>
                            <FiList aria-hidden="true" />

                            <strong>No tasks found</strong>

                            <span>Add a new task or change your filters.</span>
                        </Styled.Empty>
                    )}

                    {filteredTodos.map((item) => {
                        const daysLeft = daysUntil(item.due);

                        const overdue =
                            daysLeft !== null && daysLeft < 0 && !item.done;

                        if (editing === item.id) {
                            return (
                                <EditRow
                                    key={item.id}
                                    item={item}
                                    onCancel={() => setEditing(null)}
                                    onSave={saveEdit}
                                />
                            );
                        }

                        return (
                            <Styled.Item
                                key={item.id}
                                $done={item.done}
                                $overdue={overdue}
                            >
                                <Styled.ItemLeft>
                                    <Styled.CheckboxLabel>
                                        <input
                                            type="checkbox"
                                            checked={item.done}
                                            onChange={() => toggleDone(item.id)}
                                            aria-label={`Mark ${item.title} ${
                                                item.done ? "not done" : "done"
                                            }`}
                                        />

                                        <span>
                                            <FiCheck aria-hidden="true" />
                                        </span>
                                    </Styled.CheckboxLabel>

                                    <Styled.ItemContent>
                                        <Styled.ItemTitle $done={item.done}>
                                            {item.title}
                                        </Styled.ItemTitle>

                                        <Styled.ItemMeta>
                                            <Styled.Tag $muted={!item.category}>
                                                <FiTag aria-hidden="true" />

                                                {item.category
                                                    ? item.category
                                                    : "No category"}
                                            </Styled.Tag>

                                            <span className="date">
                                                <FiCalendar aria-hidden="true" />

                                                {item.due
                                                    ? `Due ${formatDate(
                                                          item.due,
                                                      )}`
                                                    : "No due date"}
                                            </span>

                                            {item.due && !item.done && (
                                                <Styled.DueHint
                                                    $overdue={overdue}
                                                >
                                                    {daysLeft === 0
                                                        ? "Today"
                                                        : daysLeft < 0
                                                          ? `${Math.abs(
                                                                daysLeft,
                                                            )}d overdue`
                                                          : `${daysLeft}d left`}
                                                </Styled.DueHint>
                                            )}
                                        </Styled.ItemMeta>
                                    </Styled.ItemContent>
                                </Styled.ItemLeft>

                                <Styled.ItemActions>
                                    <Styled.IconButton
                                        type="button"
                                        onClick={() => setEditing(item.id)}
                                        aria-label={`Edit ${item.title}`}
                                        title="Edit task"
                                    >
                                        <FiEdit2 aria-hidden="true" />
                                    </Styled.IconButton>

                                    <Styled.DeleteButton
                                        type="button"
                                        onClick={() =>
                                            askConfirm({
                                                title: "Delete task?",
                                                message: `Delete "${item.title}" permanently?`,
                                                confirmText: "Delete",
                                                tone: "danger",
                                                onConfirm: () =>
                                                    removeTodo(item.id),
                                            })
                                        }
                                        aria-label={`Delete ${item.title}`}
                                        title="Delete task"
                                    >
                                        <FiTrash2 aria-hidden="true" />
                                    </Styled.DeleteButton>
                                </Styled.ItemActions>
                            </Styled.Item>
                        );
                    })}
                </Styled.List>

                <Styled.StorageNote>
                    <FiDatabase aria-hidden="true" />
                    Tasks are stored locally in this browser using localStorage.
                </Styled.StorageNote>
            </Styled.Container>

            {confirm && (
                <ConfirmModal
                    title={confirm.title}
                    message={confirm.message}
                    confirmText={confirm.confirmText}
                    cancelText={confirm.cancelText}
                    tone={confirm.tone}
                    onConfirm={handleConfirm}
                    onCancel={closeConfirm}
                />
            )}
        </Styled.Page>
    );
};

const EditRow = ({ item, onCancel, onSave }) => {
    const [title, setTitle] = useState(item.title);

    const [category, setCategory] = useState(item.category || "");

    const [due, setDue] = useState(item.due || "");

    const handleSubmit = (event) => {
        event.preventDefault();

        const cleanTitle = title.trim();

        if (!cleanTitle) {
            return;
        }

        onSave(item.id, {
            title: cleanTitle,
            category: category.trim(),
            due,
        });
    };

    return (
        <Styled.EditItem as="form" onSubmit={handleSubmit}>
            <Styled.EditFields>
                <Styled.Input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    aria-label="Edit task title"
                    placeholder="Title *"
                    required
                    autoFocus
                />

                <Styled.Input
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    aria-label="Edit category"
                    placeholder="Category"
                />

                <Styled.Input
                    type="date"
                    value={due}
                    onChange={(event) => setDue(event.target.value)}
                    aria-label="Edit due date"
                />
            </Styled.EditFields>

            <Styled.EditActions>
                <Styled.PrimaryButton type="submit" disabled={!title.trim()}>
                    <FiCheck aria-hidden="true" />
                    Save
                </Styled.PrimaryButton>

                <Styled.Button type="button" onClick={onCancel}>
                    <FiX aria-hidden="true" />
                    Cancel
                </Styled.Button>
            </Styled.EditActions>
        </Styled.EditItem>
    );
};

export default TodoListCrud;
