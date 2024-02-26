package com.worldevs.testapp.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.io.Serializable

@Entity(tableName = "questions_table")
data class Question(
    @PrimaryKey(autoGenerate = true) var id: Int = 0,
    @ColumnInfo(name = "title") var title: String? = "",
    @ColumnInfo(name = "answer") var answers: String? = "",
    @ColumnInfo(name = "solution") var solution: String? = ""
) : Serializable
