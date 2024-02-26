package com.worldevs.todolist.ui.task

import android.app.DatePickerDialog
import android.content.res.ColorStateList
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.view.MenuItem
import androidx.appcompat.app.AlertDialog
import androidx.core.content.ContextCompat
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.coroutineScope
import com.worldevs.todolist.R
import com.worldevs.todolist.databinding.ActivityTaskBinding
import com.worldevs.todolist.model.Task
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.*

class TaskActivity : AppCompatActivity() {

    private lateinit var binding: ActivityTaskBinding
    private lateinit var viewModel: TaskViewModel
    private var tmpTask: Task? = null
    private var task: Task? = null
    private var isDone: Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityTaskBinding.inflate(layoutInflater)
        setContentView(binding.root)
        supportActionBar?.setDisplayHomeAsUpEnabled(true) // Activar flecha para retroceder
        supportActionBar?.title = "Detalles de la tarea"

        task = intent.getSerializableExtra("get_task") as Task
        isDone = task!!.isDone

        binding.etTaskTitle.text = Editable.Factory.getInstance().newEditable(task!!.title)
        binding.etTaskDescription.text = Editable.Factory.getInstance().newEditable(task!!.description ?: "")
        binding.etTaskDate.text = Editable.Factory.getInstance().newEditable(task!!.date ?: "")

        binding.btnDone.imageTintList = getBtnDoneColor(task!!.isDone)

        binding.btnDone.setOnClickListener {
            isDone = !task!!.isDone
            binding.btnDone.imageTintList = getBtnDoneColor(isDone)
        }

        viewModel = ViewModelProvider(this)[TaskViewModel::class.java]

        binding.etTaskDate.setOnClickListener {
            openDatePicker()
        }

        binding.btnDeleteTask.setOnClickListener {
            openAlertDialog(task!!)
        }
    }

    private fun isChanged(taskGlobal: Task, newTask: Task): Boolean {
        return (taskGlobal.title != newTask.title ||
                taskGlobal.description != newTask.description ||
                taskGlobal.date != newTask.date ||
                taskGlobal.isDone != newTask.isDone)
    }


    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                onBackPressed()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun openDatePicker() {
        val calendar = Calendar.getInstance()
        val year = calendar.get(Calendar.YEAR)
        val month = calendar.get(Calendar.MONTH)
        val day = calendar.get(Calendar.DAY_OF_MONTH)

        val datePickerDialog = DatePickerDialog(
            this@TaskActivity,
            { _, selectedYear, selectedMonth, selectedDay ->
                val selectedDate = Calendar.getInstance()
                selectedDate.set(selectedYear, selectedMonth, selectedDay)

                // Formatea la fecha según tus necesidades
                val dateFormat = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault())
                val formattedDate = dateFormat.format(selectedDate.time)

                binding.etTaskDate.setText(formattedDate)
            },
            year,
            month,
            day
        )
        datePickerDialog.show()
    }

    private fun openAlertDialog(task: Task) {
        val alertDialog = AlertDialog.Builder(this@TaskActivity)
            .setTitle("Confirmar Eliminación")
            .setMessage("¿Estás seguro de que deseas eliminar esta tarea?")
            .setPositiveButton("Eliminar") { _, _ ->
                (this@TaskActivity as? LifecycleOwner)?.lifecycle?.coroutineScope?.launch {
                    onBackPressed()
                    viewModel.deleteTask(task)
                }
            }
            .setNegativeButton("Cancelar", null)
            .create()

        alertDialog.show()
    }

    private fun getBtnDoneColor(isDone: Boolean): ColorStateList {
        val colorRes = if (isDone) R.color.green else R.color.black
        return ColorStateList.valueOf(ContextCompat.getColor(this@TaskActivity, colorRes))
    }

    override fun onBackPressed() {
        super.onBackPressed()
        tmpTask = Task(id = task!!.id, title = binding.etTaskTitle.text.toString(),
            description = binding.etTaskDescription.text.toString(),
            date = binding.etTaskDate.text.toString(),
            isDone = isDone)

        if (isChanged(task!!, tmpTask!!)) {
            viewModel.updateTask(tmpTask!!)
        }
    }
}