package com.worldevs.todolist.ui.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.worldevs.todolist.databinding.ActivityMainBinding
import com.worldevs.todolist.model.Task
import com.worldevs.todolist.ui.task.TaskAdapter

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var viewModel: MainViewModel
    private val taskAdapter = TaskAdapter()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        viewModel = ViewModelProvider(this)[MainViewModel::class.java]

        // RecyclerView
        binding.rvTasks.apply {
            layoutManager = LinearLayoutManager(this@MainActivity)
            adapter = taskAdapter
        }

        viewModel.getTasks().observe(this) {
            taskAdapter.submitList(it)
        }

        binding.btnAddTask.setOnClickListener {
            val newTask = binding.etNewTask.text.toString()
            if (newTask.isNotBlank()) {
                viewModel.insertTask(Task(title = newTask))
                binding.etNewTask.text.clear()

            } else {
                Toast.makeText(this, "Por favor, introduce una tarea válida", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
