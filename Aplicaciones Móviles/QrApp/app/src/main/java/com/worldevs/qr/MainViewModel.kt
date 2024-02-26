package com.worldevs.qr

import android.app.Application
import android.graphics.Bitmap
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.google.zxing.BarcodeFormat
import com.journeyapps.barcodescanner.BarcodeEncoder
import com.journeyapps.barcodescanner.ScanIntentResult

class MainViewModel(application: Application): AndroidViewModel(application) {

    private val _scanResult = MutableLiveData<ScanIntentResult>()
    val scanResult: LiveData<ScanIntentResult> get() = _scanResult

    fun handleScanResult(result: ScanIntentResult) {
        _scanResult.value = result
    }

    fun generateQRCode(content: String): Bitmap? {
        return try {
            val barcodeEncoder = BarcodeEncoder()
            barcodeEncoder.encodeBitmap(content, BarcodeFormat.QR_CODE, 400, 400)
        } catch (e: Exception) {
            // Manejar la excepción según tus necesidades
            null
        }
    }
}
