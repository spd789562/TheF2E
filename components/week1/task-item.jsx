import React from 'react'
import { pure } from 'recompose'
import { splitAt, dropLast, append, join, pipe } from 'ramda'
import FontAwesome from 'react-fontawesome'
import Edit from '../../containers/week1/edit'

export default pure(
  ({
    index,
    title,
    isImportant = false,
    isEdit = false,
    date = null,
    hasFile = false,
    hasComment = false
  }) => (
    <div className="container-main-task-list-item-wrapper">
      <div
        className={`container-main-task-list-item ${
          isImportant ? 'container-main-task-list-item__active' : ''
        }`}>
        <div className="container-main-task-list-item-row">
          <input
            id={`task-${index}`}
            type="checkbox"
            className="container-main-task-list-item-input"
          />
          <label
            htmlFor={`task-${index}`}
            type="checkbox"
            className="container-main-task-list-item-checkbox">
            <FontAwesome name="check" />
          </label>
          <h2 className="container-main-task-list-item-title">
            {title.length > 15
              ? pipe(
                  splitAt(14),
                  dropLast(1),
                  append('...'),
                  join('')
                )(title)
              : title}
          </h2>
          <div
            className={`container-main-task-list-item-important ${
              isImportant
                ? 'container-main-task-list-item-important__active'
                : ''
            }`}>
            <FontAwesome name={`star${isImportant ? '' : '-o'}`} />
          </div>
          <div
            className={`container-main-task-list-item-edit ${
              isEdit ? 'container-main-task-list-item-edit__active' : ''
            }`}>
            <FontAwesome name="pencil" />
          </div>
        </div>
        {!isEdit && (date || hasFile || hasComment) ? (
          <div className="container-main-task-list-item-row">
            {date ? (
              <div className="container-main-task-list-item-content-mark">
                <FontAwesome name="calendar" />
                &nbsp;{date}
              </div>
            ) : null}
            {hasFile ? (
              <div className="container-main-task-list-item-content-mark">
                <FontAwesome name="file-o" />
              </div>
            ) : null}
            {hasComment ? (
              <div className="container-main-task-list-item-content-mark">
                <FontAwesome name="commenting-o" />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      {isEdit ? <Edit /> : null}
    </div>
  )
)
