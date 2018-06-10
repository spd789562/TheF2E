import React from 'react'
import FontAwesome from 'react-fontawesome'

export default () => (
  <div className="container-main-task-edit">
    <div className="container-main-task-edit-content">
      <div className="container-main-task-edit-content-row">
        <div className="container-main-task-edit-content-row-title">
          <div className="container-main-task-edit-content-row-title-mark">
            <FontAwesome name="calendar" />
          </div>
          <div className="container-main-task-edit-content-row-title-text">
            Deadline
          </div>
        </div>
        <div className="container-main-task-edit-content-row-container">
          <div className="container-main-task-edit-content-row-container-date">
            2018/6/30
          </div>
          <div className="container-main-task-edit-content-row-container-time">
            09:11
          </div>
        </div>
      </div>
      <div className="container-main-task-edit-content-row">
        <div className="container-main-task-edit-content-row-title">
          <div className="container-main-task-edit-content-row-title-mark">
            <FontAwesome name="file-o" />
          </div>
          <div className="container-main-task-edit-content-row-title-text">
            File
          </div>
        </div>
        <div className="container-main-task-edit-content-row-container">
          <div className="container-main-task-edit-content-row-container-file">
            <div className="container-main-task-edit-content-row-container-file-name">
              20180514.zip
            </div>
            <div className="container-main-task-edit-content-row-container-file-time">
              uploaded yesterday
            </div>
          </div>
          <div className="container-main-task-edit-content-row-container-addfile">
            <FontAwesome name="plus" />
          </div>
        </div>
      </div>
      <div className="container-main-task-edit-content-row">
        <div className="container-main-task-edit-content-row-title">
          <div className="container-main-task-edit-content-row-title-mark">
            <FontAwesome name="commenting-o" />
          </div>
          <div className="container-main-task-edit-content-row-title-text">
            Comment
          </div>
        </div>
        <div className="container-main-task-edit-content-row-container">
          <div className="container-main-task-edit-content-row-container-comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            iusto!
          </div>
        </div>
      </div>
    </div>
    <div className="container-main-task-edit-footer">
      <div className="container-main-task-edit-footer-button container-main-task-edit-footer-button__cancle">
        <div className="container-main-task-edit-footer-button-text">
          Cancel
        </div>
      </div>
      <div className="container-main-task-edit-footer-button container-main-task-edit-footer-button__save">
        <div className="container-main-task-edit-footer-button-text">Save</div>
      </div>
    </div>
  </div>
)
