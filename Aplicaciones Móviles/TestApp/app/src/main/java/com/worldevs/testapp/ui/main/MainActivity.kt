package com.worldevs.testapp.ui.main

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.InputType
import android.view.Menu
import android.view.MenuItem
import android.widget.EditText
import androidx.appcompat.app.AlertDialog
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.worldevs.testapp.R
import com.worldevs.testapp.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var viewModel: MainViewModel
    private val mainAdapter = MainAdapter()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        viewModel = ViewModelProvider(this)[MainViewModel::class.java]

        binding.rvListSubjects.apply {
            layoutManager = LinearLayoutManager(this@MainActivity)
            adapter = mainAdapter
        }

        viewModel.subjectList.observe(this) { list ->
            mainAdapter.submitList(list)
        }

        binding.btnAddSubject.setOnClickListener {
            showAddSubjectDialog()
        }
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_main, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.action_info -> {
                showAboutDialog()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    private fun showAboutDialog() {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Acerca de la aplicación")
        builder.setMessage("Información detallada sobre la aplicación.")
        builder.setPositiveButton("Aceptar") { _, _ ->
            // Acción al hacer clic en Aceptar
        }
        builder.show()
    }

    private fun showAddSubjectDialog() {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Agregar Asignatura")

        val input = EditText(this)
        input.inputType = InputType.TYPE_CLASS_TEXT
        builder.setView(input)

        builder.setPositiveButton("Agregar") { _, _ ->
            val newSubject = input.text.toString()
            viewModel.addSubject(newSubject)
        }

        builder.setNegativeButton("Cancelar") { dialog, _ ->
            dialog.cancel()
        }

        builder.show()
    }
}
