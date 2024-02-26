package com.worldevs.testapp

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import com.worldevs.testapp.model.Chapter
import com.worldevs.testapp.model.Question
import com.worldevs.testapp.model.Subject

@Dao
interface AppDao {
    @Query("SELECT * FROM subjects_table")
    fun getAllSubjects(): LiveData<List<Subject>>

    @Insert
    fun insertSubject(subject: Subject)

    @Delete
    fun deleteSubject(subject: Subject)

    @Query("SELECT * FROM chapters_table WHERE subjectId = :id")
    fun getChaptersForSubject(id: Int): LiveData<List<Chapter>>

    @Insert
    fun insertChapter(chapter: Chapter)

    @Delete
    fun deleteChapter(subject: Chapter)

    /*@Query("SELECT * FROM questions_table WHERE questionId = :id")
    fun getQuestionsForChapter(id: Int): LiveData<List<Question>>*/
}
