package com.worldevs.todolist.database

import androidx.lifecycle.LiveData
import androidx.room.*
import com.worldevs.todolist.model.Task

@Dao
interface TaskDao {
    @Query("SELECT * FROM task_table")
    fun getAllTasks(): LiveData<List<Task>>

    @Insert
    fun insertTask(task: Task)

    @Update
    fun updateTask(task: Task)

    @Delete
    fun deleteTask(task: Task)
}
