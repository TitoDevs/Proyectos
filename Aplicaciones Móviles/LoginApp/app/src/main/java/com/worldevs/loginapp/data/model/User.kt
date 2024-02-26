package com.worldevs.loginapp.data.model

import java.io.Serializable

data class User(
    val email: String? = null,
    val password: String? = null,
    val uuid: String? = null
) : Serializable
