package com.worldevs.testapp.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.io.Serializable

@Entity(tableName = "chapters_table")
data class Chapter(
    @PrimaryKey(autoGenerate = true) var id: Int = 0,
    @ColumnInfo(name = "subjectId") var subjectId: Int? = 0,
    @ColumnInfo(name = "name") var name: String? = "",
) : Serializable
