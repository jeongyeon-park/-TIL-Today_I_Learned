# BootStrap

다운로드 받지 않고 서빙 받는 방식 : CDN 
홈페이지 전체가 12개의 컬럼으로 되어있다고 생각하는 개념 : BootStrap

```html
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
    </div>
</div>
```

이걸 보면 .. col 이 세개죠 
그럼 4개의 column 씩 할당받게 됩니달라

근데 뒤에 숫자를 붙여 줄 수도 있읍니다요 

```html
<div class="container">
    <div class="row">
        <div class="col-sm-8">col-sm-8</div>
        <div class="col-sm-4">col-sm-4</div>
    </div>
    <div class="row">
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
    </div>
</div>
```

sm은 스몰 이에요 

container sm, md, lg 이 세개를 많이 씁니다. 

보통 하나의 주제를 하나의 컨테이너에 넣는게 좋아요 

![image](https://user-images.githubusercontent.com/64348346/159524108-33a31014-a1d8-40df-be0d-1766471e188b.png)

저렇게 .. 4개의 컨테이너를 만들 수 있겠죠 

근데 하나의 컨테이너에 여러개의 row가 필요할 수 있어요 

```html
    <div class="container">
        <div class="row">
            <div class="col-md-4">hello</div>
            <div class="col-md-4">hello</div>
            <div class="col-md-4">hello</div>
        </div>
    </div>
```

이러면 12개 중 4개의 col씩을 hello 가 할당 받음 .


![image](https://user-images.githubusercontent.com/64348346/159524748-60f8bfbc-163e-4255-a2da-c8899df898ef.png)

양 옆에 여백이 있는데 여백 지우는 것도 가능하다

```html
<div class="container">
        <div class="row">
            <div class="col-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
        </div>
</div>
```

12개가 넘어가면 다음줄로 넘어간다고 생각해라 

```html
<div class="row">
            <div class="col-md-4 offset-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
            <div class="col-md-4 b">hello</div>
</div>
```

해 주면 앞자리를 여백으로 비운다. 

container-fluid 사용 해 주면 여백이 사라진다. 

## <kdb>
```html
<kbd><kbd>ctrl</kbd> + <kbd>k</kbd> </kbd> <br>
<kbd>ctrl + k</kbd>
```
kdb 안에 kdb 넣으면 bold 가 된다. 

## 이미지가 서로를 침범 했을 때
```html
<div class="container">
        <div class="row">
            <div class="col-md-4">
                <img class="img-fluid rounded" src="jeju.jpg" alt=""/>
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="jeju.jpg" alt=""/>
            </div>
            <div class="col-md-4">
                <img class="img-fluid" src="jeju.jpg" alt=""/>
            </div>
        </div>
</div>
```

class="img-fluid" 하면 4개의 컬럼에 맞게 자리를 차지함. 이미지가 서로의 영역을 침범하지 않음 

rounded 하면 모서리가 살짝 깎인다
rounded-circle 하면 이미지가 원으로 보인다. 


## Color
부트스트랩에서 권장 해 주는 컬러를 쓰는 것이 좋다

text 색을 지정하고 싶다면 class 를 text-primary 이런식으로 
button 색을 지정하고싶다면 btn-primary 이런식으로 
