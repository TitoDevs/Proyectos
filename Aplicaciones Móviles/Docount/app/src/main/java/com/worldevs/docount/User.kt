package com.worldevs.docount

import java.io.Serializable

data class User(
    var userId: String = "",
    var username: String? = "",
    var imageUrl: String = "",
    var email: String? = "",
    var alias: String? = "",
    var iban: String? = ""
) : Serializable