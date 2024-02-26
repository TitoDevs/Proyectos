package com.worldevs.loginapp.ui.viewmodel.login

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import android.util.Patterns
import com.worldevs.loginapp.R
import com.worldevs.loginapp.data.repository.LoginRepository
import com.worldevs.loginapp.data.result.Result
import com.worldevs.loginapp.ui.view.login.LoggedInUserView
import com.worldevs.loginapp.ui.form.LoginFormState
import com.worldevs.loginapp.ui.result.LoginResult

class LoginViewModel(private val loginRepository: LoginRepository) : ViewModel() {

    private val _loginForm = MutableLiveData<LoginFormState>()
    val loginFormState: LiveData<LoginFormState> = _loginForm

    private val _loginResult = MutableLiveData<LoginResult>()
    val loginResult: LiveData<LoginResult> = _loginResult

    fun login(email: String, password: String) {
        // can be launched in a separate asynchronous job
        val result = loginRepository.login(email, password)

        if (result is Result.Success) {
            _loginResult.value =
                LoginResult(success = LoggedInUserView(email = result.data.email.toString()))
        } else {
            _loginResult.value = LoginResult(error = R.string.login_failed)
        }
    }

    fun createAccount(email: String, password: String) {
        val result = loginRepository.createAccount(email, password)
        if (result is Result.Success) {
            _loginResult.value =
                LoginResult(success = LoggedInUserView(email = result.data.email.toString()))
        } else {
            _loginResult.value = LoginResult(error = R.string.login_failed)
        }
    }

    fun loginDataChanged(email: String, password: String) {
        if (!isUserNameValid(email)) {
            _loginForm.value = LoginFormState(usernameError = R.string.invalid_username)
        } else if (!isPasswordValid(password)) {
            _loginForm.value = LoginFormState(passwordError = R.string.invalid_password)
        } else {
            _loginForm.value = LoginFormState(isDataValid = true)
        }
    }

    // A placeholder username validation check
    private fun isUserNameValid(username: String): Boolean {
        return if (username.contains('@')) {
            Patterns.EMAIL_ADDRESS.matcher(username).matches()
        } else {
            username.isNotBlank()
        }
    }

    // A placeholder password validation check
    private fun isPasswordValid(password: String): Boolean {
        return password.length > 5
    }
}