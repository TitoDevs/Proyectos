package com.worldevs.testapp.ui.test

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.appcompat.app.AlertDialog
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.ViewModelProvider
import com.worldevs.testapp.R
import com.worldevs.testapp.databinding.ActivityTestBinding
import com.worldevs.testapp.model.Chapter
import com.worldevs.testapp.model.Subject

class TestActivity : AppCompatActivity() {

    private lateinit var binding: ActivityTestBinding
    private lateinit var viewModel: TestViewModel
    private var chapter = Chapter()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityTestBinding.inflate(layoutInflater)
        setContentView(binding.root)

        if (intent.hasExtra("Chapter")) {
            chapter = (intent.getSerializableExtra("Chapter") as Chapter?)!!
        }

        supportActionBar?.title = chapter.name
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        viewModel = ViewModelProvider(this)[TestViewModel::class.java]

        binding.btnStartTest.setOnClickListener {

        }
    }

    private fun showDeleteDialog() {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Quieres borrar el tema ${chapter.name}?")
        builder.setMessage("Al borrar se perderán todos los datos.")
        builder.setPositiveButton("Aceptar") { _, _ ->
            viewModel.deleteChapter(chapter)
            finish()
        }
        builder.setNegativeButton("Cancelar") { dialog, _ ->
            dialog.cancel()
        }
        builder.show()
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_test, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                finish()
                true
            }
            R.id.action_delete_chapter -> {
                showDeleteDialog()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }
}