package com.worldevs.todolist.ui.task

import android.annotation.SuppressLint
import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.todolist.database.AppDatabase
import com.worldevs.todolist.database.TaskRepository
import com.worldevs.todolist.databinding.ListItemTaskBinding
import com.worldevs.todolist.model.Task

class TaskAdapter : RecyclerView.Adapter<TaskViewHolder>() {

    private var taskList: List<Task> = emptyList()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TaskViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val binding = ListItemTaskBinding.inflate(inflater, parent, false)
        val taskDao = AppDatabase.getDatabase(parent.context).taskDao()
        val repository = TaskRepository(taskDao)
        return TaskViewHolder(binding, repository)
    }

    override fun onBindViewHolder(holder: TaskViewHolder, position: Int) {
        val task = taskList[position]
        holder.bind(task)

        holder.itemView.setOnClickListener {
            val context = holder.itemView.context
            val intent = Intent(context, TaskActivity::class.java)

            // Pasa la tarea como extra en el Intent
            intent.putExtra("get_task", task)

            context.startActivity(intent)
        }
    }


    override fun getItemCount(): Int = taskList.size

    @SuppressLint("NotifyDataSetChanged")
    fun submitList(tasks: List<Task>) {
        taskList = tasks
        notifyDataSetChanged()
    }

}