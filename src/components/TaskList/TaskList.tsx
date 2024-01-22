import styles from './TaskList.module.css'
import { ITask } from '../../interfaces/Task'
import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

type Props = {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ?
        (taskList.map(task => (
          <div className={styles.task} key={task.id}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <h5>Difficulty: {task.difficulty}</h5>
            </div>

            <div className={styles.actions}>
              <Tooltip title="Edit" placement="right" arrow>
                <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
              </Tooltip>

              <Tooltip title="Delete" placement="right" arrow>
                <i className='bi bi-trash' onClick={() => handleDelete(task.id)}></i>
              </Tooltip>
            </div>
          </div>
        )))
        :
        (<p></p>)
      }
    </>
  )
}

export default TaskList