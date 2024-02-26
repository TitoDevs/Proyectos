package com.worldevs.docount.importdocount

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.activity.viewModels
import com.worldevs.docount.R
import com.worldevs.docount.databinding.ActivityImportDocountBinding

class ImportDocountActivity : AppCompatActivity() {

    // Properties
    private lateinit var binding: ActivityImportDocountBinding
    private val model: ImportDocountViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityImportDocountBinding.inflate(layoutInflater)
        setContentView(binding.root)
        supportActionBar?.title = getString(R.string.importar_docount)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowHomeEnabled(true)

        // Setup
        //importDocount()
    }

    fun importDocount(){
        model.importDocount()
    }

    // Button send back
    override fun onSupportNavigateUp(): Boolean {
        onBackPressed()
        return false
    }
}