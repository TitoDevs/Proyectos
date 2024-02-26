package com.worldevs.testapp.ui.main

import android.app.Application
import android.widget.Toast
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.worldevs.testapp.AppDatabase
import com.worldevs.testapp.Repository
import com.worldevs.testapp.model.Subject
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainViewModel(application: Application) : AndroidViewModel(application) {

    private val _subjectList = MutableLiveData<List<Subject>>()
    val subjectList: LiveData<List<Subject>> get() = _subjectList

    private val dataFromDB: Repository

    init {
        val appDao = AppDatabase.getDatabase(application).appDao()
        dataFromDB = Repository(appDao)
        dataFromDB.getSubjects().observeForever { list ->
            _subjectList.postValue(list)
        }
    }

    fun addSubject(subject: String) = viewModelScope.launch(Dispatchers.IO) {
        dataFromDB.addSubject(subject)
    }

}