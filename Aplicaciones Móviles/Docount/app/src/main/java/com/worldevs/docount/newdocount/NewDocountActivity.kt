package com.worldevs.docount.newdocount

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.Menu
import android.view.MenuItem
import android.view.View
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.chip.Chip
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import com.worldevs.docount.R
import com.worldevs.docount.User
import com.worldevs.docount.databinding.ActivityNewDocountBinding
import com.worldevs.docount.searchcoin.SearchCoinActivity

class NewDocountActivity : AppCompatActivity() {

    // Properties
    private lateinit var binding: ActivityNewDocountBinding
    private val model: NewDocountViewModel by viewModels()
    private val listParticipants: MutableList<User> = mutableListOf()
    private var activate: Boolean = false
    private lateinit var mainMenu: Menu
    private var mAuth = Firebase.auth.currentUser

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityNewDocountBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // ActionBar
        supportActionBar?.title = getString(R.string.new_docount)
        supportActionBar?.setDisplayShowHomeEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        // Setup
        setup()
        addParticipants()
        searchCoin()
    }

    private fun searchCoin() {
        binding.btChooseCoin.setOnClickListener {
            val intent = Intent(this, SearchCoinActivity::class.java)
            activityResult.launch(intent)
        }
    }

    private fun setup() {
        val watcher: TextWatcher = object : TextWatcher {
            override fun onTextChanged(s: CharSequence, start: Int, before: Int, count: Int) {
                activate = false
            }

            override fun beforeTextChanged(s: CharSequence, start: Int, count: Int, after: Int) {
                activate = true
                onPrepareOptionsMenu(mainMenu)
            }

            override fun afterTextChanged(s: Editable) {
                if (binding.textInputTitle.editText?.text!!.isNotEmpty()) {
                    activate = true
                    onPrepareOptionsMenu(mainMenu)
                } else {
                    activate = false
                    onPrepareOptionsMenu(mainMenu)
                }
            }
        }

        binding.textInputTitle.editText?.addTextChangedListener(watcher)

        model.getUserData().observe(this) {
            binding.textInputMyName.editText?.setText(it.username)
        }
    }

    private var activityResult =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            if (result.resultCode == Activity.RESULT_OK) {
                val message: String? = result.data?.getStringExtra("message")
                binding.textInputDivisa.editText!!.setText(message)
            }
        }

    private fun addParticipants() {
        // To add my name
        binding.btAddPerson.setOnClickListener {
            if (binding.textInputMyName.editText?.text!!.isNotEmpty()) {
                val user = User()
                user.username = binding.textInputMyName.editText?.text.toString()
                user.userId = mAuth?.uid.toString()
                listParticipants.add(user)
                binding.layout.visibility = View.GONE
                binding.layoutParticipants.visibility = View.VISIBLE
                binding.numParticipants.text = buildString {
                    append("Participantes ( ${listParticipants.size} / 50 )")
                }
            }
        }

        // To add other participants
        binding.btAddPerson2.setOnClickListener {
            if (binding.textInputOthersName.editText?.text!!.isNotEmpty()) {
                val user = User()
                user.username = binding.textInputMyName.editText?.text.toString()
                user.userId = listParticipants.size.toString()
                listParticipants.add(user)
                binding.textInputOthersName.editText?.text?.clear()
                binding.numParticipants.text = buildString {
                    append("Participantes ( ${listParticipants.size} / 50 )")
                }
            }
        }
    }

    private fun newDocount(){
        val selectedChip: Int = binding.chipGroupCategory.checkedChipId
        val chip: Chip = binding.chipGroupCategory.findViewById(selectedChip)
        val category: String = chip.text.toString()
        if (chip.isChecked){
            model.setNewDocount(
                binding.textInputTitle.editText?.text.toString(),
                binding.textInputDescription.editText?.text.toString(),
                binding.etDivisa.text.toString(),
                category, listParticipants
            )
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu_new_docount, menu)
        menu.findItem(R.id.action_agree).isVisible = activate
        return super.onCreateOptionsMenu(menu)
    }

    override fun onPrepareOptionsMenu(menu: Menu): Boolean {
        mainMenu = menu
        menu.findItem(R.id.action_agree).isVisible = activate
        return super.onPrepareOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.action_agree -> if (activate) {
                newDocount()
                finish()
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