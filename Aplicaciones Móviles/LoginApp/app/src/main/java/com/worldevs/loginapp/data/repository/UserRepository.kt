package com.worldevs.loginapp.data.repository

import com.worldevs.loginapp.data.model.User

class UserRepository {
    private var user: User? = null

    // Método para establecer el usuario actual
    fun setUser(currentUser: User?) {
        user = currentUser
    }

    // Método para obtener el usuario actual
    fun getUser(): User? {
        return user
    }

    // Método para obtener el correo electrónico del usuario actual
    fun getEmail(): String? {
        return user?.email
    }

    // Método para obtener el UUID del usuario actual (puedes cambiar esto según tus necesidades)
    fun getUUID(): String? {
        return user?.uuid
    }

    // Otros métodos relacionados con la manipulación de datos del usuario podrían agregarse aquí
}
