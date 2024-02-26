package com.worldevs.qr

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.journeyapps.barcodescanner.ScanContract
import com.journeyapps.barcodescanner.ScanIntentResult
import com.journeyapps.barcodescanner.ScanOptions
import com.worldevs.qr.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var viewModel: MainViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        viewModel = ViewModelProvider(this)[MainViewModel::class.java]

        binding.btnMakeQr.setOnClickListener {
            val qrCodeContent = binding.etTextToQr.text.toString()
            val generatedQRCode = viewModel.generateQRCode(qrCodeContent)
            binding.ivQr.setImageBitmap(generatedQRCode)
        }

        binding.btnScanQr.setOnClickListener {
            barcodeLauncher.launch(createScanOptions())
        }

        viewModel.scanResult.observe(this) { result ->
            result?.let {
                if (result.contents == null) {
                    showToast("Cancelled")
                } else {
                    showToast("Scanned: ${result.contents}")
                }
            }
        }
    }

    private val barcodeLauncher = registerForActivityResult(
        ScanContract()
    ) { result: ScanIntentResult ->
        viewModel.handleScanResult(result)
    }

    private fun createScanOptions(): ScanOptions {
        val options = ScanOptions()
        options.captureActivity = CaptureActivityPortrait::class.java
        options.setPrompt("Scan a barcode")
        options.setBeepEnabled(false)
        options.setBarcodeImageEnabled(true)
        options.setOrientationLocked(false)
        return options
    }

    private fun showToast(message: String) {
        Toast.makeText(this, message, Toast.LENGTH_LONG).show()
    }
}
