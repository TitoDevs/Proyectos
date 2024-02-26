package com.worldevs.docount.account

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.activity.viewModels
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.tabs.TabLayoutMediator
import com.worldevs.docount.CustomPagerAdapter
import com.worldevs.docount.Docount
import com.worldevs.docount.R
import com.worldevs.docount.balance.BalanceFragment
import com.worldevs.docount.bills.BillsFragment
import com.worldevs.docount.databinding.ActivityAccountBinding
import java.io.Serializable

class AccountActivity : AppCompatActivity() {

    // Properties
    private lateinit var binding: ActivityAccountBinding
    private val model: AccountViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityAccountBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportActionBar?.hide()

        val docount = intent.getSerializableExtra("docount") as? Docount
        // Setup
        binding.tvTitle.text = docount?.title.toString()

        val viewPager2 = binding.viewpager
        val tabLayout = binding.tablayout

        val adapter = CustomPagerAdapter(supportFragmentManager, lifecycle)
        viewPager2.adapter = adapter

        TabLayoutMediator(tabLayout, viewPager2) {tab, position ->

        }

        binding.viewpager.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback() {
            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                //@Todo posición actual con position
            }
        })
    }
}