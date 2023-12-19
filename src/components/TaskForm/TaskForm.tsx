import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './TaskForm.module.css'
import styled from 'styled-components';

import { ITask } from '../../interfaces/Task'

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    labelColor: string
    task?: ITask | null
    handleUpdate?(id: number, title: string, difficulty: number): void
}

const Label = styled.label<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 1.5rem;
`;

const TaskForm = ({ btnText, taskList, setTaskList, labelColor, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (handleUpdate) {
            handleUpdate(id, title, difficulty)
        } else {
            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = { id, title, difficulty }

            setTaskList!([...taskList, newTask])

            setTitle('')
            setDifficulty(0)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }

    return (
        <form className={styles.form} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
                <Label htmlFor="title" color={labelColor}>Título:</Label>
                <input
                    type="text"
                    id='title'
                    name='title'
                    placeholder='Título da tarefa'
                    onChange={handleChange}
                    value={title}
                />
            </div>
            <div className={styles.input_container}>
                <Label htmlFor="difficulty" color={labelColor}>Dificuldade:</Label>
                <input
                    type="number"
                    name='difficulty'
                    id='difficulty'
                    placeholder='Dificuldade da tarefa'
                    onChange={handleChange}
                    value={difficulty}
                />
            </div>

            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm