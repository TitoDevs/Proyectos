package com.worldevs.testapp.ui.unit

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.worldevs.testapp.AppDatabase
import com.worldevs.testapp.Repository
import com.worldevs.testapp.model.Chapter
import com.worldevs.testapp.model.Subject
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class UnitViewModel(application: Application) : AndroidViewModel(application) {

    private val _chapterList = MutableLiveData<List<Chapter>>()
    val chapterList: LiveData<List<Chapter>> get() = _chapterList

    private val dataFromDB: Repository

    init {
        val appDao = AppDatabase.getDatabase(application).appDao()
        dataFromDB = Repository(appDao)
    }

    fun deleteSubject(subject: Subject) {
        dataFromDB.deleteSubject(subject)
    }

    fun getChapters(id: Int) {
        dataFromDB.getChapters(id).observeForever { list ->
            _chapterList.postValue(list)
        }
    }

    fun addChapter(id: Int, chapter: String) = viewModelScope.launch(Dispatchers.IO) {
        dataFromDB.addChapter(id, chapter)
    }
}