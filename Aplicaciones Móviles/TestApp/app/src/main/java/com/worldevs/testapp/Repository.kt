package com.worldevs.testapp

import androidx.lifecycle.LiveData
import com.worldevs.testapp.model.Subject
import com.worldevs.testapp.model.Chapter
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class Repository(private val appDao: AppDao) {

    fun getSubjects(): LiveData<List<Subject>> {
        return appDao.getAllSubjects()
    }

    suspend fun addSubject(subject: String) {
        val subjectEntity = Subject(name = subject)
        withContext(Dispatchers.IO) {
            appDao.insertSubject(subjectEntity)
        }
    }

    fun deleteSubject(subject: Subject) {
        CoroutineScope(Dispatchers.IO).launch {
            appDao.deleteSubject(subject)
        }
    }

    fun getChapters(id: Int): LiveData<List<Chapter>> {
        return appDao.getChaptersForSubject(id)
    }

    fun addChapter(id: Int, chapter: String) {
        val chapterEntity = Chapter(subjectId = id, name = chapter)
        CoroutineScope(Dispatchers.IO).launch {
            appDao.insertChapter(chapterEntity)
        }
    }

    fun deleteChapter(chapter: Chapter) {
        CoroutineScope(Dispatchers.IO).launch {
            appDao.deleteChapter(chapter)
        }
    }
}
