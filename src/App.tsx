import { useEffect, useState } from 'react'
import { ITask } from './interfaces/Task'
import styles from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import Modal from './components/Modal/Modal'
import Error from './components/Error/Error'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [showModal, setShowModal] = useState<Boolean>(false)
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  const [showError, setShowError] = useState<Boolean>(false)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const handleModalChange = () => {
    setShowModal(!showModal)
  }

  const editTask = (task: ITask): void => {
    handleModalChange()
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty }

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)
    setShowModal(false)
  }

  useEffect(() => {
    if (taskList.length > 0) {
      setShowError(false)
    } else {
      setShowError(true)
    }
  }, [taskList])

  return (
    <div className={styles.app}>
      {showModal &&
        <Modal
          handleModalChange={handleModalChange}
          children={
            <TaskForm
              btnText='Edit task'
              taskList={taskList}
              labelColor='#282c34'
              task={taskToUpdate}
              handleUpdate={updateTask}
            />}
        />}

      <Header />

      <div className={styles.main}>
        <div>
          <h2>What will you do?</h2>
          <TaskForm
            btnText='Create task'
            taskList={taskList}
            setTaskList={setTaskList}
            labelColor='#fff'
          />
        </div>

        <div>
          <h2>Your tasks:</h2>
          {showError && <Error />}
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
