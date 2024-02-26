package com.worldevs.todolist.ui.task

import android.content.res.ColorStateList
import android.graphics.Paint
import androidx.appcompat.app.AlertDialog
import androidx.core.content.ContextCompat
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.coroutineScope
import androidx.lifecycle.viewmodel.viewModelFactory
import androidx.recyclerview.widget.RecyclerView
import com.worldevs.todolist.R
import com.worldevs.todolist.database.AppDatabase
import com.worldevs.todolist.database.TaskRepository
import com.worldevs.todolist.databinding.ListItemTaskBinding
import com.worldevs.todolist.model.Task
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch

class TaskViewHolder(private val binding: ListItemTaskBinding, private val repository: TaskRepository) : RecyclerView.ViewHolder(binding.root) {

    fun bind(task: Task) {
        binding.tvTask.text = task.title

        if (task.isDone) {
            // Tacha el texto si la tarea está hecha
            binding.tvTask.paintFlags = binding.tvTask.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
        } else {
            // Quita el tachado si la tarea no está hecha
            binding.tvTask.paintFlags = binding.tvTask.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
        }

        binding.btnDone.imageTintList = getBtnDoneColor(task.isDone)

        binding.btnDone.setOnClickListener {
            val isDone = !task.isDone
            task.isDone = isDone

            (itemView.context as? LifecycleOwner)?.lifecycle?.coroutineScope?.launch {
                repository.updateTask(task)
            }

            binding.btnDone.imageTintList = getBtnDoneColor(isDone)
        }

        binding.btnDelete.setOnClickListener {
            val alertDialog = AlertDialog.Builder(itemView.context)
                .setTitle("Confirmar Eliminación")
                .setMessage("¿Estás seguro de que deseas eliminar esta tarea?")
                .setPositiveButton("Eliminar") { _, _ ->
                    (itemView.context as? LifecycleOwner)?.lifecycle?.coroutineScope?.launch {
                        repository.deleteTask(task)
                    }
                }
                .setNegativeButton("Cancelar", null)
                .create()

            alertDialog.show()
        }
    }

    private fun getBtnDoneColor(isDone: Boolean): ColorStateList {
        val colorRes = if (isDone) R.color.green else R.color.black
        return ColorStateList.valueOf(ContextCompat.getColor(itemView.context, colorRes))
    }
}

