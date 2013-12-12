module.exports = {
    "meta": {
        "version": "0.9.2",
        "defaultTitle": "Life is...",
        "description": "하루프레스로 만들어가는 일상 블로그...",
        "siteUrl": "http://shyblue.github.com",
        "author": "Ricky Jang",
        "email": "rickyjang@gmail.com",
        "keywords": [
            "GameServer",
            "C++",
            "Linux"
        ]
    },
    "lang": "en",
    "contentLength": 5,
    "pagenate": 5,
    "dateFormate": "mm:ssa, Do MMM YYYY",
    "deployBranch": "gh-pages",
    "CNAME": "",
    "sourceDir": __dirname +"/source/data",
    "themeDir": __dirname +"/source/themes",
    "publicDir": __dirname +"/_public",
    "deployDir": __dirname +"/_deploy",
    "defaultPort": 8081,
    "defaultSlideStyle": "basic",
    "defaultCodeStyle": "default",
    "theme": {
        "name": "basic"
    },
    "recents": {
        "display": true,
        "articleCount": 5,
        "showNameTag": true
    },
    "analytics": {
        "display": false,
        "googleAnalyticsId": ""
    },
    "plugins": {
        "github": {
            "display": false,
            "user": "",
            "repoCount": 10,
            "skipForks": true
        },
        "tweets": {
            "display": false,
            "user": "",
            "tweetCount": 10
        },
        "twitter": {
            "display": false,
            "user": "",
            "tweetButton": false
        },
        "facebook": {
            "display": false,
            "user": "",
            "showLikeButton": false
        },
        "google": {
            "display": false,
            "googlePlusSize": "medium"
        },
        "disqus": {
            "display": false,
            "shortName": "",
            "showCommentCount": true
        },
        "delicious": {},
        "contributors": {
            "display": false,
            "sort": "DESC",
            "count": 5
        },
        "weather": {
            "display": false,
            "delay": 0,
            "zipcode": "KSXX0037"
        }
    }
}
