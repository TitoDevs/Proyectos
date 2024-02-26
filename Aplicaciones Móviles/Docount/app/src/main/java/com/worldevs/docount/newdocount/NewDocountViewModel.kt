package com.worldevs.docount.newdocount

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.worldevs.docount.DocountRepository
import com.worldevs.docount.User
import com.worldevs.docount.UserRepository

class NewDocountViewModel(application: Application): AndroidViewModel(application) {

    // Properties
    private val docountRepository = DocountRepository(application)
    private val userRepository = UserRepository(application)

    fun setNewDocount(title: String, description: String, coin: String, category: String, users: MutableList<User>){
        docountRepository.setNewDocounts(title,description,coin,category,users)
    }

    private fun _getUserData(): MutableLiveData<User>{
        return userRepository.getPersonalData()
    }

    fun getUserData(): LiveData<User> {
        return _getUserData()
    }
}