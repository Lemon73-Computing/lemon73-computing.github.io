function displayResults(results, store) {
    const searchResults = document.getElementById('results');
    if (!searchResults) {
        console.error('Search results container is missing in the DOM');
        return;
    }
    if (results.length) {
        let resultList = ''
        // Iterate and build result list elements
        for (const n in results) {
            const item = store[results[n].ref]
            resultList += '<div class="card"><a href="' + item.url + '"><div class="text"><h2>' + item.title + '</h2>'
            resultList += '<p class="small">' + item.content.substring(0, 150) + '...</p></a></div></div>'
        }
        searchResults.innerHTML = resultList
    } else {
        searchResults.innerHTML = "No results found."
    }
}

// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
const query = params.get('query')

// Perform a search if there is a query
if (query) {
    // Retain the search input in the form when displaying results
    document.getElementById('search-input').setAttribute('value', query)

    const idx = lunr(function () {
        this.use(lunr.multiLanguage('en', 'ja'));
        this.ref('id')
        this.field('title', {
            boost: 15
        })
        this.field('tags')
        this.field('content', {
            boost: 10
        })

        for (const key in window.store) {
            this.add({
                id: key,
                title: window.store[key].title,
                tags: window.store[key].category,
                content: window.store[key].content
            })
        }
    })

    // Perform the search
    const results = idx.search(query)
    // Update the list with results
    displayResults(results, window.store)
}
