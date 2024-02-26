// MainActivity.kt
package com.worldevs.loginapp.ui.view.main

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.ViewModelProvider
import com.worldevs.loginapp.data.model.User
import com.worldevs.loginapp.databinding.ActivityMainBinding
import com.worldevs.loginapp.ui.viewmodel.main.MainViewModel

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var viewModel: MainViewModel
    private lateinit var user: User

    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        viewModel = ViewModelProvider(this)[MainViewModel::class.java]

        user = intent.getSerializableExtra("user") as User

        val email = binding.tvEmail
        email.text = "Welcome ${user.email}"
    }
}
