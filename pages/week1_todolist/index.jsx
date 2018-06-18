import React from 'react'
import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import TaskItem from '../../components/week1/task-item'

import '../../assets/week1/index.styl'

export default () => (
  <div className="container__week1">
    <div className="nav">
      <div className="nav-bar">
        <div className="nav-bar-task nav-bar-task__active">My Tasks</div>
        <div className="nav-bar-task">In Progress</div>
        <div className="nav-bar-task">Completed</div>
        <div className="nav-bar-active-bar" />
      </div>
    </div>
    <main className="container-main">
      <div className="container-main-task-add">
        <div className="container-main-task-add-mark" />
        <div className="container-main-task-add-text">Add Task</div>
      </div>
      <div className="container-main-task-list">
        <TaskItem index={0} title="Foo Bar Baz" isImportant />
        <TaskItem
          index={1}
          title="Foo Bar Baz 123567"
          isImportant
          date="06/22"
        />
        <TaskItem
          index={2}
          title="Foo Bar Baz"
          isImportant
          date="06/22"
          hasFile
          hasComment
        />
        <TaskItem index={3} title="Foo Bar Baz" />
        <TaskItem index={4} title="Foo Bar Baz" isEdit />
        <TaskItem index={5} title="Foo Bar Baz" />
      </div>
      <div className="container-main-left">6 task left</div>
    </main>
  </div>
)
