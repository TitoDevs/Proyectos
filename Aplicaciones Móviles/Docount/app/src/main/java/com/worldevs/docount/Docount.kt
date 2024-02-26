package com.worldevs.docount

import java.io.Serializable

data class Docount(
    val id: String = "",
    val title: String = "",
    val description: String = "",
    val coin: String = "",
    val category: String = ""
) : Serializable
