package com.worldevs.testapp.ui.test

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.worldevs.testapp.AppDatabase
import com.worldevs.testapp.Repository
import com.worldevs.testapp.model.Chapter
import com.worldevs.testapp.model.Question

class TestViewModel(application: Application) : AndroidViewModel(application) {

    private val _chapterList = MutableLiveData<List<Question>>()
    val chapterList: LiveData<List<Question>> get() = _chapterList

    private val dataFromDB: Repository

    init {
        val appDao = AppDatabase.getDatabase(application).appDao()
        dataFromDB = Repository(appDao)
    }

    fun deleteChapter(chapter: Chapter) {
        dataFromDB.deleteChapter(chapter)
    }
}