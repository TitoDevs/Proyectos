package com.worldevs.loginapp.ui.viewmodel.main

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.worldevs.loginapp.data.remote.AuthFirebase
import com.worldevs.loginapp.ui.form.LoginFormState
import com.worldevs.loginapp.ui.result.LoginResult

class MainViewModel(application: Application) : AndroidViewModel(application) {

    private val _loginForm = MutableLiveData<LoginFormState>()
    val loginFormState: LiveData<LoginFormState> = _loginForm

    private val _loginResult = MutableLiveData<LoginResult>()
    val loginResult: LiveData<LoginResult> = _loginResult
}