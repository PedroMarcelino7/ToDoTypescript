import { useState } from 'react'
import { ITask } from './interfaces/Task'
import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import Modal from './components/Modal/Modal'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  return (
    <>
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} labelColor='#282c34' />} />

      <Header />

      <div className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} labelColor='#fff' />
        </div>

        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
