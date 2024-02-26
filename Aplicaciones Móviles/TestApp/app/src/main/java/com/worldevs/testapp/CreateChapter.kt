package com.worldevs.testapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import com.worldevs.testapp.databinding.ActivityCreateChapterBinding

class CreateChapter : AppCompatActivity() {

    private lateinit var binding: ActivityCreateChapterBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityCreateChapterBinding.inflate(layoutInflater)
        setContentView(binding.root)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.title = getString(R.string.add_new_unit)

        checkBoxEnable()
    }

    private fun checkBoxEnable() {
        val chkCorrect1 = binding.chkCorrect1
        val chkCorrect2 = binding.chkCorrect2
        val chkCorrect3 = binding.chkCorrect3
        val chkCorrect4 = binding.chkCorrect4

        val checkBoxes = listOf(chkCorrect1, chkCorrect2, chkCorrect3, chkCorrect4)

        for (checkBox in checkBoxes) {
            checkBox.setOnCheckedChangeListener { compoundButton, isChecked ->
                // Si el CheckBox actual está marcado, desmarca los demás
                if (isChecked) {
                    for (otherCheckBox in checkBoxes) {
                        if (otherCheckBox != compoundButton) {
                            otherCheckBox.isChecked = false
                        }
                    }
                }
            }
        }
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
            else -> super.onOptionsItemSelected(item)
        }
    }
}