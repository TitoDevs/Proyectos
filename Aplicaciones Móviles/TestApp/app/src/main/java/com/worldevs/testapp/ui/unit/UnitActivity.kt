package com.worldevs.testapp.ui.unit

import android.content.Intent
import android.os.Bundle
import android.text.InputType
import android.view.Menu
import android.view.MenuItem
import android.widget.EditText
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.worldevs.testapp.CreateChapter
import com.worldevs.testapp.R
import com.worldevs.testapp.databinding.ActivityUnitBinding
import com.worldevs.testapp.model.Subject

class UnitActivity : AppCompatActivity() {

    private lateinit var binding: ActivityUnitBinding
    private lateinit var viewModel: UnitViewModel
    private var unitAdapter = UnitAdapter()
    private var subject = Subject()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityUnitBinding.inflate(layoutInflater)
        setContentView(binding.root)

        if (intent.hasExtra("Subject")) {
            subject = (intent.getSerializableExtra("Subject") as Subject?)!!
        }

        supportActionBar?.title = subject.name
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        viewModel = ViewModelProvider(this)[UnitViewModel::class.java]

        binding.rvListUnit.apply {
            layoutManager = LinearLayoutManager(this@UnitActivity)
            adapter = unitAdapter
        }

        viewModel.getChapters(subject.id)

        viewModel.chapterList.observe(this) { list ->
            unitAdapter.submitList(list)
        }

        binding.btnAddUnit.setOnClickListener {
            /* val intent = Intent(this, CreateChapter::class.java)
            intent.putExtra("Subject", subject)
            startActivity(intent)*/
            showAddChapterDialog()
        }
    }

    private fun showDeleteDialog() {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Quieres borrar la asignatura ${subject.name}?")
        builder.setMessage("Al borrar se perderán todos los datos.")
        builder.setPositiveButton("Aceptar") { _, _ ->
            viewModel.deleteSubject(subject)
            finish()
        }
        builder.setNegativeButton("Cancelar") { dialog, _ ->
            dialog.cancel()
        }
        builder.show()
    }

    private fun showAddChapterDialog() {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Agregar Tema")

        val input = EditText(this)
        input.inputType = InputType.TYPE_CLASS_TEXT
        builder.setView(input)

        builder.setPositiveButton("Agregar") { _, _ ->
            val newChapter = input.text.toString()
            viewModel.addChapter(subject.id, newChapter)
        }

        builder.setNegativeButton("Cancelar") { dialog, _ ->
            dialog.cancel()
        }

        builder.show()
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_unit, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                finish()
                true
            }
            R.id.action_delete_subject -> {
                showDeleteDialog()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }
}