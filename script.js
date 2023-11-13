window.onload = function() {
    var links = [
        // ここにアンケートのリンクを追加
        'https://kt-tech.blog/blogs/hb2bt_0-v5',
        'https://kt-tech.blog/blogs/t0xx4djphp',
        'https://kt-tech.blog/blogs/d7cmt1cxo34b'
    ];

    var randomLink = links[Math.floor(Math.random() * links.length)];
    document.getElementById('surveyLink').textContent = randomLink;
    document.getElementById('surveyLink').href = randomLink;
};
