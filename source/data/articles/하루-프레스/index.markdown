{
    "title": "하루 프레스",
    "author": "Ricky Jang",
    "date": "2013-12-12T02:58:04.642Z",
    "categories": [],
    "tags": [
        "하루프레스"
    ],
    "acceptComment": true,
    "acceptTrackback": true,
    "published": "2013-12-12T02:58:04.642Z",
    "status": "publish",
    "important": true,
    "advanced": {}
}

# 하루 프레스 설치 및 테스트

## 하루 프레스

* 최근에 MarkDown 관련된 것들을 찾아 다니다가 옥토프레스에서 영감을 받아 제작되었다는 [하루프레스](http://haroopress.com/)을 알게됐다.
* MarkDown으로 작성한 글을 html로 변환시킨 다음 GitHub 에 올려서, 연결된 GitHub Page로 출력한다.
* 기본적인 아이디어는 [Octopress](http://octopress.org)에서 출발하였다고 하루프레스 개발자인 [Rhio Kim](http://rhio.tistory.com/)이 밝히고 있다.
* [Jekyll](http://jekyllrb.com/) 이라는 Git Hub Page 공식 저작툴과도 개념상으로는 거의 동일하다고 볼 수 있다.
* 다만, Octopress 나 Jekyll 은 루비로 작성되었는데, 하루프레스는 node.js 로 작성되었다.

## Preface

* 공식적인 [설치가이드](http://haroopress.com/post/haroopress-quick-guide/)를 참고
* 본인은 주로 Linux 에서 작업하는 관계로, 이하 모든 방법의 기준은 Gentoo Linux 에서 사용한 방법이다.

## Rquirement

1. Node.js
~~~bash
# emerge -vuD nodejs
~~~

1. Git
~~~bash
# emerge -vuD git
~~~

## 하루 프레스 설치

1. [하루 프레스 저장소](https://github.com/rhiokim/haroopress) 로 부터 clone 한다
```bash
$ git clone https://github.com/rhiokim/haroopress.git 설치할디렉토리명
```
ex)
```bash
$ git clone https://github.com/rhiokim/haroopress.git shyblue.github.io
```

1. 복제한 디렉토리에서 `make init` 을 수행한다
```bash
$ cd shyblue.github.io
$ make init
```

1. 이때 오류가 발생한다. node-gyp 를 설치하는데, ***warning root*** 권한이 필요하다. ***warning root*** 로 다음과 같은 명령으로 해결한다.
~~~bash
# npm install -g node-gyp
~~~

1. 문제는, ***warning root*** 로 해당 모듈을 설치했음에도 불구하고 지속적으로 오류가 발생한다. 어짜피 global 로 설치되어 있으므로 `Makefile`에서 해당 부분을 remark 처리한다.
~~~bash
$ vi Makefile
~~~

1. Makefile 내에서 'npm install -g node-gyp' 를 주석처리 한다.
~~~cmake
init: initialize setup gh-pages init-data guide
guide:
	    clear
        cat ./lib/haroopress/QUICK.markdown
initialize:
        #npm install -g node-gyp
        git submodule update --init --recursive
        cd ./node_modules/robotskirt;node-gyp rebuild
        cd ./node_modules/locally/;npm install
~~~

1. 다시 `make init`를 수행해서 기본정보들을 입력하고 설치를 마무리 한다.

## GitHub Page 생성

* Git Hub 에 shyblue.github.io 라는 Repository 를 생성하니 자동으로 Page가 생성이 된다.

## 정적 페이지 생성

* make gen 을 해서 정적 html 파일을 생성

## Publishing

* 정적 생성된 파일을 git hub 로 내보내고 나면 git hub page 에서 발행된 페이지를 볼 수 있다