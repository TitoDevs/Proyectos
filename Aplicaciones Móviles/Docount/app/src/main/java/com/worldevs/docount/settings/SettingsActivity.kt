package com.worldevs.docount.settings

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.activity.viewModels
import androidx.appcompat.app.AlertDialog
import com.bumptech.glide.Glide
import com.worldevs.docount.R
import com.worldevs.docount.databinding.ActivitySettingsBinding

class SettingsActivity : AppCompatActivity() {

    // Properties
    private lateinit var binding: ActivitySettingsBinding
    private val model: SettingsViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySettingsBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // ActionBar
        supportActionBar?.title = getString(R.string.action_settings)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowHomeEnabled(true)

        setup()
    }

    private fun setup() {
        signOut()
        getPersonalData()
    }

    private fun getPersonalData(){
        model.getPersonalData().observe(this) {
            binding.etFullName.setText(it.username)
            binding.tvWelcomeName.text = "Bienvenido, " + it.username
            binding.tvWelcomeEmail.text = it.email
            binding.textInputAlias.editText?.setText(it.alias)
            binding.textInputIban.editText?.setText(it.iban)
            Glide.with(this).load(it.imageUrl).into(binding.imgProfile)
        }
    }

    private fun signOut(){
        binding.btSignOut.setOnClickListener {
            val builder = AlertDialog.Builder(this)
            builder.setTitle("Confirma, por favor")
            builder.setMessage("¿Estás seguro? Si sales, tus datos y configuración en este dispositivo se borran")
            builder.setPositiveButton(R.string.si_acepto) { _, _ ->
                model.signOut()
            }

            builder.setNegativeButton(R.string.no) { _, _ ->
                // Nada
            }

            builder.show()
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu_new_docount, menu)
        return super.onCreateOptionsMenu(menu)
    }

    override fun onPrepareOptionsMenu(menu: Menu): Boolean {
        menu.findItem(R.id.action_agree).isVisible
        return super.onPrepareOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.action_agree -> {
                val username: String = binding.etFullName.text.toString()
                val alias: String = binding.etAlias.text.toString()
                val iban: String = binding.etIban.text.toString()
                model.editProfile(username,alias,iban)
            }
            else -> super.onOptionsItemSelected(item)
        }
        return false
    }

    override fun onSupportNavigateUp(): Boolean {
        onBackPressed()
        return false
    }
}