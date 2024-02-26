package com.worldevs.docount.searchcoin

import android.content.Intent
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.widget.AdapterView
import android.widget.ArrayAdapter
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.MenuItemCompat
import com.worldevs.docount.databinding.ActivitySearchCoinBinding
import android.widget.SearchView
import androidx.activity.viewModels
import com.worldevs.docount.R


class SearchCoinActivity : AppCompatActivity() {

    // Properties
    private lateinit var binding: ActivitySearchCoinBinding
    private val model: SearchCoinViewModel by viewModels()
    private val list: List<String> = listOf("EUR", "GBP", "USD", "CHF")
    private var coin: String = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySearchCoinBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // ActionBar
        supportActionBar?.title = getString(R.string.choose_coin)
        supportActionBar?.setDisplayShowHomeEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        listOfCoins()
    }

    private fun listOfCoins() {
        val arrayAdapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, android.R.id.text1, list)
        binding.listCoin.adapter = arrayAdapter
        binding.listCoin.onItemClickListener =
            AdapterView.OnItemClickListener { _, _, p2, _ ->
                coin = list[p2]
                onBackPressed()
            }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu_search, menu)
        val search: MenuItem = menu.findItem(R.id.action_search)
        val searchView: SearchView = MenuItemCompat.getActionView(search) as SearchView
        searchView.queryHint = getString(R.string.search)
        searchView.setOnQueryTextListener(object: SearchView.OnQueryTextListener{
            override fun onQueryTextSubmit(query: String?): Boolean {
                return false
            }

            override fun onQueryTextChange(newText: String?): Boolean {
                return false
            }

        })
        return super.onCreateOptionsMenu(menu)
    }

    override fun onBackPressed() {
        val intent = Intent()
        intent.putExtra("message", coin)
        setResult(RESULT_OK, intent)
        finish()
    }

    override fun onSupportNavigateUp(): Boolean {
        onBackPressed()
        return false
    }
}