package com.worldevs.docount.settings

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.worldevs.docount.Session
import com.worldevs.docount.User
import com.worldevs.docount.UserRepository

class SettingsViewModel(application: Application): AndroidViewModel(application) {

    // Properties
    private val session = Session(application)
    private val userRepository = UserRepository(application)

    private fun _signOut(): MutableLiveData<Boolean>{
        return session.signOut()
    }

    fun signOut(): LiveData<Boolean>{
        return _signOut()
    }

    private fun _getPersonalData(): MutableLiveData<User>{
        return userRepository.getPersonalData()
    }

    fun getPersonalData(): LiveData<User>{
        return _getPersonalData()
    }

    fun editProfile(username: String, alias: String, iban: String){
        userRepository.editProfile(username, alias, iban)
    }
}